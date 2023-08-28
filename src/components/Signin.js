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
                            className="flex-col fixed top-1/4 left-1/3 p-10">

                            <h1 className="text-5xl m-5 text-c1 font-semibold">Login to your Account</h1>

                            <div className="m-8 flex justify-center">
                                <input
                                    className="border-2 h-10 w-96 border-c1 p-3 rounded-lg text-c1 font-semibold"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="m-8 flex justify-center">
                                <input
                                    className="border-2 h-10 w-96 border-c1 p-3 rounded-lg text-c1 font-semibold"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="m-8 flex justify-center">
                                <button
                                    className="bg-c1 p-3 text-white rounded-md hover:bg-c2"
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