import { Suspense, lazy, memo } from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "@/hooks/useFetchDetail";
import LoadingSpinner from "@/components/LoadingSpinner";
import AddCommentModal from "@/components/Modals/AddCommentsModal";
import UpdateCakeModal from "@/components/Modals/UpdateCakeModal";
import CommentsList from "@/components/Details/CommentList";
import BackButton from "@/components/BackButton";

const CakeImage = lazy(() => import('@/components/Details/CakeImage'));

const Details = () => {
    const { id } = useParams<{ id: string }>();
    const { data: cake, isLoading } = useFetchDetail(id);

    if (isLoading) return null // To  avoid flickering since I didnt use skeleton loader to improve the ux/ui 
    if (!cake) return <p className="text-gray-500">No cake selected.</p>;

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800">{cake.title}</h2>
            <Suspense fallback={<LoadingSpinner />}>
                <CakeImage url={cake.imageUrl} />
            </Suspense>
            <CommentsList comments={cake.comments} />
            <div className="flex flex-col  gap-4 md:flex-row md:justify-between :Ditems-center mt-6">
                <BackButton />
                <AddCommentModal id={id} />
                <UpdateCakeModal cake={cake} />
            </div>
        </div>
    );
};

export default memo(Details);
