const CakeImage = ({ url }: { url: string }) => (
    <div className="w-full h-48 bg-gray-200 rounded-lg mt-4 flex items-center justify-center">
        <span className="text-gray-400 text-lg">
            <img draggable={false} width={200} height={200} srcSet={url} alt="Cake image" />
        </span>
    </div>
);

export default CakeImage