import z from 'zod';
export const cakeSchema = z.object({
    title: z.string().min(3, "Cake name must be at least 3 characters long."),
    comment: z.string().min(5, "Comment must be at least 5 characters."),
    yumFactor: z.number().min(1, "Please select a yum factor.").max(5, "Maximum 5"),
    imageUrl: z.string().url("URl required")
});
