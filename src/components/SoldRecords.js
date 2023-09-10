import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SoldRecordsApi } from "../api";
import { SoldRecordCard, Loader } from "../components";


function SoldRecords() {

    const [soldRecordsList, setSoldRecordsList] = useState([]);
    const [report, setReport] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        SoldRecordsApi.getSoldRecords().then(data => {
            console.log("useEffect: ", data.data.report);
            setIsLoading(false);
            setSoldRecordsList(data.data.soldRecords);
            setReport(data.data.report);
        });

    }, []);

    return (
        <div>


            <div className="flex justify-center">
                <input
                    id=""
                    type="text"
                    className="border-2 outline-c1 h-8 py-5 px-2 rounded-md text-c1 font-semibold focus:outline-c1"
                    name=""
                />

                <button className="bg-c1 mx-3 p-2 text-white rounded-lg hover:bg-c2">
                    Search
                </button>
            </div>

            <div
                className="my-10 bg-black text-white p-10">

                <div className="flex justify-center underline underline-offset-8 font-bold text-3xl ">
                    Overall Report
                </div>

                <div className="font-bold  m-10 grid grid-cols-3 gap-x-64">

                    <div className="my-1">
                        <h1>
                            Goods Sold Count: {report.total_sold_count}
                        </h1>
                    </div>

                    <div className="my-1">
                        <h1>
                            Wheat Sold Count: {report.count_wheat_sold}
                        </h1>
                    </div>

                    <div className="my-1">
                        <h1>
                            Paddy Sold Count: {report.count_paddy_sold}
                        </h1>
                    </div>

                    <div className="my-1">
                        <h1>
                            Rice Sold Count: {report.count_rice_sold}
                        </h1>
                    </div>

                    <div className="my-1">
                        <h1>
                            Pending Transaction Count: {report.count_pending_transactions}
                        </h1>
                    </div>

                    <div className="my-1">
                        <h1>
                            Paid Transaction Count: {report.count_paid_transactions}
                        </h1>
                    </div>


                </div>

            </div>



            {
                isLoading
                    ?
                    <Loader />
                    :
                    (
                        <div>

                            {
                                soldRecordsList.map(record => (
                                    <Link to={"/home/sold-records/" + record._id} key={record._id}>
                                        <SoldRecordCard  {...record} />
                                    </Link>
                                ))
                            }

                            <Link to="/home/sold-records/create">
                                <button
                                    className="fixed bottom-0 right-0 bg-c1 text-white p-3 m-3 rounded-lg">
                                    Add
                                </button>
                            </Link>

                        </div>
                    )

            }

        </div>
    );
}

export default SoldRecords;