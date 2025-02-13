import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/validation/commentSchema";
import { useCommentMutations } from "@/hooks/useCommentMutations";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CommentForm, IAddCommentModalProps } from "@/types/types";
import { useState } from "react";


const renderError = (error?: { message?: string }) =>
    error?.message ? <p className="text-red-500 text-sm">{error.message}</p> : null;

const AddCommentModal = ({ id }: IAddCommentModalProps) => {
    const { addCommentMutation } = useCommentMutations(id);
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CommentForm>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            username: "",
            text: "",
        },
    });

    const onSubmit: SubmitHandler<CommentForm> = (data) => {
        addCommentMutation.mutate(data, {
            onSuccess: () => {
                reset();
                setOpen(false);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-green-500">Add Comment</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Add a New Comment</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Username Section */}
                    <div>
                        <Label>Username</Label>
                        <Input type="text" {...register("username")} />
                        {renderError(errors.username)}
                    </div>

                    {/* Comment Section */}
                    <div>
                        <Label>Comment</Label>
                        <Textarea {...register("text")} />
                        {renderError(errors.text)}
                    </div>

                    {/* Yum Section */}
                    <div>
                        <Label>Yum Factor</Label>
                        <Select onValueChange={(value) => setValue("yumFactor", Number(value))}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a rating" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1 - Not Great</SelectItem>
                                <SelectItem value="2">2 - Okay</SelectItem>
                                <SelectItem value="3">3 - Good</SelectItem>
                                <SelectItem value="4">4 - Very Tasty</SelectItem>
                                <SelectItem value="5">5 - Absolutely Amazing</SelectItem>
                            </SelectContent>
                        </Select>
                        {renderError(errors.yumFactor)}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <Button type="submit" className="bg-blue-500" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog >
    );
};

export default AddCommentModal;
