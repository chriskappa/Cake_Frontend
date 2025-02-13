import { Link } from "react-router-dom";
import { Details, Actions, Image } from './index'
import { ICardProps } from "@/types/types";

function Card({ children, url, onMouseOver }: ICardProps) {
    return (
        <Link onMouseEnter={onMouseOver} to={url} className="flex">
            <div className="bg-white w-[300px] h-[350px] shadow rounded-xl duration-400 hover:scale-105 flex flex-col items-center justify-between p-4 gap-3">
                {children}
            </div>
        </Link>
    );
}

Card.Image = Image;
Card.Details = Details;
Card.Actions = Actions;
export default Card;
