import { events } from "bdsx/event";
import * as __database from "../../database/database.json"
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: { [key: string]: string[] } } = __database

events.playerJoin.on((ev) => {
    if (ev.isSimulated) return;
    const player = ev.player
    if (player.getName() in database.willAddRolePlayers) {
        if (!(player.getXuid() in database.playersData)) database.playersData[player.getXuid()] = []
        for (let element of database.willAddRolePlayers[player.getName()]) {
            if (!database.playersData[player.getXuid()].includes(element) && database.roles.includes(element)) {
                database.playersData[player.getXuid()].push(element)
            }
        }
        delete database.willAddRolePlayers[player.getName()]
    }
})