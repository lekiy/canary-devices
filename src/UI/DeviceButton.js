import React, {useCallback} from "react";
import Button from "@mui/material/Button"

function DeviceButton({name, id, setActiveId}){

    const handleClick = useCallback(() => {
        setActiveId(id);
    }, [setActiveId, id])

    return (
        <Button className="deviceButton" onClick={handleClick}>
            <h3>
                {name}
            </h3>
        </Button>
    )
}

export default DeviceButton;