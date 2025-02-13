import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment } from "@/services/commentsServices";
import { IAddCommentMutationData } from "@/types/types";

export const useCommentMutations = (id: string) => {
    const queryClient = useQueryClient();

    const addCommentMutation = useMutation({
        mutationFn: (data: IAddCommentMutationData) => addComment(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cakes", id] });
        },
    });

    return { addCommentMutation };
};
