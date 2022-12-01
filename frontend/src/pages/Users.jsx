import React from "react";
import { useEffect } from "react";
import { useUsers } from "../api/useUsers";
import { useGlobalProvider } from "../context/GlobalContext";

const Users = () => {
  const { getUsers } = useUsers();
  const {
    users: { users },
  } = useGlobalProvider();
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  },[]);
  console.log(users);
  return <div>Users</div>;
};

export default Users;
