"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerRole = exports.hasPlayerRole = void 0;
const command_1 = require("../../@@bdsx/bdsx/bds/command");
const command_2 = require("../../@@bdsx/bdsx/command");
const launcher_1 = require("../../@@bdsx/bdsx/launcher");
const __database = require("./database/database.json");
const database = __database;
const roles = command_2.command.softEnum("roles", ...database.roles);
command_2.command.register("addplayerrole", "add player's roles", command_1.CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (!roles.getValues().includes(param.role))
        return output.error("エラー:そのロールは存在しません。");
    const player = getPlayerByNameTag(param.player.getName());
    if (player == undefined) {
        database.willAddRolePlayers.push(param.player.getName());
        return output.success("次のログイン時に一致する名前を持つプレイヤーにロールを付与します。");
    }
    database.playersData[player.getXuid()].push(param.role);
    return output.success("対象にロールを付与しました。");
}, {
    player: command_1.PlayerCommandSelector,
    role: roles
});
const getPlayerByNameTag = (nameTag) => {
    for (let player of launcher_1.bedrockServer.level.getPlayers()) {
        if (player.getName() == nameTag)
            return player;
    }
    return undefined;
};
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
