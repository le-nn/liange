import React from "react";
import { RouterConfig } from "Libs/Routing/RouterConfig";

export const routes: RouterConfig = {
    // absolute path
    basepath: "/app",
    // default home page path
    homepath: "/app",
    routes: [
        {
            component: () => import("./Views/SpaHomePage"),
            icon: () => <></>,
            path: "/",
            to: "/",
            title: "ホーム"
        },
        {
            component: () => import("./Views/CounterPage"),
            icon: () => <></>,
            path: "/counter",
            to: "/counter",
            title: "カウンター"
        }
    ]
};