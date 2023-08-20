import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { command } from "bdsx/command";
import * as __database from "../../database/database.json"
import { getPlayerByNameTag, saveDatabase, removeElement } from "../base"
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: { [key: string]: string[] } } = __database
import {roles} from "../base"
command.register("removeplayerrole", "remove player's roles", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (!roles.getValues().includes(param.role)) return output.error("エラー:そのロールは存在しません。")
    const player = getPlayerByNameTag(param.player.getName())
    if (player == undefined) {
        return output.error("エラー:プレイヤーのログイン中にのみロール削除が可能です。")
    }
    const playerRoles = database.playersData[player.getXuid()]
    if (playerRoles.includes(param.role)) {
        database.playersData[player.getXuid()] = removeElement(playerRoles, param.role)
        saveDatabase()
        return output.success("指定のプレイヤーからロールを剥奪しました。")
    } else {
        return output.error("エラー:そのプレイヤーはそのロールを保持していません。")
    }
}, {
    player: PlayerCommandSelector,
    role: roles
})