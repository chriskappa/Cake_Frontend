import { URLS } from "@/constant/constant";
import { api } from "@/services/api";
import { Cake, UpdateCakeForm } from "@/types/types";

export const fetchAvailableCakes = async () => {
    const result = await api.get(URLS.FETCH_CAKES)
    const data = await result.data;
    return data;
}

export const fetchCakeDetail = async (id: string) => {
    const result = await api.get(URLS.FETCH_CAKE(id))
    const data = await result.data;
    return data;
}

export const addNewCake = async (obj: Cake) => await api.post(URLS.ADD_CAKE, obj)

export const deleteCake = async (id: string) => await api.delete(URLS.DELETE_CAKE(id))

export const updateCake = async (id: string, commentData: UpdateCakeForm) => {
    const { data } = await api.put(URLS.UPDATE_CAKE(id), commentData);
    return data;
};