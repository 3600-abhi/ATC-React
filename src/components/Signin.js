import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../api";
import { Constant } from "../utils";
import { Loader } from "../components";

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleSigninClick = async () => {
        setIsLoading(true);
        const data = await UserApi.signin({ email, password });
        localStorage.setItem(Constant.TOKEN, data.data.token);
        setIsLoading(false);
        navigate("/home");
    }


    return (
        <>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    (
                        <div
                            className="h-screen flex-col fixed top-1/3 left-1/3 font-bold">

                            <h1 className="text-5xl m-5">Login to your Account</h1>

                            <div className="m-8 flex justify-center">
                                <input
                                    className="border-2 h-10 w-96 border-black p-3 rounded-lg"
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="m-8 flex justify-center">
                                <input
                                    className="border-2 h-10 w-96  border-black p-3 rounded-lg"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="m-8 flex justify-center">
                                <button
                                    className="bg-yellow-500 p-3 text-white rounded-md hover:bg-yellow-600"
                                    onClick={() => handleSigninClick()}
                                >Sign In</button>
                            </div>

                        </div>
                    )
            }
        </>
    );
}

export default Signin;