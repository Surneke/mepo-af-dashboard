import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const value = {
        user: {
            users,
            setUsers
        },
        orders: {
            orders,
            setOrders
        },
        products: {
            products,
            setProducts
        }
    };
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
};

export const useGlobalProvider = () => useContext(GlobalContext);