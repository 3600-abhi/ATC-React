import { Link } from "react-router-dom";

function ChooseKanta({ setShowChooseKanta }) {
    return (

        <div
            className="bg-c3 p-5 w-96 fixed top-1/3 left-1/3 rounded-lg shadow-lg">

            <div>

                <div className="m-5 text-c1 font-bold text-center text-2xl">
                    <Link to="/home/purchase-records/with-normal-kanta">
                        Weight on Normal-Kanta
                    </Link>
                </div>

                <hr className="border-dotted border-white" />

                <div className="m-5 text-c1 font-bold text-center text-2xl">
                    <Link to="/home/purchase-records/with-dharam-kanta">
                        Weight on Dharam-Kanta
                    </Link>
                </div>

                <div className="mt-16">
                    <button
                        className="bg-c1 text-white p-2 rounded-md absolute right-3 bottom-3"
                        onClick={() => setShowChooseKanta(false)}
                    >
                        Cancel
                    </button>
                </div>

            </div>

        </div>
    );
}


export default ChooseKanta;