"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
event_1.events.serverOpen.on(() => {
    Promise.resolve().then(() => require("./playerJoin"));
    Promise.resolve().then(() => require("../commands"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyT3Blbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZlck9wZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0M7QUFFcEMsY0FBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO0lBQ3RCLHFDQUFPLGNBQWMsR0FBQztJQUN0QixxQ0FBTyxhQUFhLEdBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUEifQ==