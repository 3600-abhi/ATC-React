import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { SoldRecordsApi } from "../api";
import { Helper, Enums } from "../utils";


function SoldRecordDetails() {

    const [record, setRecord] = useState(null);
    const { recordId } = useParams();

    useEffect(() => {
        SoldRecordsApi.getSoldRecordDetails(recordId).then(data => setRecord(data.data));
    }, []);

    return (
        <>
            {
                !record
                    ?
                    <Loader />
                    :
                    (
                        <div
                            className="bg-c3 m-5 p-5 rounded-lg">

                            <div className="p-2 m-1 flex justify-between">
                                <h1 className="font-bold text-4xl text-c1">{record.firm_name}</h1>
                                <h1 className="text-c1 font-bold">Date : {Helper.formatDate(record.createdAt)}</h1>
                            </div>



                            <div className="m-4 text-2xl flex justify-between">
                                <h2 className="m-1 text-c1 font-semibold">Goods Name : {record.goods_name}</h2>

                                <h2 className="m-1 text-c1 font-semibold">Bundles : {record.number_of_bundles}</h2>

                                <h2 className="m-1 text-c1 font-semibold">Price : {record.goods_price_per_quintal} Per Quintal</h2>
                            </div>


                            <div className="m-4 text-2xl flex justify-between">
                                <h2 className="m-1 text-c1 font-semibold">Truck No : {record.vehicle_registration_number}</h2>

                                <h2 className="m-1 text-c1 font-semibold">Broker Name : {record.broker_name}</h2>

                                <h2 className="m-1 text-c1 font-semibold">Driver Contact : {record.driver_contact_number}</h2>
                            </div>

                            <div className="m-4 text-2xl flex justify-between">
                                <h2 className="m-1 text-c1 font-semibold">Truck Loaded Weight : {record.vehicle_loaded_weight} Q</h2>

                                <h2 className="m-1 text-c1 font-semibold">Truck Unloaded Weight : {record.vehicle_unloaded_weight} Q</h2>

                                <h2 className="m-1 text-c1 font-semibold">Net Goods Weight : {record.net_goods_weight} Q</h2>
                            </div>

                            <div
                                className={`m-5 font-bold p-2 flex justify-center text-3xl ${record.payment_status === Enums.PAYMENT_STATUS.PENDING ? "text-red" : "text-green"}`}>
                                <h2>Payment Status : {record.payment_status}</h2>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default SoldRecordDetails;