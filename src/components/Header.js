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
        <div className="bg-c4 flex justify-between">

            <a href="/">
                <img className="h-24" src={Logo} alt="Logo" />
            </a>

            <ul className="flex">
                <li className="m-7 text-c1 font-semibold"><Link to="/home">Home</Link></li>
                <li className="m-7 text-c1 font-semibold"><Link to="/home/purchase-records">Purchase Record</Link></li>
                <li className="m-7 text-c1 font-semibold"><Link to="/home/sold-records">Sold Record</Link></li>
                <li className="m-7 text-c1 font-semibold"><Link to="/home/bills">Bills</Link></li>
            </ul>

            {
                localStorage.getItem(Constant.TOKEN)

                    ?

                    <button
                        className="bg-c1 text-white m-5 p-2 rounded-lg hover:bg-c2"
                        onClick={() => handleSignoutClick()} >
                        Sign Out
                    </button>

                    :

                    <button
                        className="bg-c1 text-white m-5 p-2 rounded-lg hover:bg-c2">
                        Sign In
                    </button>

            }

        </div>
    );
}

export default Header;