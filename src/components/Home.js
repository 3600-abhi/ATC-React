import { Outlet } from "react-router-dom";
import { Header } from "../components";

function Home() {
    return (
        <div className="h-screen bg-c4">
            <Header />
            <Outlet />
        </div>
    );
}

export default Home;