import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import type { Product } from "../../types/product";

const initialState = {
	isInWishlist: false,
};
const ProductSlice = createSlice({
	name: "ProductStatus",
	initialState,
	reducers: {
		addToWishlist: (state, { payload }: PayloadAction<boolean>) => {
			state.isInWishlist = payload;
		},
	},
});

export const { addToWishlist } = ProductSlice.actions;

export default ProductSlice.reducer;
