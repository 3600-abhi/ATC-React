import { Link, useNavigate } from "react-router-dom";
import { Constant } from "../utils";
import Logo from "../assets/Logo.png";

function Header() {

    const navigate = useNavigate();

    const handleSignoutClick = () => {
        localStorage.removeItem(Constant.TOKEN);
        navigate("/");
    }


    return (
        <div className="bg-black flex justify-between">

            <a href="/">
                <img className="h-24" src={Logo} alt="Logo" />
            </a>

            <ul className="flex">
                <li className="m-7 text-yellow-500"><Link to="/home">Home</Link></li>
                <li className="m-7 text-yellow-500"><Link to="/home/sold-records">Sold-Records</Link></li>
                <li className="m-7 text-yellow-500"><Link to="/home/bills">Bills</Link></li>
            </ul>

            {
                localStorage.getItem(Constant.TOKEN)

                    ?

                    <button
                        className="bg-yellow-500 text-white m-5 p-3 rounded-lg hover:bg-yellow-600"
                        onClick={() => handleSignoutClick()} >
                        Sign Out
                    </button>

                    :

                    <button
                        className="bg-yellow-500 text-white m-5 p-3 rounded-lg hover:bg-yellow-600">
                        Sign In
                    </button>

            }

        </div>
    );
}

export default Header;