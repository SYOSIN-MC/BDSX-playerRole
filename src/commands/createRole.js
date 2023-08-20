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
