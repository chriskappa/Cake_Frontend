import Home from "../pages/Home";
import Details from "../pages/Details";
import { RouteConfig } from "@/types/types";

export const routes: RouteConfig[] = [
    { path: "/", component: Home, exact: true },
    { path: "/details/:id", component: Details },
];
