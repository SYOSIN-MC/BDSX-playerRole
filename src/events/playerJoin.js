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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVySm9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXllckpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0M7QUFDcEMsMkRBQTBEO0FBQzFELGtDQUF1QztBQUN2QyxNQUFNLFFBQVEsR0FBbUgsVUFBVSxDQUFBO0FBRTNJLGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDeEIsSUFBSSxFQUFFLENBQUMsV0FBVztRQUFFLE9BQU87SUFDM0IsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQTtJQUN4QixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDakQsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUM1RixLQUFLLElBQUksT0FBTyxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9GLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ3ZEO1NBQ0o7UUFDRCxPQUFPLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUNwRCxJQUFBLG1CQUFZLEdBQUUsQ0FBQTtLQUNqQjtBQUNMLENBQUMsQ0FBQyxDQUFBIn0=