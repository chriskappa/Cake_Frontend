import { IDetailsCommentProps } from "@/types/types";

const Comment = ({ text, yumFactor, username }: IDetailsCommentProps) => (
    <li className="p-3 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center">
        <span className="w-[10ch] truncate overflow-hidden whitespace-nowrap text-sm max-w-12">{username}</span>
        <p className="text-gray-700">{text}</p>
        <span className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-sm">
            Yum: {yumFactor}/5
        </span>
    </li>
);


export default Comment;