import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { command } from "bdsx/command";
import * as __database from "../../database/database.json"
import { getPlayerByNameTag, saveDatabase } from "../base"
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: { [key: string]: string[] } } = __database
import {roles} from "../base"
command.register("addplayerrole", "add player's roles", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (!roles.getValues().includes(param.role)) return output.error("エラー:そのロールは存在しません。")
    const player = getPlayerByNameTag(param.player.getName())
    if (player == undefined) {
        if (!(param.player.getName() in database.willAddRolePlayers)) database.willAddRolePlayers[param.player.getName()] = []
        database.willAddRolePlayers[param.player.getName()].push(param.role)
        saveDatabase()
        return output.success("次のログイン時に一致する名前を持つプレイヤーにロールを付与します。")
    }
    if (!(player.getXuid() in database.playersData)) database.playersData[player.getXuid()] = []
    database.playersData[player.getXuid()].push(param.role)
    saveDatabase()
    return output.success("対象にロールを付与しました。")
}, {
    player: PlayerCommandSelector,
    role: roles
})