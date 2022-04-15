import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Container, Box, Typography } from "@mui/material";


function TempChart({temperatureData}) {

    const width = 300, height = 300

    if(temperatureData === undefined){
        return <Box width={width} height={height}></Box>
    }

    const maxValue = Math.max(...temperatureData.map(reading => reading.temp));
    const tickArray = [];
    for(var i = 0; i <= 1; i+=0.2){
        tickArray.push(Math.ceil(maxValue*i));
    }
    console.log(`Max: ${maxValue} ${tickArray}`);
    return (
        <Container >
            <Typography variant="caption" color="initial">Temperature</Typography>
            <AreaChart width={width} height={height} data={temperatureData}>
                <Area type="monotone" dataKey="temp" stroke="#8884d8" />
                <XAxis dataKey="time"/>
                <YAxis dataKey="temp" ticks={tickArray}/>
                <Tooltip />
            </AreaChart>
        </Container>
    );
}

export default TempChart;