import { deleteIdFromArray } from '@/lib/utils';
import { addNewCake, deleteCake } from '@/services/cakeServices';
import { Cake } from '@/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

function useHomeMutations() {
    const queryClient = useQueryClient();
    const invalidateCakes = () => queryClient.invalidateQueries({ queryKey: ["cakes"] })

    const addCakeMutation = useMutation({
        mutationFn: addNewCake,
        onMutate: async (newCake) => {
            await queryClient.cancelQueries({ queryKey: ["cakes"] });

            const previousCakes = queryClient.getQueryData<Cake[]>(["cakes"]);
            const optimisticCake = { ...newCake, _id: Date.now().toString() }

            queryClient.setQueryData(["cakes"], (oldCakes: Cake[] | undefined) => {
                const updatedData = oldCakes ? [...oldCakes, optimisticCake] : [optimisticCake]
                console.log({ updatedData })
                return updatedData;
            }

            );

            return { previousCakes };
        },
        onError: (error, _newCake, context) => {
            queryClient.setQueryData(["cakes"], context?.previousCakes);

            if (error instanceof AxiosError && error.response?.data?.error?.message) {
                const errorMessage = error.response.data.error.message;
                const isDuplicate = errorMessage.toLowerCase().includes("duplicate");
                if (isDuplicate) {
                    alert("A cake with this title already exists. Please choose a unique name.");
                }
            }
        },
        onSettled: () => {
            invalidateCakes();
        },
    })

    const deleteCakeMutation = useMutation({
        mutationFn: deleteCake,
        onMutate: async (id) => {
            await queryClient.cancelQueries({ queryKey: ["cakes"] });
            const previousCakes = queryClient.getQueryData<Cake[]>(["cakes"]) ?? [];

            queryClient.setQueryData(
                ["cakes"],
                (oldCakes: Cake[] | undefined) => deleteIdFromArray(oldCakes, id)
            );

            return { previousCakes };
        },
        onError: (_err, _id, context) => {
            queryClient.setQueryData(["cakes"], context?.previousCakes);
        },
        onSettled: () => {
            invalidateCakes();
        },
    })

    return { addCakeMutation, deleteCakeMutation }
}

export default useHomeMutations;