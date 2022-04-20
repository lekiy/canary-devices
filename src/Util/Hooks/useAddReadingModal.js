import { useState, useCallback } from "react";
import {Modal, Box, Stack, Button, Typography, TextField} from "@mui/material"

function useAddReadingModal() {

    const [modalOpen, setModalOpen] = useState(false);
    const [reading, setReading] = useState('');

    const modalTitle = "Add New Reading";

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
        setReading(event.target.value);
    }, [setReading]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        handleClose();
        console.log("close");
    }, [handleClose]);

    const modal = (type) => (
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
                                <TextField required label={`Current ${type} value`} id="reading" onChange={handleChange}/>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                                <Button variant="contained" type="submit">Add Reading</Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
        </Modal>
    )

    return {openModal, modal};

}

export default useAddReadingModal;