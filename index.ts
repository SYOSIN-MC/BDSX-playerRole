import { CommandPermissionLevel, PlayerCommandSelector } from "../../@@bdsx/bdsx/bds/command";
import { Player } from "../../@@bdsx/bdsx/bds/player";
import { command } from "../../@@bdsx/bdsx/command";
import { bedrockServer } from "../../@@bdsx/bdsx/launcher";
import * as __database from "./database/database.json"
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: string[] } = __database
const roles = command.softEnum("roles", ...database.roles)
command.register("addplayerrole", "add player's roles", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (!roles.getValues().includes(param.role)) return output.error("エラー:そのロールは存在しません。")
    const player = getPlayerByNameTag(param.player.getName())
    if (player == undefined) {
        database.willAddRolePlayers.push(param.player.getName())
        return output.success("次のログイン時に一致する名前を持つプレイヤーにロールを付与します。")
    }
    database.playersData[player.getXuid()].push(param.role)
    return output.success("対象にロールを付与しました。")
}, {
    player: PlayerCommandSelector,
    role: roles
})
const getPlayerByNameTag = (nameTag: string): Player | undefined => {
    for (let player of bedrockServer.level.getPlayers()) {
        if (player.getName() == nameTag) return player
    }
    return undefined
}
export const hasPlayerRole = (player: Player, role: string): boolean => {
    const data = database.playersData[player.getXuid()]
    if (data == undefined) return false
    return data.includes(role)
}
export const getPlayerRole = (player: Player): string[] | [] => {
    const data = database.playersData[player.getXuid()]
    if (data == undefined) return []
    return data
}
