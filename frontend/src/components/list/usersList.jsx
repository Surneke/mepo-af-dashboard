import { Box, Typography } from '@mui/material'
import React from 'react'

export const UsersList = (el) => {
    const style = {
        container: {
            height: "50px",
            display: "flex",
            // maxWidth: "1500px",
            // minWidth: "1200px",
            justifyContent: "space-between",
            backgroundColor: "#fff"
        }
    }
    return (
        <Box style={style.container}>
            <Typography>1</Typography>
            <Typography>{el._id}</Typography>
            <Typography>{el.name}</Typography>
            <Typography>{el.phoneNumber}</Typography>
            <Typography>{el.email}</Typography>
            <Typography>{el.role}</Typography>
            <Typography>{el.orderStatus}</Typography>
            <Box>
                {/* <BasicModal {...el} /> */}
            </Box>
        </Box>
    )
}

