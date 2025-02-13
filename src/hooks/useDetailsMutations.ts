import { updateCake } from '@/services/cakeServices';
import { UpdateCakeForm } from '@/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useDetailMutations(id: string) {
    const queryClient = useQueryClient();
    const invalidateCakes = () => queryClient.invalidateQueries({ queryKey: ["cakes"] })

    const updateCakeMutation = useMutation({
        mutationFn: (obj: UpdateCakeForm) => {
            return updateCake(id, obj)
        },
        onSuccess: invalidateCakes
    })

    return { updateCakeMutation }

}

export default useDetailMutations;