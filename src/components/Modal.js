function Modal({modalMessage, setShowModal}) {
    return (
        <div
            className="bg-nc1 fixed top-1/3 left-1/3 p-10 rounded-lg shadow-lg z-50">

            <h1
                className="text-c1 font-bold text-2xl m-10">
                {modalMessage}
            </h1>

            <button
                className="bg-c1 text-white p-3 rounded-lg absolute right-0 bottom-0 m-2 hover:bg-c2"
                onClick={() => setShowModal(false)}>
                OK
            </button>

        </div>
    );
}

export default Modal;