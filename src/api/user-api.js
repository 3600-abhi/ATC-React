import axios from "axios";
import { ServerConfig } from "../config";

async function signin(user) {
    try {
        const response = await axios.post(
            ServerConfig.BACKEND_SERVICE + "/api/v1/users/signin",
            {
                email: user.email,
                password: user.password
            }
        );

        console.log("backend-response : ", response.data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export default {
    signin
}