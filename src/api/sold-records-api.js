import axios from "axios";
import { ServerConfig } from "../config";
import { Constant } from "../utils";


async function createSoldRecord(data) {
    try {
        const token = localStorage.getItem(Constant.TOKEN);

        const response = await axios.post(
            ServerConfig.BACKEND_SERVICE + "/api/v1/sold-records",
            data,
            {
                headers: {
                    "x-access-token": token
                },
            },
        );

        console.log("create-response : ", response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

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
    createSoldRecord,
    getSoldRecords,
    getSoldRecordDetails,
}