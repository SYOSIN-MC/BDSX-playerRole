import { events } from "bdsx/event";

events.serverOpen.on(() => {
    import("./playerJoin")
    import("../commands")
})