import { Outlet } from "react-router-dom";
import { Header } from "../components";

function Home() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Home;