import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { CxxString } from "bdsx/nativetype";
import * as __database from "../../database/database.json"
import { removeElement, saveDatabase } from "../base";
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: { [key: string]: string[] } } = __database
import {roles} from "../base"
command.register("removerole", "remove role", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (database.roles.includes(param.role)) {
            const newRoles = removeElement(database.roles,param.role)
            database.roles = newRoles
            roles.removeValues(param.role)
            for (let key in database.playersData) {
                if (database.playersData[key].includes(param.role)) {
                    database.playersData[key] = removeElement(database.playersData[key],param.role)
                }
            }
            for (let key in database.willAddRolePlayers) {
                if (database.willAddRolePlayers[key].includes(param.role)) {
                    database.willAddRolePlayers[key] = removeElement(database.willAddRolePlayers[key],param.role)
                }
            }
            saveDatabase()
            return output.success("ロールを削除しました。")
    } else {
        return output.error("エラー:そのロールは存在しません。")
    }
}, {
    role: roles
})