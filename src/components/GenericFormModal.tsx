import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Path, PathValue, FieldValues, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { GenericFormModalProps } from "@/types/types";


const GenericFormModal = <T extends FieldValues>({
    schema,
    defaultValues,
    title,
    triggerLabel,
    submitLabel,
    onSubmit,
}: GenericFormModalProps<T>) => {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleFormSubmit: SubmitHandler<T> = (data) => {
        onSubmit(data);
        setOpen(false);
    };

    // Rehydrating the form on update
    useEffect(() => {
        reset(defaultValues as T)
    }, [reset, defaultValues])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-green-500">{triggerLabel}</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                    {/* Title Section */}
                    <div>
                        <Label>Title</Label>
                        <Input type="text" {...register("title" as Path<T>)} />
                        {errors["title" as keyof T] && <p className="text-red-500 text-sm">{String(errors["title" as keyof T]?.message)}</p>}
                    </div>

                    {/* Comment */}
                    <div>
                        <Label>Comment</Label>
                        <Textarea {...register("comment" as Path<T>)} />
                        {errors["comment" as keyof T] && <p className="text-red-500 text-sm">{String(errors["comment" as keyof T]?.message)}</p>}
                    </div>

                    {/* Yum Section */}
                    <div>
                        <Label>Yum Factor</Label>
                        <Select onValueChange={(value) => setValue("yumFactor" as Path<T>, Number(value) as PathValue<T, Path<T>>)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a rating" />
                            </SelectTrigger>
                            <SelectContent>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <SelectItem key={num} value={String(num)}>{num} - {["Not Great", "Okay", "Good", "Very Tasty", "Absolutely Amazing"][num - 1]}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors["yumFactor" as keyof T] && <p className="text-red-500 text-sm">{String(errors["yumFactor" as keyof T]?.message)}</p>}
                    </div>

                    {/* Image Section */}
                    <div>
                        <Label>Image URL</Label>
                        <Input type="text" {...register("imageUrl" as Path<T>)} />
                        {errors["imageUrl" as keyof T] && <p className="text-red-500 text-sm">{String(errors["imageUrl" as keyof T]?.message)}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <Button type="submit" className="bg-blue-500">{submitLabel}</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default GenericFormModal;
