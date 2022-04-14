import React, {useCallback} from "react";
import Button from "@mui/material/Button"

function DeviceButton({name, id, setActiveId}){

    const handleClick = useCallback(() => {
        setActiveId(id);
    }, [setActiveId, id])

    return (
        <Button variant="text" onClick={handleClick}>
            <h3>
                {name}
            </h3>
        </Button>
    )
}

export default DeviceButton;