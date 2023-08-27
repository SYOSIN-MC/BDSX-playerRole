"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerRole = exports.hasPlayerRole = void 0;
const __database = require("./database/database.json");
require("./src/events");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1REFBc0Q7QUFDdEQsd0JBQXFCO0FBQ3JCLE1BQU0sUUFBUSxHQUFtSCxVQUFVLENBQUE7QUFDcEksTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFjLEVBQUUsSUFBWSxFQUFXLEVBQUU7SUFDbkUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUNuRCxJQUFJLElBQUksSUFBSSxTQUFTO1FBQUUsT0FBTyxLQUFLLENBQUE7SUFDbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzlCLENBQUMsQ0FBQTtBQUpZLFFBQUEsYUFBYSxpQkFJekI7QUFDTSxNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQWMsRUFBaUIsRUFBRTtJQUMzRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ25ELElBQUksSUFBSSxJQUFJLFNBQVM7UUFBRSxPQUFPLEVBQUUsQ0FBQTtJQUNoQyxPQUFPLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQTtBQUpZLFFBQUEsYUFBYSxpQkFJekIifQ==