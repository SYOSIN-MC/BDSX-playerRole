"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const __database = require("../../database/database.json");
const base_1 = require("../base");
const database = __database;
event_1.events.playerJoin.on((ev) => {
    if (ev.isSimulated)
        return;
    const player = ev.player;
    if (player.getName() in database.willAddRolePlayers) {
        if (!(player.getXuid() in database.playersData))
            database.playersData[player.getXuid()] = [];
        for (let element of database.willAddRolePlayers[player.getName()]) {
            if (!database.playersData[player.getXuid()].includes(element) && database.roles.includes(element)) {
                database.playersData[player.getXuid()].push(element);
            }
        }
        delete database.willAddRolePlayers[player.getName()];
        (0, base_1.saveDatabase)();
    }
});
