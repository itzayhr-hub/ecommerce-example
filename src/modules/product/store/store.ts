import { configureStore } from "@reduxjs/toolkit";
import productStatus from "./slices/ProductSlice";

const store = configureStore({
	reducer: { productStatus: productStatus },
});

export type StoreState = ReturnType<typeof store.getState>;
export default store;
