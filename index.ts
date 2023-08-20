import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { Player } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { bedrockServer } from "bdsx/launcher";
import * as __database from "./database/database.json"
import "./src/commands"
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: { [key: string]: string[] } } = __database
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
