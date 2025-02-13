import { updateCakeSchema } from "@/validation/updateCakeSchema";
import { UpdateCakeForm } from "@/types/types";
import useDetailMutations from "@/hooks/useDetailsMutations";
import GenericFormModal from "../GenericFormModal";


const UpdateCakeModal = ({ cake }: { cake: UpdateCakeForm & { _id: string } }) => {
    const { updateCakeMutation } = useDetailMutations(cake._id);

    return (
        <GenericFormModal <UpdateCakeForm>
            schema={updateCakeSchema}
            defaultValues={{
                title: cake.title,
                comment: cake.comment,
                imageUrl: cake.imageUrl,
                yumFactor: cake.yumFactor,
            }}
            title="Update Cake"
            triggerLabel="Edit Cake"
            submitLabel="Update"
            onSubmit={(data: UpdateCakeForm) => updateCakeMutation.mutate(data)}
        />
    );
};

export default UpdateCakeModal;
