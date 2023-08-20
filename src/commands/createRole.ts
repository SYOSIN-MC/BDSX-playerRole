import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { CxxString } from "bdsx/nativetype";
import * as __database from "../../database/database.json"
import { saveDatabase } from "../base";
const database: { playersData: { [key: string]: string[] }, roles: string[], willAddRolePlayers: { [key: string]: string[] } } = __database
import {roles} from "../base"
command.register("createrole", "create role", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    if (database.roles.includes(param.role)) {
        return output.error("エラー:すでにそのロールは存在します。")
    } else {
        database.roles.push(param.role)
        saveDatabase()
        roles.addValues(param.role)
        return output.success("ロールを作成しました。")
    }
}, {
    role: CxxString
})