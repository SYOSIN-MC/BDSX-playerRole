"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerByNameTag = exports.removeElement = exports.saveDatabase = exports.options = exports.roles = void 0;
const path = require("path");
const fs = require("fs");
const __database = require("../database/database.json");
const launcher_1 = require("bdsx/launcher");
const command_1 = require("bdsx/command");
const database = __database;
exports.roles = command_1.command.softEnum("roles", ...database.roles);
const Option = [`add`, `remove`];
exports.options = command_1.command.enum(`options`, Option);
const saveDatabase = () => {
    return new Promise((resolve) => {
        const databasePath = path.resolve(__dirname, "../database/database.json");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQTRCO0FBQzVCLHlCQUF3QjtBQUN4Qix3REFBdUQ7QUFFdkQsNENBQThDO0FBQzlDLDBDQUF1QztBQUN2QyxNQUFNLFFBQVEsR0FBbUgsVUFBVSxDQUFBO0FBQ2hJLFFBQUEsS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUMvRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUNyQixRQUFBLE9BQU8sR0FBRyxpQkFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDN0MsTUFBTSxZQUFZLEdBQUcsR0FBMEMsRUFBRTtJQUNwRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDM0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsMkJBQTJCLENBQUMsQ0FBQTtRQUN6RSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFQWSxRQUFBLFlBQVksZ0JBT3hCO0FBQ00sTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFlLEVBQUUsT0FBZSxFQUFZLEVBQUU7SUFDeEUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDMUIsT0FBTyxLQUFLLElBQUksT0FBTyxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBSlksUUFBQSxhQUFhLGlCQUl6QjtBQUNNLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFlLEVBQXNCLEVBQUU7SUFDdEUsS0FBSyxJQUFJLE1BQU0sSUFBSSx3QkFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRTtRQUNqRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxPQUFPO1lBQUUsT0FBTyxNQUFNLENBQUE7S0FDakQ7SUFDRCxPQUFPLFNBQVMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFMWSxRQUFBLGtCQUFrQixzQkFLOUIifQ==