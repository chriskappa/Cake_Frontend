import { useQuery } from '@tanstack/react-query';
import { fetchAvailableCakes } from '@/services/cakeServices';
import { Cake } from '@/types/types';

function useFetchCake() {
    return useQuery<Cake[]>({
        queryKey: ["cakes"],
        queryFn: fetchAvailableCakes
    })
}

export default useFetchCake;