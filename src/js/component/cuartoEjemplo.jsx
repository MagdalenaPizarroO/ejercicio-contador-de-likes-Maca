import React, {useState} from "react";

const CuartoEjemplo = () => {
    const [opened, setOpened] = useState(true);

    return opened ? (
        <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
            
            <h3>Hello BreatheCode</h3>
            <button type="button" onClick={() => setOpened(false)}>
                Close
            </button>
        </div>
    ) : (
        <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
            <button type="button" onClick={() => setOpened(true)}>
                Open
            </button>
        </div>
    )


}

export default CuartoEjemplo