import CakeItem from "@/components/CakeItem";
import { CakeListProps } from "@/types/types";


const CakeList: React.FC<CakeListProps> = ({ cakes }) => {
    if (cakes.length <= 0) return <h1 className="text-gray-500">Cakes missing</h1>;

    return (
        <>
            {cakes.map((cake) => <CakeItem key={cake._id} cake={cake} />)}
        </>
    );
};


export default CakeList;
