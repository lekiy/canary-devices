import React, {useCallback} from "react";
import Button from "@mui/material/Button"

function DeviceButton({name, id, setActiveId}){

    const handleClick = useCallback(() => {
        setActiveId(id);
    }, [setActiveId, id])

    // Cleans the name of the device of onwanted charaters
    const nameCleaned = name.replaceAll(/[-_+]/g, " ");

    return (
        <Button data-testid={"deviceButton"} onClick={handleClick} color="primary">
            <h3>
                {nameCleaned}
            </h3>
        </Button>
    )
}

export default DeviceButton;