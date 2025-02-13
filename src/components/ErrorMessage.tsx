import { ErrorMessageProps } from "@/types/types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <div className="text-center text-red-500 font-semibold">
        <h1>Error: {message}</h1>
    </div>
);

export default ErrorMessage;
