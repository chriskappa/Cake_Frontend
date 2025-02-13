import { memo } from 'react';
import { ICardDetailsProps } from "@/types/types";

const Details = ({ title, comment }: ICardDetailsProps) => {
    return (
        <div className="flex flex-col items-center text-center w-full">
            <h1 className="font-semibold text-gray-700 text-lg truncate w-[260px]">{title}</h1>
            <p className="text-gray-400 font-light text-sm w-[260px] line-clamp-2">{comment}</p>
        </div>
    );
};


export default memo(Details);
