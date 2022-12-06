import React from 'react'
import { Box, Typography } from '@mui/material'


export const ProductList = (el) => {
    const style = {
        container: {
            height: "120px",
            display: "flex",
            backgroundColor: "#fff",
            justifyContent: "space-between",
        }
    }
    return (
        <Box style={style.container}>
            <Typography>1</Typography>
            <Box height="90px" width="70px" >
                <img alt='huwtsas' src={el.images[0].url} height="100%" width="100%" />
            </Box>
            <Typography>{el.title}</Typography>
            <Typography>{el.phoneNumber}</Typography>
            <Typography>{el.quantity}</Typography>
            <Typography>{el.price}</Typography>
            <Typography>{el.orderStatus}</Typography>
            <Box>
                {/* <BasicModal {...el} /> */}
            </Box>
        </Box >
    )
};