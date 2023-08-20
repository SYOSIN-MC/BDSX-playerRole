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
