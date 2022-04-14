import React from 'react';
import useAPIQuery from '../Util/Hooks/useDeviceQuery';
import DeviceButton from './DeviceButton';
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'

function DeviceList({setActiveId}){

    const deviceList = useAPIQuery("/devices");
    const deviceListButtons = deviceList.map(device => <DeviceButton key={device.id} name={device.name} id={device.id} setActiveId={setActiveId}></DeviceButton>);
    
    return (
        <Drawer open variant="persistent">
            <Typography variant="h3" align="center">Devices</Typography>
            {deviceListButtons}
        </Drawer> 
    )
}

export default DeviceList;