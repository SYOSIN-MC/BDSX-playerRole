"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const __database = require("../../database/database.json");
const database = __database;
const base_1 = require("../base");
command_2.command.register("playerroles", "add/remove player's roles", command_1.CommandPermissionLevel.Operator).overload((param, origin, output) => {
    switch (param.option) {
        case `add`:
            if (!base_1.roles.getValues().includes(param.role))
                return output.error("エラー:そのロールは存在しません。");
            if (param.player.getName().length == 0)
                return output.error("エラー:不正なユーザー名です(セレクターは使用できません)。");
            var player = (0, base_1.getPlayerByNameTag)(param.player.getName());
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
            output.success("対象にロールを付与しました。");
            break;
        case `remove`:
            if (!base_1.roles.getValues().includes(param.role))
                return output.error("エラー:そのロールは存在しません。");
            var player = (0, base_1.getPlayerByNameTag)(param.player.getName());
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
            break;
        default:
            output.success(`§f<§bPlayerRoles§f:§6System§f> §cInvalid argument`);
            break;
    }
}, {
    option: base_1.options,
    player: command_1.PlayerCommandSelector,
    role: base_1.roles
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyUm9sZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJSb2xlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFpRjtBQUNqRiwwQ0FBdUM7QUFDdkMsMkRBQTJEO0FBQzNELE1BQU0sUUFBUSxHQUFtSCxVQUFVLENBQUE7QUFDM0ksa0NBQTBGO0FBRTFGLGlCQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSwyQkFBMkIsRUFBRSxnQ0FBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzdILFFBQVEsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNsQixLQUFLLEtBQUs7WUFDTixJQUFJLENBQUMsWUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQ3JGLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtZQUM3RixJQUFJLE1BQU0sR0FBRyxJQUFBLHlCQUFrQixFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUN2RCxJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLGtCQUFrQixDQUFDO29CQUFFLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO2dCQUN0SCxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3BFLElBQUEsbUJBQVksR0FBRSxDQUFBO2dCQUNkLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO2FBQzdEO1lBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7Z0JBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDNUYsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3ZELElBQUEsbUJBQVksR0FBRSxDQUFBO1lBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ2hDLE1BQU07UUFFVixLQUFLLFFBQVE7WUFDVCxJQUFJLENBQUMsWUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQ3JGLElBQUksTUFBTSxHQUFHLElBQUEseUJBQWtCLEVBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1lBQ3ZELElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRTtnQkFDckIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUE7YUFDdkQ7WUFDRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1lBQzFELElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBQSxvQkFBYSxFQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQy9FLElBQUEsbUJBQVksR0FBRSxDQUFBO2dCQUNkLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO2FBQ2pEO2lCQUFNO2dCQUNILE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO2FBQ3JEO1lBQ0QsTUFBTTtRQUVWO1lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1lBQ3BFLE1BQU07S0FDYjtBQUNMLENBQUMsRUFBRTtJQUNDLE1BQU0sRUFBRSxjQUFPO0lBQ2YsTUFBTSxFQUFFLCtCQUFxQjtJQUM3QixJQUFJLEVBQUUsWUFBSztDQUNkLENBQUMsQ0FBQSJ9