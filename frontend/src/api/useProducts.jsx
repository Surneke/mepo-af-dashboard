import { getApi, postApi, patchApi } from "../utils/fetchData";
import { useGlobalProvider } from "../context/GlobalContext";

export const useProducts = () => {
    const {
        products: { setProducts }
    } = useGlobalProvider();

    const getProducts = async () => {
        try {
            const res = await getApi("/product");
            setProducts(res.data.products);
        } catch (error) {
            console.log(error)
        }
    };

    const postProducts = async (data) => {
        try {
            await postApi("/product", data)
        } catch (error) {
            console.log(error)
        }
    };

    const editProducts = async (data, id) => {
        try {
            await patchApi(`/product/${id}`, data)
        } catch (error) {
            console.log(error)
        }
    }

    return { getProducts, postProducts, editProducts };
}