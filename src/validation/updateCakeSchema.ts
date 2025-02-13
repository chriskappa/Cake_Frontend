import { z } from "zod";

export const updateCakeSchema = z
    .object({
        title: z.string().min(3, "Cake name must be at least 3 characters long.").optional(),
        comment: z.string().min(5, "Comment must be at least 5 characters.").max(200, "Comment must be at maximum 200 characters.").optional(),
        yumFactor: z.number().min(1).max(5).optional(),
        imageUrl: z.string().url("Invalid URL").optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
        message: "At least one field must be updated.",
    });
