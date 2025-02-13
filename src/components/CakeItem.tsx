import Card from "@/components/Card/Card";
import useHomeMutations from "@/hooks/useHomeMutations";
import usePrefetchOnHover from "@/hooks/usePrefetchOnHover";
import { CakeItemProps } from "@/types/types";

const CakeItem: React.FC<CakeItemProps> = ({ cake }) => {
    const { title, imageUrl, _id, comment } = cake;
    const url = `/details/${_id}`
    const { deleteCakeMutation } = useHomeMutations();
    const { prefetchCake } = usePrefetchOnHover(_id);

    const handleDelete =
        (event: React.MouseEvent) => {
            event.preventDefault();
            if (!window.confirm(`Are you sure you want to delete2 "${title}"?`)) return;

            deleteCakeMutation.mutate(_id, {
                onError: (error) => {
                    alert(`Failed to delete cake: ${error.message}`);
                },
            });
        }

    return (
        <Card onMouseOver={prefetchCake} url={url}>
            <Card.Image imageUrl={imageUrl} />
            <Card.Details comment={comment} title={title} />
            <Card.Actions onDelete={handleDelete} />
        </Card >
    );
};

export default CakeItem;
