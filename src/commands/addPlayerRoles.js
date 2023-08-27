"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const __database = require("../../database/database.json");
const base_1 = require("../base");
const database = __database;
const base_2 = require("../base");
command_2.command.register("addplayerrole", "add player's roles", command_1.CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (!base_2.roles.getValues().includes(param.role))
        return output.error("エラー:そのロールは存在しません。");
    if (param.player.getName().length == 0)
        return output.error("エラー:不正なユーザー名です(セレクターは使用できません)。");
    const player = (0, base_1.getPlayerByNameTag)(param.player.getName());
    if (player == undefined) {
        if (!(param.player.getName() in database.willAddRolePlayers))
            database.willAddRolePlayers[param.player.getName()] = [];
        database.willAddRolePlayers[param.player.getName()].push(param.role);
        (0, base_1.saveDatabase)();
        return output.success("次のログイン時に一致する名前を持つプレイヤーにロールを付与します。");
    }
    if (!(player.getXuid() in database.playersData))
        database.playersData[player.getXuid()] = [];
    database.playersData[player.getXuid()].push(param.role);
    (0, base_1.saveDatabase)();
    return output.success("対象にロールを付与しました。");
}, {
    player: command_1.PlayerCommandSelector,
    role: base_2.roles
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkUGxheWVyUm9sZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRQbGF5ZXJSb2xlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFpRjtBQUNqRiwwQ0FBdUM7QUFDdkMsMkRBQTBEO0FBQzFELGtDQUEwRDtBQUMxRCxNQUFNLFFBQVEsR0FBbUgsVUFBVSxDQUFBO0FBQzNJLGtDQUE2QjtBQUM3QixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsZ0NBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN4SCxJQUFJLENBQUMsWUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDckYsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7SUFDN0YsTUFBTSxNQUFNLEdBQUcsSUFBQSx5QkFBa0IsRUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDekQsSUFBSSxNQUFNLElBQUksU0FBUyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUUsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDdEgsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BFLElBQUEsbUJBQVksR0FBRSxDQUFBO1FBQ2QsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUE7S0FDN0Q7SUFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQzVGLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2RCxJQUFBLG1CQUFZLEdBQUUsQ0FBQTtJQUNkLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLENBQUMsRUFBRTtJQUNDLE1BQU0sRUFBRSwrQkFBcUI7SUFDN0IsSUFBSSxFQUFFLFlBQUs7Q0FDZCxDQUFDLENBQUEifQ==