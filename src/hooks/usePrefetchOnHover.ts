import { useQueryClient } from "@tanstack/react-query";
import { fetchCakeDetail } from "@/services/cakeServices";

const usePrefetchOnHover = (cakeId: string) => {
    const queryClient = useQueryClient();

    const prefetchCake = () => {
        queryClient.prefetchQuery({
            queryKey: ["cakes", cakeId],
            queryFn: () => fetchCakeDetail(cakeId),
            staleTime: 1000 * 60 * 5, // To avoid prefetching same items  many times
        });
    };

    return { prefetchCake };
};

export default usePrefetchOnHover;
