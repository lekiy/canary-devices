import React, {useCallback} from "react";
import {Button, Typography} from "@mui/material/"

function DeviceButton({name, id, setActiveId}){

    const handleClick = useCallback(() => {
        setActiveId(id);
    }, [setActiveId, id])

    // Cleans the name of the device of onwanted charaters
    const nameCleaned = name.replaceAll(/[-_+]/g, " ");

    return (
        <Button data-testid={"deviceButton"} onClick={handleClick} color="primary">
            <Typography p="5px">{nameCleaned}</Typography>
        </Button>
    )
}

export default DeviceButton;