import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useProducts } from "../api/useProducts";
import { useGlobalProvider } from '../context/GlobalContext';
import { ProductModal } from "../components/modals/productAddModal";
import { ProductDetailModal } from '../components/modals/productDetailmodal';

const Products = () => {
  const { getProducts } = useProducts();
  const { products: { products } } = useGlobalProvider();
  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, [])

  const datas = products.map((el, index) => {
    console.log(el);
    return { ...el, id: el._id, index: index + 1, image: el.images[0].url };
  });

  return (
    <Box style={style.container}>
      <Box style={style.box}>
        <Box style={style.head}>
          <ProductModal />
        </Box>
        <Box sx={{ height: 600 }}>
          <DataGrid rows={datas} columns={columns} pageSize={5} rowsPerPageOptions={[9]} disableSelectionOnClick experimentalFeatures={{ newEditingApi: true }} rowHeight={110} />
        </Box>
      </Box>
    </Box>
  )
}

export default Products;
const columns = [
  {
    field: "index",
    headerName: "No",
    width: 50,
  },
  {
    field: "image",
    headerName: "Image 1",
    width: 100,
    type: "image",
    renderCell: (params) => <img src={params.value} alt="zurag" height="75px" width="60px" />
  },
  {
    field: "image",
    headerName: "Image 2",
    width: 100,
    type: "image",
    renderCell: (params) => <img src={params.value} alt="zurag" height="75px" width="60px" />
  },
  {
    field: "image",
    headerName: "Image 3",
    width: 100,
    type: "image",
    renderCell: (params) => <img src={params.value} alt="zurag" height="75px" width="60px" />
  },
  {
    field: "image",
    headerName: "Image 4",
    width: 100,
    type: "image",
    renderCell: (params) => <img src={params.value} alt="zurag" height="75px" width="60px" />
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "size",
    headerName: "Size",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  }, {
    field: "quantity",
    headerName: "QTY",
    width: 100,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => <ProductDetailModal el={params} />,
  },
];

const style = {
  container: {
    height: "100vh",
    width: "100vw",
    paddingTop: "40px",
    paddingRight: "40px",
    backgroundColor: "#f2f2f9"
  },
  box: {
    marginLeft: "270px",
    backgroundColor: "#fff"
  },
  head: {
    height: "60px",
    display: "flex",
    paddingTop: "10px",
    alignItem: "center",
    paddingRight: "40px",
    justifyContent: "flex-end",
  }
}