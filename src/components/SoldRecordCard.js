import { Helper, Enums } from "../utils";

function SoldRecordCard(props) {
    return (
        <div className="bg-c3 m-5 p-5 rounded-lg">

            <div className="flex justify-between">
                <h1 className="m-2 text-3xl font-bold text-c1">{props.firm_name}</h1>
                <h2 className="m-2 font-bold text-c1">Date: {Helper.formatDateInDDMMYYYY(props.createdAt)}</h2>
            </div>

            <h2 className="m-2 font-semibold text-c1">Product: {props.goods_name}</h2>

            <h2 className="m-2 font-semibold text-c1">Net-Weight: {props.net_goods_weight} Quintal</h2>

            <h2 className="m-2 font-semibold text-c1">Bundles: {props.number_of_bundles}</h2>

            <div className="flex justify-between m-2">
                <h2 className="font-semibold text-c1">Price: {props.goods_price_per_quintal} Per Quintal</h2>

                <h2
                    className={`font-bold ${props.payment_status === Enums.PAYMENT_STATUS.PENDING ? "text-red" : "text-green"}`}>
                    Payment Status: {props.payment_status}
                </h2>
            </div>
        </div>
    );
}

export default SoldRecordCard;