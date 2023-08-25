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
                            className="bg-gray-300 m-5 p-5 rounded-lg">

                            <div className="p-2 m-1 flex justify-between">
                                <h1 className="font-bold  text-4xl ">{record.firm_name}</h1>
                                <h1 className="font-bold">Date : {Helper.formatDate(record.createdAt)}</h1>
                            </div>



                            <div className="m-4 text-2xl flex justify-between">
                                <h2 className="m-1">Goods Name : {record.goods_name}</h2>

                                <h2 className="m-1">Bundles : {record.number_of_bundles}</h2>

                                <h2 className="m-1">Price : {record.goods_price_per_quintal} Per Quintal</h2>
                            </div>


                            <div className="m-4 text-2xl flex justify-between">
                                <h2 className="m-1">Truck No : {record.vehicle_registration_number}</h2>

                                <h2 className="m-1">Broker Name : {record.broker_name}</h2>

                                <h2 className="m-1">Driver Contact : {record.driver_contact_number}</h2>
                            </div>

                            <div className="m-4 text-2xl flex justify-between">
                                <h2>Truck Loaded Weight : {record.vehicle_loaded_weight}</h2>

                                <h2>Truck Unloaded Weight : {record.vehicle_unloaded_weight}</h2>

                                <h2>Net Goods Weight : {record.net_goods_weight}</h2>
                            </div>

                            <div
                                className={`m-5 font-bold p-2 flex justify-center text-3xl ${record.payment_status === Enums.PAYMENT_STATUS.PENDING ? "text-red-500" : "text-green-600"}`}>
                                <h2>Payment Status : {record.payment_status}</h2>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default SoldRecordDetails;