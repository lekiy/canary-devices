import { Box, Typography } from "@mui/material";
import React from "react";
import useDeviceQuery from "../Util/Hooks/useDeviceQuery";

function DeviceViewer({id}){

    const deviceReadings = useDeviceQuery(`/devices/${id}/readings`);
    const deviceData = useDeviceQuery(`/devices/${id}`);
    
    if(id === undefined) return;

    return (
    <Box m={"20px"} ml={"270px"} p={"10px"} backgroundColor="white">
        <Typography variant="h2">{deviceData.name}</Typography>
        {deviceReadings.map(reading => `value: ${reading.value} `)}
    </Box>);
}


export default DeviceViewer;