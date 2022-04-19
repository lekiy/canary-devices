import { useState, useCallback } from "react";
import {Modal, Box, Stack, Button, Typography, TextField} from "@mui/material"
import {useAPIPost} from "./useAPIQuery"

function useAddDeviceModal() {

    const [modalOpen, setModalOpen] = useState(false);
    const [deviceName, setDeviceName] = useState('');

    const post = useAPIPost("/devices/", {name: deviceName});
    const modalTitle = "Add New Device";

    const styles = {position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor:"white",
        padding: "20px"}

    const handleClose = useCallback(() => {
        setModalOpen(false);
    }, [setModalOpen])

    const openModal = useCallback(() => {
        setModalOpen(true);
    }, [setModalOpen]);

    const handleChange = useCallback((event) => {
        setDeviceName(event.target.value);
    }, [setDeviceName]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        console.log(post);
        handleClose();
    }, [handleClose, post]);

    const modal = (
        <Modal
            open={modalOpen}
            onClose={handleClose}
        >
                <Box style={styles}  >
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                                <Typography variant="h6" align="center">
                                    {modalTitle}
                                </Typography>
                                <TextField required label="Device Name" id="deviceName" onChange={handleChange}/>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                                <Button variant="contained" type="submit">Add Device</Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
        </Modal>
    )

    return {openModal, modal};

}

export default useAddDeviceModal;