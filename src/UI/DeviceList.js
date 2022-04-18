import React, {useState, useCallback} from 'react';
import useAPIQuery from '../Util/Hooks/useAPIQuery';
import DeviceButton from './DeviceButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Divider, Toolbar, IconButton, Box, AppBar, Typography} from '@mui/material';

function DeviceList({setActiveId}){

    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerWidth = "240px";

    const handleToggleDrawer = useCallback(() => {
        setDrawerOpen(!drawerOpen);
    }, [setDrawerOpen, drawerOpen])

    const deviceList = useAPIQuery("/devices");
    const deviceListButtons = deviceList.map(device => <DeviceButton key={device.id} name={device.name} id={device.id} setActiveId={setActiveId}></DeviceButton>);

    const drawerContent = (<>
        <Typography variant="h3" align="center">Devices</Typography>
        <Divider />
        {deviceListButtons}
    </>);
    
    return (
        <Box sx={{ display: 'flex' }}>
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
            <Typography variant="h6" noWrap component="div">
                Responsive drawer
            </Typography>
            </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
            </Box>
            <Toolbar />
            <Drawer open={drawerOpen} onClose={handleToggleDrawer} variant="temporary" sx={{display: { xs: 'block', sm: 'none' }}} PaperProps={{sx: {width: drawerWidth}}}>
                {drawerContent}
            </Drawer> 
            <Drawer open variant="permanent" sx={{display: { xs: 'none', sm: 'block' }}} PaperProps={{sx: {width: drawerWidth}}}>
                {drawerContent}
            </Drawer>
        </Box>
    )
}

export default DeviceList;