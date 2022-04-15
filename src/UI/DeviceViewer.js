import { Box, Typography } from "@mui/material";
import React from "react";
import useDeviceQuery from "../Util/Hooks/useDeviceQuery";
import TempChart from "./TempChart";

function DeviceViewer({id}){

    const deviceReadings = useDeviceQuery(`/devices/${id}/readings`);
    const deviceData = useDeviceQuery(`/devices/${id}`);   
    
    const temperatureData = deviceReadings.filter(reading => reading.type === "temperature").map(reading => {
        return {
            name: reading.created,
            temp: reading.value
        };
    });

    if(id === undefined) return;

    return (
    <Box m={"20px"} ml={"270px"} p={"10px"} backgroundColor="white">
        <Typography variant="h2">{deviceData.name}</Typography>
        <TempChart temperatureData={temperatureData} />
        {/* {deviceReadings.map(temps => `temps: ${temps} `)} */}
    </Box>);
}


export default DeviceViewer;