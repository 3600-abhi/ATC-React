import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SoldRecordsApi } from "../api";
import { SoldRecordCard, Loader } from "../components";


function SoldRecords() {

    const [soldRecordsList, setSoldRecordsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        SoldRecordsApi.getSoldRecords().then(data => {
            setIsLoading(false);
            setSoldRecordsList(data.data)
        });

    }, []);

    return (
        <>
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

        </>
    );
}

export default SoldRecords;