import { useState } from "react";

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1 className="text-5xl font-bold m-5">Create an Account</h1>

            <div>
                <input
                    className="border-2 h-10 w-96 border-black p-3 m-5"
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div>
                <input
                    className="border-2 h-10 w-96 border-black p-3 m-5"
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div>
                <input
                    className="border-2 h-10 w-96 border-black p-3 m-5"
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button
                className="bg-yellow-500 m-5 text-white p-3 rounded-lg hover:bg-yellow-600">
                Signup
            </button>
        </div>
    );
}

export default Signup;