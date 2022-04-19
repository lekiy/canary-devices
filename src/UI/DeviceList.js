import React, {useState, useCallback} from 'react';
import useAPIQuery from '../Util/Hooks/useAPIQuery';
import DeviceButton from './DeviceButton';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Divider, Toolbar, IconButton, AppBar, Typography, Button} from '@mui/material';
import useAddDeviceModal from '../Util/Hooks/useAddDeviceModal';

function DeviceList({setActiveId}){

    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerWidth = "240px";

    const {openModal, modal} = useAddDeviceModal();

    const handleToggleDrawer = useCallback(() => {
        setDrawerOpen(!drawerOpen);
    }, [setDrawerOpen, drawerOpen])

    const deviceList = useAPIQuery("/devices");
    const deviceListButtons = deviceList.map(device => <DeviceButton key={device.id} name={device.name} id={device.id} setActiveId={setActiveId}></DeviceButton>);

    const drawerContent = (<>
        <Toolbar sx={{backgroundColor: "primary.main"}}>
            <Typography variant="h3" align="center" m={"auto"}>Devices</Typography>
        </Toolbar>
        <Divider />
        <Button onClick={openModal} color="secondary"
        align="center"><AddIcon /></Button> 
        {modal}
        <Divider />
        {deviceListButtons}
    </>);
    
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleToggleDrawer}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Drawer open={drawerOpen} onClose={handleToggleDrawer} variant="temporary" sx={{display: { xs: 'block', sm: 'none' }, backgroundColor: "primary.secondary"}} PaperProps={{sx: {width: drawerWidth}}}>
                {drawerContent}
            </Drawer> 
            <Drawer open variant="permanent" sx={{display: { xs: 'none', sm: 'block' }, backgroundColor: "primary.secondary"}} PaperProps={{sx: {width: drawerWidth}, backgroundColor: "primary.secondary"}}>
                {drawerContent}
            </Drawer>
        </>
    )
}

export default DeviceList;