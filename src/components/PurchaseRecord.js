import { useState } from "react";
import { ChooseKanta } from "../components";

function PurchaseRecord() {

    const [showChooseKanta, setShowChooseKanta] = useState(false);

    return (
        <div>

            { showChooseKanta && <ChooseKanta setShowChooseKanta={setShowChooseKanta} /> }

            <div>
                <h1>Feature Coming Soon !!</h1>
            </div>


            <div>
                <button
                    className="bg-c1 text-white p-4 rounded-lg fixed right-0 bottom-0 m-4"
                    onClick={() => setShowChooseKanta(true)}
                >
                    Add
                </button>
            </div>

        </div>
    );
}

export default PurchaseRecord;