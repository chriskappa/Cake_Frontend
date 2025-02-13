import { ICommentListProp } from "@/types/types";
import Comment from "./Comment";

const CommentsList = ({ comments }: ICommentListProp) => {
    if (comments.length <= 0) return <p className="text-gray-500 mt-2">No comments yet.</p>
    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Comments</h3>
            <ul className="mt-2 space-y-3">
                {comments.map((comment, index) => (
                    <Comment key={index} text={comment.text} yumFactor={comment.yumFactor} username={comment.username} />
                ))}
            </ul>

        </div>
    )
}

export default CommentsList;;