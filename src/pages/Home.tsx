import AddCakeModal from "@/components/AddCakeModal/AddCakeModal";
import useFetchCake from "@/hooks/useFetchCake";
import useHomeMutations from "@/hooks/useHomeMutations";
import ErrorMessage from "@/components/ErrorMessage";
import CakeList from "@/components/Home/CakeList";
import SkeletonLoader from "@/components/SkeletonLoader";

function Home() {
    const { data: cakes = [], isLoading, error } = useFetchCake();
    const { addCakeMutation } = useHomeMutations();

    if (error) return <ErrorMessage message={error.message} />;

    return (
        <div>
            <div className="flex justify-end p-2">
                <AddCakeModal onAddCake={addCakeMutation.mutate} />
            </div>

            <div className="flex flex-wrap gap-7 items-center justify-center p-5">
                {isLoading ? <SkeletonLoader /> : <CakeList cakes={cakes} />}
            </div>
        </div>
    );
}

export default Home;
