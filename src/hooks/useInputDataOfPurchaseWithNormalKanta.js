import { useState } from "react";
import { Enums, Constant } from "../utils";

const { LABOUR_COST_PER_QUINTAL } = Constant;

const calculateNetWeight = (bundleWt, bundles, remWt) => {
    const wt = ((bundleWt - 1.5) * bundles) + (remWt > 0 ? (remWt - 1) : 0);
    return Math.floor(wt);
}

const calculateLabourCost = (netWt) => {
    const labourCost = LABOUR_COST_PER_QUINTAL * (netWt / 100);
    return Math.ceil(labourCost);
}

const calculateGoodsCost = (price, netWt) => {
    const cost = (netWt / 100) * price;
    return Math.floor(cost);
}

const calculatePayableAmount = (goodsCost, labourCost) => {
    return goodsCost - labourCost;
}


const handleAutoFill = (inputData) => {

    if (
        inputData.goods_name !== "" &&
        inputData.current_change === "goods_name"
    ) {

        if (inputData.goods_name === Enums.GOODS_NAME.WHEAT || inputData.GOODS_NAME === Enums.GOODS_NAME.RICE) {
            inputData.bundle_weight_in_kg = "60";
        }
        else {
            inputData.bundle_weight_in_kg = "40";
        }

    }

    if (inputData.bundle_weight_in_kg !== "" && inputData.number_of_bundles !== "" && inputData.remaining_weight_in_kg !== "") {
        inputData.net_goods_weight_in_kg = calculateNetWeight(
            inputData.bundle_weight_in_kg,
            inputData.number_of_bundles,
            inputData.remaining_weight_in_kg
        );

        inputData.labour_cost = calculateLabourCost(inputData.net_goods_weight_in_kg);
    }

    if (inputData.price_per_quintal !== "" && inputData.net_goods_weight_in_kg !== "") {
        inputData.goods_cost = calculateGoodsCost(
            inputData.price_per_quintal,
            inputData.net_goods_weight_in_kg
        );
    }

    if (inputData.goods_cost !== "" && inputData.labour_cost !== "") {
        inputData.payable_amount = calculatePayableAmount(
            inputData.goods_cost,
            inputData.labour_cost
        );
    }
}


function useInputDataOfPurchaseWithNormalKanta() {

    const [inputData, setInputData] = useState({
        current_change: "",
        seller_name: "",
        seller_address: "",
        goods_name: "",
        bundle_weight_in_kg: "",
        number_of_bundles: "",
        remaining_weight_in_kg: "",
        net_goods_weight_in_kg: "",
        price_per_quintal: "",
        goods_cost: "",
        labour_cost: "",
        payable_amount: ""
    });

    handleAutoFill(inputData);

    // console.log(inputData);


    return [inputData, setInputData];

}




export default useInputDataOfPurchaseWithNormalKanta;