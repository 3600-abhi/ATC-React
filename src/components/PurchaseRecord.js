import { useState, useEffect } from "react";
import { ChooseKanta, Loader } from "../components";
import { PurchaseRecordsApi } from "../api";
import { Helper } from "../utils";

function PurchaseRecord() {

    const [showLoader, setShowLoader] = useState(true);
    const [showChooseKanta, setShowChooseKanta] = useState(false);
    const [purchaseDetails, setPurchaseDetails] = useState({});
    const [date, setDate] = useState(Helper.formatDateInYYYYMMDD(new Date()));


    useEffect(() => {
        PurchaseRecordsApi
            .getPurchaseRecordsDetails(date)
            .then(data => {
                setPurchaseDetails(data.data);
                setShowLoader(false)
            });
    }, [date]);

    return (
        <div>

            <div className="flex justify-center m-5">
                <label htmlFor="choose-date" className="p-5 text-c1 font-bold text-2xl"> Select Date:</label>

                <input
                    required
                    type="date"
                    id="choose-date"
                    className="p-5 bg-c3 text-c1 font-bold rounded-lg"
                    value={date}
                    onChange={e => setDate(Helper.formatDateInYYYYMMDD(e.target.value))}
                />
            </div>

            {showChooseKanta && <ChooseKanta setShowChooseKanta={setShowChooseKanta} />}



            {
                !purchaseDetails?.purchaseRecords?.length && !showLoader
                &&
                (
                    <div className="m-10 text-3xl text-c1 font-bold">
                        <h1>No Goods Purchased !!</h1>
                    </div>
                )
            }

            {showLoader && <Loader />}

            {
                purchaseDetails?.purchaseRecords?.length
                &&

                (
                    <div className="bg-black text-white font-bold p-5">
                        <div
                            className="flex justify-center p-5 text-3xl underline underline-offset-8">
                            Goods Purchase Details
                        </div>

                        <div className="flex justify-between m-5">

                            <h1>
                                WHEAT: {purchaseDetails?.rokadDetails.net_wheat_weight_in_quintal} Quintal
                            </h1>

                            <h1>
                                PADDY (MOTA): {purchaseDetails?.rokadDetails.net_paddy_mota_weight_in_quintal} Quintal
                            </h1>

                            <h1>
                                PADDY (SHAYAMA): {purchaseDetails?.rokadDetails.net_paddy_shayama_weight_in_quintal} Quintal
                            </h1>

                            <h1>
                                RICE: {purchaseDetails?.rokadDetails.net_rice_weight_in_quintal} Quintal
                            </h1>

                            <h1>
                                Net Goods Weight: {purchaseDetails?.rokadDetails.net_goods_weight_of_all_type_in_quintal} Quintal
                            </h1>

                        </div>

                        <div className="flex justify-between m-5">
                            <h1>Goods Cost: {purchaseDetails?.rokadDetails.goods_cost} ₹</h1>
                            <h1>Labour Cost: {purchaseDetails?.rokadDetails.labour_cost} ₹</h1>
                            <h1>Paid Amount: {purchaseDetails?.rokadDetails.payable_amount} ₹</h1>
                        </div>

                    </div>
                )
            }



            <div className="m-10">
                {
                    purchaseDetails?.purchaseRecords?.map(data => (

                        <div className="bg-c3 m-5 p-5 rounded-lg text-c1 font-bold" key={data._id}>

                            <div className="flex justify-between m-2">
                                <h1>Seller Name: {data.seller_name}</h1>
                                <h1>Seller Address: {data.seller_address}</h1>
                                <h1>Goods Name: {data.goods_name}</h1>
                            </div>

                            <div className="flex justify-between m-2">
                                <h1>Bundles: {data.number_of_bundles}</h1>
                                <h1>Remaining Weight: {data.remaining_weight_in_kg}</h1>
                                <h1>Net Goods Weight: {data.net_goods_weight_in_kg}</h1>
                            </div>

                            <div className="flex justify-between m-2">
                                <h1>Goods Cost: {data.goods_cost}</h1>
                                <h1>Labour Cost: {data.labour_cost}</h1>
                                <h1>Payable Amount: {data.payable_amount}</h1>
                            </div>

                        </div>

                    ))
                }
            </div>


            <div>
                <button
                    className="bg-c1 text-white p-4 rounded-lg fixed right-0 bottom-0 m-4"
                    onClick={() => setShowChooseKanta(true)}
                >
                    Add
                </button>
            </div>

        </div>
    );
}

export default PurchaseRecord;