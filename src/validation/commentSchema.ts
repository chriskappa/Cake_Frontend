import { z } from "zod";

export const commentSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters long." }),
    text: z.string().min(5, { message: "Comment must be at least 5 characters long." }).max(200, "Comment must be at maximum 200 characters long."),
    yumFactor: z
        .number()
        .min(1, { message: "Yum Factor must be between 1 and 5." })
        .max(5, { message: "Yum Factor must be between 1 and 5." }),
});
