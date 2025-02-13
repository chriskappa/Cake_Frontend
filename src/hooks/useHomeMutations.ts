import { deleteIdFromArray } from '@/lib/utils';
import { addNewCake, deleteCake } from '@/services/cakeServices';
import { Cake } from '@/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useHomeMutations() {
    const queryClient = useQueryClient();
    const invalidateCakes = () => queryClient.invalidateQueries({ queryKey: ["cakes"] })

    const addCakeMutation = useMutation({
        mutationFn: addNewCake,
        onMutate: async (newCake) => {
            await queryClient.cancelQueries({ queryKey: ["cakes"] });

            const previousCakes = queryClient.getQueryData<Cake[]>(["cakes"]);

            queryClient.setQueryData(["cakes"], (oldCakes: Cake[] | undefined) =>
                oldCakes ? [...oldCakes, newCake] : [newCake]
            );

            return { previousCakes };
        },
        onError: (_err, _newCake, context) => {
            queryClient.setQueryData(["cakes"], context?.previousCakes);
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