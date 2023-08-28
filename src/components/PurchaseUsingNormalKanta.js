import { useState } from "react";
import { Enums } from "../utils";

function PurchaseUsingNormalKanta() {
    const labourCostPerQuintal = 16;

    const [inputData, setInputData] = useState({
        seller_name: "",
        seller_address: "",
        goods_name: "",
        bundle_weight_per_kg: "60",
        number_of_bundles: "",
        remaining_weight_in_kg: "",
        net_goods_weight_in_kg: "",
        price_per_quintal: "",
        goods_cost: "",
        labour_cost: "",
        payable_amount: ""
    });

    const handleClickSave = async () => {
        console.log(inputData);
    };

    const handleAutoFill = (remWt) => {
        const netGoodsWt = Math.floor(((inputData.bundle_weight_per_kg - 1.5) * inputData.number_of_bundles) + (remWt - 1));
        const goodsCost = Math.floor(inputData.price_per_quintal * (netGoodsWt / 100));
        const labourCost = Math.ceil(labourCostPerQuintal * (netGoodsWt / 100));
        const payableAmount = goodsCost - labourCost;

        setInputData({
            ...inputData,
            remaining_weight_in_kg: remWt,
            net_goods_weight_in_kg: netGoodsWt,
            goods_cost: goodsCost,
            labour_cost: labourCost,
            payable_amount: payableAmount
        });
    }
    return (
         <div className="bg-c3 p-5">

                <div className="p-10 flex justify-around">

                    <div>
                        <label
                            htmlFor="seller_name"
                            className="text-c1 font-bold">
                            Seller Name
                        </label>

                        <input
                            id="seller_name"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.seller_name}
                            onChange={e => setInputData({ ...inputData, seller_name: e.target.value })}
                        />

                    </div>


                    <div>
                        <label
                            htmlFor="seller_address"
                            className="text-c1 font-bold">
                            Seller Address
                        </label>

                        <input
                            id="seller_address"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.seller_address}
                            onChange={e => setInputData({ ...inputData, seller_address: e.target.value })}
                        />

                    </div>

                    <div>
                        <label
                            htmlFor="goods_name"
                            className="text-c1 font-bold"
                        >Goods Name
                        </label>

                        <select
                            className="border-2 outline-c1 mx-2 h-8 p-x-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            id="product-select"
                            name="selected-product"
                            value={inputData.goods_name}
                            onChange={e => setInputData({ ...inputData, goods_name: e.target.value })}
                        >

                            <option>Choose the Goods</option>

                            <option value={Enums.GOODS_NAME.WHEAT}>Wheat</option>

                            <option value={Enums.GOODS_NAME.SHAYAMA}>Paddy (SHAYAMA)</option>

                            <option value={Enums.GOODS_NAME.MOTA}>Paddy (MOTA)</option>

                            <option value={Enums.GOODS_NAME.RICE}>Rice</option>

                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="price_per_quintal"
                            className="text-c1 font-bold">
                            Price
                        </label>

                        <input
                            id="price_per_quintal"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.price_per_quintal}
                            onChange={e => setInputData({ ...inputData, price_per_quintal: e.target.value })}
                        />
                    </div>
                </div>

                <div className="p-10 flex justify-around">

                    <div>
                        <label
                            htmlFor="bundle_weight"
                            className="text-c1 font-bold">
                            Bundle Weight
                        </label>

                        <input
                            id="bundle_weight"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.bundle_weight_per_kg}
                            onChange={e => setInputData({ ...inputData, bundle_weight_per_kg: e.target.value })}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="bundle_weight"
                            className="text-c1 font-bold">
                            Bundles
                        </label>

                        <input
                            id="number_of_bundles"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.number_of_bundles}
                            onChange={e => setInputData({ ...inputData, number_of_bundles: e.target.value })}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="remaining_weight"
                            className="text-c1 font-bold">
                            Remaining Weight
                        </label>

                        <input
                            id="remaining_weight"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.remaining_weight_in_kg}
                            onChange={e => handleAutoFill(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="net_goods_weight"
                            className="text-c1 font-bold">
                            Net Weight
                        </label>

                        <input
                            disabled
                            id="net_goods_weight"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.net_goods_weight_in_kg}
                        />
                    </div>
                </div>

                <div className="p-10 flex justify-around">

                    <div>
                        <label
                            htmlFor="goods_cost"
                            className="text-c1 font-bold">
                            Goods Cost
                        </label>

                        <input
                            disabled
                            id="goods_cost"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.goods_cost}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="labour_cost"
                            className="text-c1 font-bold">
                            Labour Cost
                        </label>

                        <input
                            disabled
                            id="labour_cost"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.labour_cost}
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="payable_amount"
                            className="text-c1 font-bold">
                            Payable Amount
                        </label>

                        <input
                            disabled
                            id="payable_amount"
                            type="text"
                            className="border-2 outline-c1 mx-2 h-8 p-2 rounded-md text-c1 font-semibold focus:outline-c1"
                            value={inputData.payable_amount}
                        />
                    </div>

                </div>

                <div className="flex justify-center m-5">
                    <button
                        className="bg-c1 text-white p-4 rounded-lg"
                        onClick={() => handleClickSave()}
                    >
                        Save
                    </button>
                </div>

            </div>

    );
}

export default PurchaseUsingNormalKanta;