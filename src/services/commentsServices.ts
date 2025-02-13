import { URLS } from "@/constant/constant";
import { api } from "./api";
import { ICommentData } from "@/types/types";

export const addComment = async (id: string, commentData: ICommentData) => {
    const { data } = await api.post(URLS.ADD_COMMENT(id), commentData);
    return data;
};



