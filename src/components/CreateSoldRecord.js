import { useState } from "react";
import { Enums } from "../utils";
import { SoldRecordsApi } from "../api";


function CreateSoldRecord() {

    const [inputData, setInputData] = useState({
        firm_name: "",
        goods_name: "",
        number_of_bundles: "",
        goods_price_per_quintal: "",
        vehicle_registration_number: "",
        broker_name: "",
        driver_contact_number: "",
        vehicle_loaded_weight: "",
        vehicle_unloaded_weight: "",
        net_goods_weight: ""
    });

    const handleSaveClick = async () => {
        const response = await SoldRecordsApi.createSoldRecord(inputData);
    };

    return (
        <div className="bg-c3">

            <div
                className="p-10 m-5 bg-gray-200 rounded-lg grid grid-cols-4">

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="firm_name"
                        className="text-c1 font-bold">
                        Firm Name
                    </label>

                    <input
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="text"
                        id="firm_name"
                        value={inputData.firm_name}
                        onChange={e => setInputData({ ...inputData, firm_name: e.target.value })}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="goods_name"
                        className="text-c1 font-bold">
                        Goods Name
                    </label>

                    <select
                        className="border-2 outline-c1 h-8 p-x-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        id="product-select"
                        name="selected-product"
                        value={inputData.goods_name}
                        onChange={e => setInputData({ ...inputData, goods_name: e.target.value })}
                    >

                        <option>Choose the Goods</option>

                        <option value={Enums.GOODS_NAME.WHEAT}>Wheat</option>

                        <option value={Enums.GOODS_NAME.PADDY}>Paddy</option>

                        <option value={Enums.GOODS_NAME.RICE}>Rice</option>

                    </select>
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="bundles"
                        className="text-c1 font-bold">
                        Bundles
                    </label>

                    <input
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="number"
                        id="bundles"
                        value={inputData.number_of_bundles}
                        onChange={e => setInputData({ ...inputData, number_of_bundles: e.target.value })}
                    />
                </div>


                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="price"
                        className="text-c1 font-bold">
                        Price Per Quintal
                    </label>

                    <input
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="number"
                        id="price"
                        value={inputData.goods_price_per_quintal}
                        onChange={e => setInputData({ ...inputData, goods_price_per_quintal: e.target.value })}
                    />
                </div>


                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="truck_no"
                        className="text-c1 font-bold">
                        Truck No
                    </label>

                    <input
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="text"
                        id="truck_no"
                        value={inputData.vehicle_registration_number}
                        onChange={e => setInputData({ ...inputData, vehicle_registration_number: e.target.value })}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="broker_name"
                        className="text-c1 font-bold">
                        Broker Name
                    </label>

                    <input
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="text"
                        id="broker_name"
                        value={inputData.broker_name}
                        onChange={e => setInputData({ ...inputData, broker_name: e.target.value })}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="driver_contact"
                        className="text-c1 font-bold">
                        Driver Contact
                    </label>

                    <input
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="number"
                        id="driver_contact"
                        value={inputData.driver_contact_number}
                        onChange={e => setInputData({ ...inputData, driver_contact_number: e.target.value })}
                    />
                </div>


                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="truck_loaded_weight"
                        className="text-c1 font-bold">
                        Truck Loaded Weight
                    </label>

                    <input
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="number"
                        id="truck_loaded_weight"
                        value={inputData.vehicle_loaded_weight}
                        onChange={e => setInputData({
                            ...inputData,
                            vehicle_loaded_weight: e.target.value,
                            net_goods_weight: e.target.value - inputData.vehicle_unloaded_weight
                        })}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="truck_unloaded_weight"
                        className="text-c1 font-bold">
                        Truck unloaded Weight
                    </label>

                    <input
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="number"
                        id="truck_unloaded_weight"
                        value={inputData.vehicle_unloaded_weight}
                        onChange={e => setInputData({
                            ...inputData,
                            vehicle_unloaded_weight: e.target.value,
                            net_goods_weight: inputData.vehicle_loaded_weight - e.target.value
                        })}
                    />
                </div>

                <div className="m-5 flex flex-col">
                    <label
                        htmlFor="net_goods_weight"
                        className="text-c1 font-bold">
                        Net Goods Weight
                    </label>

                    <input
                        disabled
                        className="border-2 outline-c1 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                        type="number"
                        id="net_goods_weight"
                        value={inputData.net_goods_weight}
                        onChange={e => setInputData({ ...inputData, net_goods_weight: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    className="bg-c1 text-white p-3 m-3 rounded-lg"
                    onClick={() => handleSaveClick()}>
                    Save
                </button>
            </div>


        </div>
    );
}

export default CreateSoldRecord;