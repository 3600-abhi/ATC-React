import { Bars } from "react-loader-spinner";

function Loader() {
    return (
        <div 
        className="fixed left-1/2 top-1/2">

            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    );
}

export default Loader;