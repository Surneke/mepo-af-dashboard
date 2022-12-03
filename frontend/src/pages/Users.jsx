import React from "react";
import { useEffect } from "react";
import { useUsers } from "../api/useUsers";
import { Box, Typography } from "@mui/material";
import { useGlobalProvider } from "../context/GlobalContext";

const Users = () => {
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
      <Box ml="260px" mt="60px">
        jgvhvjnbhjwyhrdyhdr5ydg
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
  }
}