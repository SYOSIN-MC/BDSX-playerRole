"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerByNameTag = exports.removeElement = exports.saveDatabase = void 0;
const path = require("path");
const fs = require("fs");
const __database = require("../database/database.json");
const launcher_1 = require("bdsx/launcher");
const database = __database;
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
