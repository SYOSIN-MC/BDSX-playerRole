"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
event_1.events.serverOpen.on(() => {
    Promise.resolve().then(() => require("../commands"));
});
