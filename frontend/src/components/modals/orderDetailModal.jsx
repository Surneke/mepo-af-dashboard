import { useState } from 'react';
import editIcon from "../../icon/Pen.svg"
import { StatusSelect } from "../selects/orderStatusSelect";
import { Box, Button, Typography, Modal, Divider } from '@mui/material';

export const BasicModal = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Button onClick={handleOpen}>
                <img alt='icon' src={editIcon} />
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
                        <Typography variant='body2' mt="20px">Customer imformation</Typography>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Order ID</Typography>
                            <Typography variant='body2' >{props._id}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Customer</Typography>
                            <Typography variant='body2' >{props.fullname}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Number</Typography>
                            <Typography variant='body2' >{props.phoneNumber}</Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ marginTop: "15px", color: "#f2f2f9" }} />
                    <Box>
                        <Typography variant='body2' mt="20px">Order imfotmation</Typography>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Payment</Typography>
                            <Typography variant='body2' >{props.paymentID}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Size</Typography>
                            <Typography variant='body2' >{props.size}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >QTY</Typography>
                            <Typography variant='body2' >{props.amount}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Color</Typography>
                            <Typography variant='body2' >{props.color}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Purchased on </Typography>
                            <Typography variant='body2' >{props.createdAt}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Total price</Typography>
                            <Typography variant='body2' >{props.totalPrice}</Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ marginTop: "15px", color: "#f2f2f9" }} />
                    <Box>
                        <Typography variant='body2' mt="20px">Location</Typography>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Country</Typography>
                            <Typography variant='body2' ></Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >City</Typography>
                            <Typography variant='body2' >Ulaanbaatar</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Discrict</Typography>
                            <Typography variant='body2' >Chingeltei</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Zip code</Typography>
                            <Typography variant='body2' >4792200</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} > Detail address </Typography>
                            <Typography variant='body2' sx={{ maxWidth: "180px", textAlign: "end" }}> Baynzurh uuliin zamaar baruun ergeed deeshee shataar garaad ywna 11 dawhar toosgon bair. </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ marginTop: "15px", color: "#f2f2f9" }} />
                    <Box>
                        <Typography variant='body2' mt="20px">Change status</Typography>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Status</Typography>
                            <StatusSelect element={props._id} />
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Button variant='contained' onClick={handleClose}>Close</Button>
                        <Button variant='contained' color='info'>Save</Button>
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
        height: 820,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
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
