import { IActionsCardProps } from "@/types/types";
import { Button } from "../ui/button";

const Actions = ({ onDelete }: IActionsCardProps) => {
    return (
        <div className="flex w-full justify-between items-center h-[50px]">
            <h1 className="font-bold text-blue-500">$30.00</h1>
            <Button className="cursor-pointer bg-yellow-500" onClick={onDelete}>
                Delete
            </Button>
        </div>
    );
};

export default Actions;