import { Helper, Enums } from "../utils";

function SoldRecordCard(props) {
    return (
        <div className="bg-gray-300 m-5 p-5 rounded-lg">

            <div className="flex justify-between">
                <h1 className="m-2 text-3xl font-bold">{props.firm_name}</h1>
                <h2 className="m-2 font-bold">Date: {Helper.formatDate(props.createdAt)}</h2>
            </div>

            <h2 className="m-2">Product: {props.goods_name}</h2>

            <h2 className="m-2">Net-Weight: {props.net_goods_weight} Quintal</h2>

            <h2 className="m-2">Bundles: {props.number_of_bundles}</h2>

            <div className="flex justify-between m-2">
                <h2 >Price: {props.goods_price_per_quintal} Per Quintal</h2>

                <h2
                    className={`font-bold ${props.payment_status === Enums.PAYMENT_STATUS.PAID ? "text-red-600" : "text-green-600"}`}>
                    Payment Status: {props.payment_status}
                </h2>
            </div>
        </div>
    );
}

export default SoldRecordCard;