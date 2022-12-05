import React from 'react'
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useProducts } from "../api/useProducts";
import { ProductModal } from "../components/modals/productAddModal";
import { ProductList } from '../components/list/productList';
import { useGlobalProvider } from '../context/GlobalContext';

const Products = () => {
  const { getProducts } = useProducts();
  const { products: { products } } = useGlobalProvider();
  const list = ["No", "Image", "Name", "Size", "Color", "Price", "Remained", "Order history", "Action"]


  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, [])

  // console.log(products);
  return (
    <Box style={style.container}>
      <Box style={style.box}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Product listing</Typography>
          <ProductModal />
        </Box>
        <Box display="flex" justifyContent="space-between">
          {list.map((el, index) => <Box style={style.head} key={index}><Typography  >{el}</Typography></Box>)}
        </Box>
        <Box>
          {products?.map((el, index) => (<ProductList key={index} {...el} />))}
        </Box>
      </Box>
    </Box>
  )
}

export default Products;


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