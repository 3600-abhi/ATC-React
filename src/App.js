import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Outlet } from "react-router-dom";
import { Home, Signin, } from "./components";
import appRouter from "./routes/app-routes";
import { Constant } from "./utils";



export default function App() {
    return (
        <>
            {
                localStorage.getItem(Constant.TOKEN)
                    ?
                <Home />
                    :
                <Signin />
            }
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);