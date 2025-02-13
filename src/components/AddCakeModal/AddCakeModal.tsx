import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cakeSchema } from "@/validation/cakeSchema";
import { Cake, UpdateCakeForm } from "@/types/types";

interface AddCakeModalProps {
    onAddCake: (data: Cake) => unknown;
}

const AddCakeModal: React.FC<AddCakeModalProps> = ({ onAddCake }) => {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<UpdateCakeForm>({
        resolver: zodResolver(cakeSchema),
        defaultValues: {
            title: "",
            comment: "",
            imageUrl: "",
        },
    });

    const onSubmit: SubmitHandler<UpdateCakeForm> = (data) => {
        onAddCake(data as Cake);
        reset();
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-green-500">Add New Cake</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Add a New Cake</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Cake Name Section */}
                    <div>
                        <Label>Cake Name</Label>
                        <Input type="text" {...register("title")} />
                        {errors.title?.message && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    {/* Comment Section */}
                    <div>
                        <Label>Comment</Label>
                        <Textarea {...register("comment")} />
                        {errors.comment?.message && <p className="text-red-500 text-sm">{errors.comment.message}</p>}
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
                        {errors.yumFactor?.message && <p className="text-red-500 text-sm">{errors.yumFactor.message}</p>}
                    </div>

                    {/* Image URL Section*/}
                    <div>
                        <Label>Image URL</Label>
                        <Input type="text" {...register("imageUrl")} />
                        {errors.imageUrl?.message && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
                    </div>

                    {/*  Button Section */}
                    <div className="flex justify-end">
                        <Button type="submit" className="bg-blue-500">Submit</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddCakeModal;
