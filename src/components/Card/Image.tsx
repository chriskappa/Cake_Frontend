import { CardImageProps } from "@/types/types";

const Image = ({ imageUrl, alt = "Image of cake", width = 130, height = 130 }: CardImageProps) => {
    return (
        <img
            width={width}
            height={height}
            className="object-cover w-[130px] h-[130px] rounded-md"
            draggable={false}
            src={imageUrl}
            alt={alt}
            loading="lazy"
        />
    );
};

export default Image;