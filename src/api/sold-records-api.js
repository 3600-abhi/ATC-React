import axios from "axios";
import { ServerConfig } from "../config";
import { Constant } from "../utils";


async function getSoldRecords() {
    try {
        const token = localStorage.getItem(Constant.TOKEN);

        const response = await axios.get(
            ServerConfig.BACKEND_SERVICE + "/api/v1/sold-records",
            {
                headers: {
                    "x-access-token": token
                }
            }
        );

        console.log("backend-response : ", response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}


async function getSoldRecordDetails(recordId) {
    try {
        const token = localStorage.getItem(Constant.TOKEN);

        const response = await axios.get(
            ServerConfig.BACKEND_SERVICE + "/api/v1/sold-records/" + recordId,
            {
                headers: {
                    "x-access-token": token
                }
            }
        );

        console.log("backend-response : ", response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export default {
    getSoldRecords,
    getSoldRecordDetails
}