import { lazy } from "react";

const Button = lazy(() => import("@/components/Button"));

import { Product } from "@/modules/product/types/product";

const addToCart = (inventory: Product["inventory"]) => {
	if (inventory && inventory > 0) {
		//TODO Revisar maxSell con cantidad en carrito
		//TODO Agregar a carrito
	} else {
		alert("Se acabó el inventario");
	}
};

const ButtonProduct = ({ inventory }: { inventory: Product["inventory"] }) => {
	return (
		<Button typeButton='secondary' onClick={() => addToCart(inventory)}>
			{inventory && inventory > 0 ? "COMPRAR" : "NO DISPONIBLE"}
		</Button>
	);
};

export default ButtonProduct;
