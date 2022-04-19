import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import {Box, Typography, Container, Stack, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import useAddReadingModal from '../Util/Hooks/useAddReadingModal';


function DataChart({chartId, name, data, colorTop, colorBase}) {

    const {openModal, modal} = useAddReadingModal();

    if(data === undefined){
        return <Box></Box>
    }

    const maxValue = Math.max(...data.map(reading => reading.dataPoint));
    const tickArray = [];
    for(var i = 0; i <= 1; i+=0.2){
        tickArray.push(Math.ceil(maxValue*i));
    }
    
    return (
        <Container width="100%" height="100%">
            <Stack direction="row" spacing={2} align="center">
                <Typography variant="h5" flexGrow={1}>{name}</Typography>
                <IconButton onClick={openModal} color="secondary">
                    <AddIcon />
                    {modal(name)}
                </IconButton>
            </Stack>
            <ResponsiveContainer minHeight={"200px"}>
                <AreaChart data={data} width="100%" height="100%" >
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