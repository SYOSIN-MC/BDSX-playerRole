import { Player } from "bdsx/bds/player";
export declare let roles: import("bdsx/commandenum").CommandSoftEnum;
export declare let options: import("bdsx/commandenum").CommandEnum<string>;
export declare const saveDatabase: () => Promise<NodeJS.ErrnoException | null>;
export declare const removeElement: (array: string[], element: string) => string[];
export declare const getPlayerByNameTag: (nameTag: string) => Player | undefined;
