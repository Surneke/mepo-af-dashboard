import React from "react";
import { useEffect } from "react";
import { useUsers } from "../api/useUsers";
import { Box, Typography } from "@mui/material";
import { UsersList } from "../components/list/usersList";
import { useGlobalProvider } from "../context/GlobalContext";

const Users = () => {
  const list = ["No", "User ID", "Purchased on", "User name", "Phone number", "Gmail", "Role", "Order history"]
  const { getUsers } = useUsers();
  const {
    users: { users },
  } = useGlobalProvider();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  // console.log(users, 'usersaaaaaaaa');
  return (
    <Box style={style.container}>
      <Box style={style.box}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Order listing</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          {list.map((el, index) => <Box style={style.head} key={index}><Typography  >{el}</Typography></Box>)}
        </Box>
        <Box>
          {users?.map((el, index) => (<UsersList key={index} {...el} />))}
        </Box>
      </Box>
    </Box>
  );
};

export default Users;

const style = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f2f2f9"
  },
  box: {
    marginLeft: "260px",
    marginTop: "70px"
  },
  head: {
    maxWidth: "200px",
    fontWeight: 600,
  }
}