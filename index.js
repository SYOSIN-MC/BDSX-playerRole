"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerRole = exports.hasPlayerRole = void 0;
const __database = require("./database/database.json");
const database = __database;
const hasPlayerRole = (player, role) => {
    const data = database.playersData[player.getXuid()];
    if (data == undefined)
        return false;
    return data.includes(role);
};
exports.hasPlayerRole = hasPlayerRole;
const getPlayerRole = (player) => {
    const data = database.playersData[player.getXuid()];
    if (data == undefined)
        return [];
    return data;
};
exports.getPlayerRole = getPlayerRole;
