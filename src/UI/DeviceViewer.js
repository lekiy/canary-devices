import { Container, Typography } from "@mui/material";
import React from "react";
import useDeviceQuery from "../Util/Hooks/useDeviceQuery";

function DeviceViewer({name, id}){

    const deviceReadings = useDeviceQuery(`/devices/${id}/readings`);
    
    if(id === undefined) return;

    return (
    <Container>
        <Typography variant="h2">{name}</Typography>
        {deviceReadings.map(reading => `value: ${reading.value} `)}
    </Container>);
}


export default DeviceViewer;