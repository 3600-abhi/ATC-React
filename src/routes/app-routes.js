import { createBrowserRouter } from "react-router-dom";
import {
    App,
    SoldRecords,
    Bills,
    Body,
    Home,
    SoldRecordDetails,
    CreateSoldRecord,
    PurchaseRecord,
    PurchaseUsingNormalKanta,
    PurchaseUsingDharamKanta
} from "../components";

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
                path: "purchase-records",
                element: <PurchaseRecord />
            },
            {
                path: "purchase-records/with-normal-kanta",
                element: <PurchaseUsingNormalKanta />
            },
            {
                path: "purchase-records/with-dharam-kanta",
                element: <PurchaseUsingDharamKanta />
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
            },
            {
                path: "sold-records/create",
                element: <CreateSoldRecord />
            }
        ]

    }
]);

export default appRouter;