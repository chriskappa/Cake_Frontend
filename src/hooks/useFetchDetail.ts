import { useQuery } from '@tanstack/react-query';
import { fetchCakeDetail } from '@/services/cakeServices';
import { Cake } from '@/types/types';

function useFetchDetail(id: string) {
    return useQuery<Cake>({
        queryKey: ["cakes", id],
        queryFn: () => fetchCakeDetail(id)
    })
}

export default useFetchDetail;