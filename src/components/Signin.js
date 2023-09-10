import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../api";
import { Constant } from "../utils";
import { Loader, Modal } from "../components";

function Signin() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const navigate = useNavigate();


    const handleSigninClick = async () => {
        try {
            setShowLoading(true);
            const response = await UserApi.signin({ email, password });
            setShowLoading(false);

            if (response.success) {
                localStorage.setItem(Constant.TOKEN, response.data.token);
                navigate("/home");
            }
            else {
                console.log(response.error.explanation);
                setModalMessage(response.error.explanation);
                setShowModal(true);
                setTimeout(() => setShowModal(false), 2000);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>

            {
                showModal
                &&
                <Modal modalMessage={modalMessage} setShowModal={setShowModal} />
            }


            {
                showLoading
                    ?
                    <Loader />
                    :
                    (
                        <div
                            className="border w-screen h-screen text-center flex flex-col justify-center align-middle">

                            <h1 className="text-5xl m-8 text-c1 font-semibold">Login to your Account</h1>

                            <div className="m-3">
                                <input
                                    className="border-2 h-10 w-96 outline-c1 p-3 rounded-lg text-c1 font-semibold"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="m-3">
                                <input
                                    className="border-2 h-10 w-96 outline-c1 p-3 rounded-lg text-c1 font-semibold"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <div  className="m-3">
                                <button
                                    className="bg-c1 p-3 text-white rounded-md hover:bg-c2"
                                    onClick={() => handleSigninClick()}
                                >Sign In</button>
                            </div>

                        </div>
                    )
            }
        </div>
    );
}

export default Signin;