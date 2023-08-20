"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const __database = require("../../database/database.json");
const base_1 = require("../base");
const database = __database;
const roles = command_2.command.softEnum("roles", ...database.roles);
command_2.command.register("removeplayerrole", "remove player's roles", command_1.CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (!roles.getValues().includes(param.role))
        return output.error("エラー:そのロールは存在しません。");
    const player = (0, base_1.getPlayerByNameTag)(param.player.getName());
    if (player == undefined) {
        return output.error("エラー:プレイヤーのログイン中にのみロール削除が可能です。");
    }
    const playerRoles = database.playersData[player.getXuid()];
    if (playerRoles.includes(param.role)) {
        database.playersData[player.getXuid()] = (0, base_1.removeElement)(playerRoles, param.role);
        (0, base_1.saveDatabase)();
        return output.success("指定のプレイヤーからロールを剥奪しました。");
    }
    else {
        return output.error("エラー:そのプレイヤーはそのロールを保持していません。");
    }
}, {
    player: command_1.PlayerCommandSelector,
    role: roles
});
