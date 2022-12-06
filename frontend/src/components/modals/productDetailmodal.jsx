import { useState } from "react";
import infoIcon from "../../icon/InfoCircle.svg"
import { Box, Button, Typography, Modal } from "@mui/material";


export const ProductDetailModal = (props) => {
    //   useEffect(())
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen} variant="contained">
                <img src={infoIcon} alt="icon"/>
            </Button>
            <Modal open={open}>
                <Box sx={style.container}>
                    <Typography variant="h6">ORDER HISTORY</Typography>
                    <Typography sx={{ opacity: 0.7 }}>The first image you add becomes the main image for this product.</Typography>
                    <Box>
                        dksmkse
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Button variant="contained" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="contained" >
                            Next
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};
const style = {
    container: {
        p: 4,
        top: "50%",
        left: "50%",
        width: 500,
        height: 500,
        position: "absolute",
        bgcolor: "background.paper",
        transform: "translate(-50%, -50%)",
    },
    list: {
        width: "440px",
        display: "flex",
        marginTop: "10px",
        justifyContent: "space-between",
    },
    text1: {
        fontSize: "12px",
        color: "#81838F",
    },
};
