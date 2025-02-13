import { UrlsType } from "@/types/types";

export const URLS: UrlsType = {
    FETCH_CAKES: "/api/cakes",
    FETCH_CAKE: (id: string) => `/api/cake/${id}`,
    ADD_CAKE: "/api/addcake/",
    DELETE_CAKE: (id: string) => `/api/cake/${id}`,
    UPDATE_CAKE: (id: string) => `/api/cake/${id}`,
    ADD_COMMENT: (id: string) => `/api/cake/${id}/comments`,
};
