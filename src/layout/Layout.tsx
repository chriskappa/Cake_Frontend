import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import MainContent from "./MainContent";

interface ILayoutProps { children: React.ReactNode }

function Layout({ children }: ILayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-background ">
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <MainContent>
                {children}
            </MainContent>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Layout;