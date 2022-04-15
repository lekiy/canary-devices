import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, linearGradient } from 'recharts';
import {Box, Grid, Typography, Container } from "@mui/material";


function DataChart({chartId, name, data, colorTop, colorBase}) {

    if(data === undefined){
        return <Box></Box>
    }

    const maxValue = Math.max(...data.map(reading => reading.dataPoint));
    const tickArray = [];
    for(var i = 0; i <= 1; i+=0.2){
        tickArray.push(Math.ceil(maxValue*i));
    }
    
    // console.log(`Max: ${maxValue} ${tickArray}`);
    return (
        <Container>
        <Typography variant="h5">{name}</Typography>
        <ResponsiveContainer width="100%" minHeight="200px" height="100%">
            <AreaChart data={data}>
                <Area type="monotone" dataKey="dataPoint" stroke="#8884d8" strokeOpacity={0} fillOpacity={1} fill={"url(#color"+chartId+")"}/>
                <defs>
                <linearGradient id={"color"+chartId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colorTop} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colorBase} stopOpacity={0.5}/>
                </linearGradient>
                </defs>
                <XAxis dataKey="time"/>
                <YAxis dataKey="dataPoint" ticks={tickArray}/>
                <Tooltip />
            </AreaChart>
        </ResponsiveContainer>
        </Container>
    );
}

export default DataChart;