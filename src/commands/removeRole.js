"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const __database = require("../../database/database.json");
const base_1 = require("../base");
const database = __database;
const base_2 = require("../base");
command_2.command.register("removerole", "remove role", command_1.CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (database.roles.includes(param.role)) {
        const newRoles = (0, base_1.removeElement)(database.roles, param.role);
        database.roles = newRoles;
        base_2.roles.removeValues(param.role);
        for (let key in database.playersData) {
            if (database.playersData[key].includes(param.role)) {
                database.playersData[key] = (0, base_1.removeElement)(database.playersData[key], param.role);
            }
        }
        for (let key in database.willAddRolePlayers) {
            if (database.willAddRolePlayers[key].includes(param.role)) {
                database.willAddRolePlayers[key] = (0, base_1.removeElement)(database.willAddRolePlayers[key], param.role);
            }
        }
        (0, base_1.saveDatabase)();
        return output.success("ロールを削除しました。");
    }
    else {
        return output.error("エラー:そのロールは存在しません。");
    }
}, {
    role: base_2.roles
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbW92ZVJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMEQ7QUFDMUQsMENBQXVDO0FBRXZDLDJEQUEwRDtBQUMxRCxrQ0FBc0Q7QUFDdEQsTUFBTSxRQUFRLEdBQW1ILFVBQVUsQ0FBQTtBQUMzSSxrQ0FBNkI7QUFDN0IsaUJBQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxnQ0FBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzlHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUEsb0JBQWEsRUFBQyxRQUFRLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6RCxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQTtRQUN6QixZQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixLQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDbEMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBQSxvQkFBYSxFQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2xGO1NBQ0o7UUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QyxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2RCxRQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBQSxvQkFBYSxFQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDaEc7U0FDSjtRQUNELElBQUEsbUJBQVksR0FBRSxDQUFBO1FBQ2QsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0tBQzNDO1NBQU07UUFDSCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtLQUMzQztBQUNMLENBQUMsRUFBRTtJQUNDLElBQUksRUFBRSxZQUFLO0NBQ2QsQ0FBQyxDQUFBIn0=