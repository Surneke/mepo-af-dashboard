import { useState } from 'react';
import { ProductInputModal } from "../modals/productsAddInputModal";
import { Box, Button, Typography, Modal, Divider } from '@mui/material';

export const ProductModal = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="contained">
                Add product
            </Button>
            <Modal
                open={open}
            >
                <Box sx={style.container}>
                    <Typography variant="h6" >
                        ORDER DETAIL
                    </Typography>
                    <Typography sx={{ opacity: 0.7 }} >
                        The first image you add becomes the main image for this product.
                    </Typography>
                    <Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Button variant='contained' onClick={handleClose}>Close</Button>
                        <Button onClick={handleClose} >
                            <ProductInputModal />
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
const style = {
    container: {
        p: 4,
        top: '50%',
        left: '50%',
        width: 500,
        height: 500,
        position: 'absolute',
        bgcolor: 'background.paper',
        transform: 'translate(-50%, -50%)',
    },
    list: {
        width: "440px",
        display: 'flex',
        marginTop: "10px",
        justifyContent: "space-between"
    },
    text1: {
        fontSize: '12px',
        color: "#81838F"
    }
};
