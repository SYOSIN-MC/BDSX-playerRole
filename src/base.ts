import * as path from "path"
import * as fs from "fs"
import * as __database from "../database/database.json"
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { command } from "bdsx/command";
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: { [key: string]: string[] } } = __database
export let roles = command.softEnum("roles", ...database.roles)
export const saveDatabase = (): Promise<NodeJS.ErrnoException | null> => {
    return new Promise((resolve) => {
        const databasePath = path.resolve(__dirname, "./database/database.json")
        fs.writeFile(databasePath, JSON.stringify(database), (err) => {
            resolve(err)
        })
    })
}
export const removeElement = (array: string[], element: string): string[] => {
    return array.filter((value) => {
        return value != element
    })
}
export const getPlayerByNameTag = (nameTag: string): Player | undefined => {
    for (let player of bedrockServer.level.getPlayers()) {
        if (player.getName() == nameTag) return player
    }
    return undefined
}