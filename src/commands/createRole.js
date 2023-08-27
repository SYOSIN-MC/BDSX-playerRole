"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const nativetype_1 = require("bdsx/nativetype");
const __database = require("../../database/database.json");
const base_1 = require("../base");
const database = __database;
const base_2 = require("../base");
command_2.command.register("createrole", "create role", command_1.CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (database.roles.includes(param.role)) {
        return output.error("エラー:すでにそのロールは存在します。");
    }
    else {
        database.roles.push(param.role);
        (0, base_1.saveDatabase)();
        base_2.roles.addValues(param.role);
        return output.success("ロールを作成しました。");
    }
}, {
    role: nativetype_1.CxxString
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZVJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMEQ7QUFDMUQsMENBQXVDO0FBQ3ZDLGdEQUE0QztBQUM1QywyREFBMEQ7QUFDMUQsa0NBQXVDO0FBQ3ZDLE1BQU0sUUFBUSxHQUFtSCxVQUFVLENBQUE7QUFDM0ksa0NBQTZCO0FBQzdCLGlCQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZ0NBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUM5RyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtLQUM3QztTQUFNO1FBQ0gsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLElBQUEsbUJBQVksR0FBRSxDQUFBO1FBQ2QsWUFBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0IsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0tBQ3ZDO0FBQ0wsQ0FBQyxFQUFFO0lBQ0MsSUFBSSxFQUFFLHNCQUFTO0NBQ2xCLENBQUMsQ0FBQSJ9