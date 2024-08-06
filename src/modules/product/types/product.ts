export type Product = {
	idProduct: number;
	productName: string;
	thumbnail: string;
	price: number;
	offer?: number | null;
	description: string;
	platform: "nintendo" | "xbox" | "playstation" | "pc" | "mobile";
	maxSell: number;
	inventory: number;
};
