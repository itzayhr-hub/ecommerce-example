import { Product } from "@/modules/product/types/product";
import ApiServices from "@/services/Api";
import { useQuery } from "react-query";

const useProduct = (idProduct: Product["idProduct"]) => {
	const getProduct = async () => {
		return await ApiServices.get(`/products/${idProduct}`);
	};

	return useQuery(`getProduct | ${idProduct}`, getProduct, {
		retry: 0,
		refetchOnWindowFocus: false,
		select: (data) => {
			const { data: products }: { data: Product[] } = data;
			return products[0];
		},
	});
};

export default useProduct;
