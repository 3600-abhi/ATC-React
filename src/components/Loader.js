import { Bars } from "react-loader-spinner";

function Loader() {
    return (
        <div 
        className="fixed left-1/2 top-1/2">

            <Bars
                height="80"
                width="80"
                color="#9A3B3B"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    );
}

export default Loader;