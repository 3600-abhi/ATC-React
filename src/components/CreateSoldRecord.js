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

            <div className="p-10 m-5 bg-gray-200 rounded-lg">
                <div className="flex justify-between">

                    <div>
                        <label htmlFor="firm_name">Firm Name</label>
                        <input
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="firm_name"
                            value={inputData.firm_name}
                            onChange={e => setInputData({ ...inputData, firm_name: e.target.value })}
                        />
                    </div>

                </div>

                <div className="my-10 flex justify-between">


                    <div>
                        <label htmlFor="goods_name">Goods Name</label>
                        <select
                            className="h-8 mx-2 border-2 border-black p-1 rounded-md"
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

                    <div>
                        <label htmlFor="bundles">Bundles</label>
                        <input
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="bundles"
                            value={inputData.number_of_bundles}
                            onChange={e => setInputData({ ...inputData, number_of_bundles: e.target.value })}
                        />
                    </div>


                    <div>
                        <label htmlFor="price">Price Per Quintal </label>
                        <input
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="price"
                            value={inputData.goods_price_per_quintal}
                            onChange={e => setInputData({ ...inputData, goods_price_per_quintal: e.target.value })}
                        />
                    </div>

                </div>


                <div className="my-10 flex justify-between">

                    <div>
                        <label htmlFor="truck_no">Truck No</label>
                        <input
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="truck_no"
                            value={inputData.vehicle_registration_number}
                            onChange={e => setInputData({ ...inputData, vehicle_registration_number: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="broker_name">Broker Name </label>
                        <input
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="broker_name"
                            value={inputData.broker_name}
                            onChange={e => setInputData({ ...inputData, broker_name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="driver_contact">Driver Contact</label>
                        <input
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="driver_contact"
                            value={inputData.driver_contact_number}
                            onChange={e => setInputData({ ...inputData, driver_contact_number: e.target.value })}
                        />
                    </div>

                </div>

                <div className="my-10 flex justify-between">

                    <div>
                        <label htmlFor="truck_loaded_weight">Truck Loaded Weight</label>
                        <input
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="truck_loaded_weight"
                            value={inputData.vehicle_loaded_weight}
                            onChange={e => setInputData({
                                ...inputData,
                                vehicle_loaded_weight: e.target.value,
                                net_goods_weight: e.target.value - inputData.vehicle_unloaded_weight
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="truck_unloaded_weight">Truck unloaded Weight</label>
                        <input
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="truck_unloaded_weight"
                            value={inputData.vehicle_unloaded_weight}
                            onChange={e => setInputData({
                                ...inputData,
                                vehicle_unloaded_weight: e.target.value,
                                net_goods_weight: inputData.vehicle_loaded_weight - e.target.value
                            })}
                        />
                    </div>

                    <div>
                        <label htmlFor="net_goods_weight">Net Goods Weight</label>
                        <input
                            disabled
                            className="border-2 border-black mx-2 h-8 p-2 rounded-md"
                            type="text"
                            id="net_goods_weight"
                            value={inputData.net_goods_weight}
                            onChange={e => setInputData({ ...inputData, net_goods_weight: e.target.value })}
                        />
                    </div>

                </div>

                <div className="flex justify-end">
                    <button
                        className="bg-c1 text-white p-3 m-3 rounded-lg"
                        onClick={() => handleSaveClick()}>
                        Save
                    </button>
                </div>

            </div>

        </div>
    );
}

export default CreateSoldRecord;