import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { IBackButtonProps } from "@/types/types";

const BackButton = ({ to = "/" }: IBackButtonProps) => {
    return (
        < Button
            className=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
            <Link to={to}>
                Back to List
            </Link>
        </Button >
    )
}

export default BackButton;