import axios from "axios";
import { ServerConfig } from "../config";
import { Constant } from "../utils";


async function createPurchaseRecord(data) {
    try {
        const token = localStorage.getItem(Constant.TOKEN);

        const response = await axios.post(
            ServerConfig.BACKEND_SERVICE + "/api/v1/purchase-records",
            data,
            {
                headers: {
                    "x-access-token": token
                }
            }
        );

        console.log("create-purchase-response:", response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}


async function getPurchaseRecordsDetails(date) {
    try {
        const token = localStorage.getItem(Constant.TOKEN);

        const response = await axios.get(
            ServerConfig.BACKEND_SERVICE + "/api/v1/purchase-records/date-wise/" + date,
            {
                headers: {
                    "x-access-token": token
                }
            }
        );

        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    createPurchaseRecord,
    getPurchaseRecordsDetails
}