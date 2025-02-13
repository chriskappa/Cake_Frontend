import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-lg">Page Not Found</p>
            <Link to="/" className="mt-4 text-blue-500 hover:underline">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;
