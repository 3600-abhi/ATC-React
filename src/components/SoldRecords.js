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
        <div>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    (
                        soldRecordsList.map(record => (
                            <Link to={"/home/sold-records/" + record._id} key={record._id}>
                                <SoldRecordCard  {...record} />
                            </Link>

                        ))
                    )

            }

        </div>
    );
}

export default SoldRecords;