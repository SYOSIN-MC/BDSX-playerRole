"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerByNameTag = exports.removeElement = exports.saveDatabase = exports.roles = void 0;
const path = require("path");
const fs = require("fs");
const __database = require("../database/database.json");
const launcher_1 = require("bdsx/launcher");
const command_1 = require("bdsx/command");
const database = __database;
exports.roles = command_1.command.softEnum("roles", ...database.roles);
const saveDatabase = () => {
    return new Promise((resolve) => {
        const databasePath = path.resolve(__dirname, "./database/database.json");
        fs.writeFile(databasePath, JSON.stringify(database), (err) => {
            resolve(err);
        });
    });
};
exports.saveDatabase = saveDatabase;
const removeElement = (array, element) => {
    return array.filter((value) => {
        return value != element;
    });
};
exports.removeElement = removeElement;
const getPlayerByNameTag = (nameTag) => {
    for (let player of launcher_1.bedrockServer.level.getPlayers()) {
        if (player.getName() == nameTag)
            return player;
    }
    return undefined;
};
exports.getPlayerByNameTag = getPlayerByNameTag;
