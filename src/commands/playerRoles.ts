import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { command } from "bdsx/command";
import * as __database from "../../database/database.json";
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: { [key: string]: string[] } } = __database
import { roles, getPlayerByNameTag, saveDatabase, removeElement, options } from "../base";

command.register("playerroles", "add/remove player's roles", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    switch (param.option) {
        case `add`:
            if (!roles.getValues().includes(param.role)) return output.error("エラー:そのロールは存在しません。")
            if (param.player.getName().length == 0) return output.error("エラー:不正なユーザー名です(セレクターは使用できません)。")
            var player = getPlayerByNameTag(param.player.getName())
            if (player == undefined) {
                if (!(param.player.getName() in database.willAddRolePlayers)) database.willAddRolePlayers[param.player.getName()] = []
                database.willAddRolePlayers[param.player.getName()].push(param.role)
                saveDatabase()
                return output.success("次のログイン時に一致する名前を持つプレイヤーにロールを付与します。")
            }
            if (!(player.getXuid() in database.playersData)) database.playersData[player.getXuid()] = []
            database.playersData[player.getXuid()].push(param.role)
            saveDatabase()
            output.success("対象にロールを付与しました。")
            break;

        case `remove`:
            if (!roles.getValues().includes(param.role)) return output.error("エラー:そのロールは存在しません。")
            var player = getPlayerByNameTag(param.player.getName())
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
            break;

        default:
            output.success(`§f<§bPlayerRoles§f:§6System§f> §cInvalid argument`);
            break;
    }
}, {
    option: options,
    player: PlayerCommandSelector,
    role: roles
})