import { useState } from "react";
import { Enums } from "../utils";
import { useInputDataOfPurchaseWithNormalKanta } from "../hooks";
import { PurchaseRecordsApi } from "../api";
import { Modal, Loader } from "../components";



function PurchaseUsingNormalKanta() {

    const [inputData, setInputData] = useInputDataOfPurchaseWithNormalKanta();
    const [showModal, setShowModal] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [modalMessage, setModalMessage] = useState("");


    const handleClickSave = async () => {
        setShowLoader(true);

        const response = await PurchaseRecordsApi.createPurchaseRecord({
            ...inputData,
            weight_on_kanta_type: Enums.KANTA_TYPE.NORMAL_KANTA
        });

        setShowLoader(false);
        setShowModal(true);
        setModalMessage(response.message);

        setTimeout(() => setShowModal(false), 2000);
    };

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            current_change: e.target.name,
            [e.target.name]: e.target.value
        });
    }


    return (
        <div className="bg-c3 p-5">

            {
                showModal
                &&
                <Modal modalMessage={modalMessage} setShowModal={setShowModal} />
            }

            {
                showLoader
                &&
                <Loader />
            }

            <div className="p-10 grid grid-cols-4">

                <div className="m-5 flex flex-col ">
                    <label
                        htmlFor="seller_name"
                        className="text-c1 font-bold">
                        Seller Name
                    </label>

                    <input
                        id="seller_name"
                        type="text"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="seller_name"
                        value={inputData.seller_name}
                        onChange={e => handleInputChange(e)}
                    />

                </div>


                <div className="m-5  flex flex-col">
                    <label
                        htmlFor="seller_address"
                        className="text-c1 font-bold">
                        Seller Address
                    </label>

                    <input
                        id="seller_address"
                        type="text"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="seller_address"
                        value={inputData.seller_address}
                        onChange={e => handleInputChange(e)}
                    />

                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="goods_name"
                        className="text-c1 font-bold"
                    >Goods Name
                    </label>

                    <select
                        className="border-2 outline-c1 h-8 p-x-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        id="goods_name"
                        name="goods_name"
                        value={inputData.goods_name}
                        onChange={e => handleInputChange(e)}
                    >

                        <option>Choose the Goods</option>

                        <option value={Enums.GOODS_NAME.WHEAT}>Wheat</option>

                        <option value={Enums.GOODS_NAME.SHAYAMA}>Paddy (SHAYAMA)</option>

                        <option value={Enums.GOODS_NAME.MOTA}>Paddy (MOTA)</option>

                        <option value={Enums.GOODS_NAME.RICE}>Rice</option>

                    </select>
                </div>

                <div className="m-5  flex flex-col">
                    <label
                        htmlFor="price_per_quintal"
                        className="text-c1 font-bold">
                        Price
                    </label>

                    <input
                        id="price_per_quintal"
                        type="number"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="price_per_quintal"
                        value={inputData.price_per_quintal}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="bundle_weight"
                        className="text-c1 font-bold">
                        Bundle Weight
                    </label>

                    <input
                        id="bundle_weight"
                        type="number"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="bundle_weight_in_kg"
                        value={inputData.bundle_weight_in_kg}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="bundle_weight"
                        className="text-c1 font-bold">
                        Bundles
                    </label>

                    <input
                        id="number_of_bundles"
                        type="number"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="number_of_bundles"
                        value={inputData.number_of_bundles}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="remaining_weight"
                        className="text-c1 font-bold">
                        Remaining Weight
                    </label>

                    <input
                        id="remaining_weight"
                        type="number"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="remaining_weight_in_kg"
                        value={inputData.remaining_weight_in_kg}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="net_goods_weight"
                        className="text-c1 font-bold">
                        Net Weight
                    </label>

                    <input
                        disabled
                        id="net_goods_weight"
                        type="number"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="net_goods_weight_in_kg"
                        value={inputData.net_goods_weight_in_kg}
                    />
                </div>


                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="goods_cost"
                        className="text-c1 font-bold">
                        Goods Cost
                    </label>

                    <input
                        disabled
                        id="goods_cost"
                        type="number"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="goods_cost"
                        value={inputData.goods_cost}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="labour_cost"
                        className="text-c1 font-bold">
                        Labour Cost
                    </label>

                    <input
                        disabled
                        id="labour_cost"
                        type="number"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="labour_cost"
                        value={inputData.labour_cost}
                    />
                </div>


                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="payable_amount"
                        className="text-c1 font-bold">
                        Payable Amount
                    </label>

                    <input
                        disabled
                        id="payable_amount"
                        type="number"
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        name="payable_amount"
                        value={inputData.payable_amount}
                    />
                </div>


            </div>


            <div className="flex justify-center m-4">
                <button
                    className="bg-c1 text-white p-4 rounded-lg hover:bg-c2"
                    onClick={() => handleClickSave()}
                >
                    Save
                </button>
            </div>

        </div>

    );
}

export default PurchaseUsingNormalKanta;