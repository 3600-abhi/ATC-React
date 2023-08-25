import { createBrowserRouter } from "react-router-dom";
import { App, SoldRecords, Bills, Body, Home, SoldRecordDetails } from "../components";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                path: "",
                element: <Body />
            },
            {
                path: "sold-records",
                element: <SoldRecords />
            },
            {
                path: "sold-records/:recordId",
                element: <SoldRecordDetails />
            },
            {
                path: "bills",
                element: <Bills />
            }
        ]

    }
]);

export default appRouter;