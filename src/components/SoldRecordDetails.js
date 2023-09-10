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


                            <div className="flex justify-between">

                                <div>
                                    <h1
                                        className="font-bold text-4xl text-c1">
                                        {record.firm_name}
                                    </h1>
                                </div>


                                <div>
                                    <h1
                                        className="text-c1 font-bold text-xl">
                                        Date : {Helper.formatDateInDDMMYYYY(record.createdAt)}
                                    </h1>
                                </div>
                            </div>



                            <div className="my-5 grid grid-cols-3 gap-x-60">
                                <div>
                                    <h1
                                        className="my-2 text-c1 font-bold text-xl">
                                        Goods Name : {record.goods_name}
                                    </h1>
                                </div>

                                <div>
                                    <h2
                                        className="my-2 text-c1 font-bold text-xl">
                                        Bundles : {record.number_of_bundles}
                                    </h2>
                                </div>

                                <div>
                                    <h2
                                        className="my-2 text-c1 font-bold text-xl">
                                        Price : {record.goods_price_per_quintal} Per Quintal
                                    </h2>
                                </div>



                                <div>
                                    <h2
                                        className="my-2 text-c1 font-bold text-xl">
                                        Truck No : {record.vehicle_registration_number}
                                    </h2>
                                </div>

                                <div>
                                    <h2
                                        className="my-2 text-c1 font-bold text-xl">
                                        Broker Name : {record.broker_name}
                                    </h2>
                                </div>

                                <div>
                                    <h2
                                        className="my-2 text-c1 font-bold text-xl">
                                        Driver Contact : {record.driver_contact_number}
                                    </h2>
                                </div>



                                <div>
                                    <h2
                                        className="my-2 text-c1 font-bold text-xl">
                                        Truck Loaded Weight : {record.vehicle_loaded_weight} Q
                                    </h2>
                                </div>

                                <div>
                                    <h2
                                        className="my-2 text-c1 font-bold text-xl">
                                        Truck Unloaded Weight : {record.vehicle_unloaded_weight} Q
                                    </h2>
                                </div>

                                <div>
                                    <h2
                                        className="my-2 text-c1 font-bold text-xl">
                                        Net Goods Weight : {record.net_goods_weight} Q
                                    </h2>
                                </div>


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