import type { Products } from "@/modules/catalogue/types/catalogue";

export type Cart = {
	products?: Products;
	subtotal: number;
};
