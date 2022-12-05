import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [navbarName, setNavbarName] = useState("");
  const value = {
    users: {
      users,
      setUsers,
    },
    orders: {
      orders,
      setOrders,
    },
    products: {
      products,
      setProducts,
    },
    navName: { navbarName, setNavbarName },
  };
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export const useGlobalProvider = () => useContext(GlobalContext);
