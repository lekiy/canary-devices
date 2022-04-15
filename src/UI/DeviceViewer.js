import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import useDeviceQuery from "../Util/Hooks/useDeviceQuery";
import DataChart from "./DataChart";

function DeviceViewer({id}){

    const deviceReadings = useDeviceQuery(`/devices/${id}/readings`);
    const deviceData = useDeviceQuery(`/devices/${id}`);   
    
    const temperatureData = deviceReadings.filter(reading => reading.type === "temperature").map(reading => {
        return {
            name: reading.created,
            dataPoint: reading.value
        };
    });

    const humidityData = deviceReadings.filter(reading => reading.type === "humidity").map(reading => {
        return {
            name: reading.created,
            dataPoint: reading.value
        };
    });

    const airQualityData = deviceReadings.filter(reading => reading.type === "air_quality").map(reading => {
        return {
            name: reading.created,
            dataPoint: reading.value
        };
    });

    if(id === undefined) return;

    return (
    <Box m={"20px"} ml={"270px"} p={"10px"} backgroundColor="white">
        <Typography variant="h2">{deviceData.name}</Typography>
        <Grid container>
            <Grid item xs={12} lg={4}>
                <DataChart chartId={0} name="Temperature" data={temperatureData} colorTop="#ff1e00" colorBase="#4290f5"/>
            </Grid>
            <Grid item xs={12} lg={4}>
                <DataChart chartId={1} name="Humidity" data={humidityData} colorTop="#00f7ff" colorBase="#ffffff"/>
            </Grid>
            <Grid item xs={12} lg={4}>
                <DataChart chartId={2} name="Air Quality" data={airQualityData} colorTop="#ffffff" colorBase="#a6a6a6"/>
            </Grid>
        </Grid>
        
        {/* {deviceReadings.map(temps => `temps: ${temps} `)} */}
    </Box>);
}


export default DeviceViewer;