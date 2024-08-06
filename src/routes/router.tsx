import { lazy } from "react";

import { createBrowserRouter, RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("@/modules/home/pages/HomePage"));
const ProductPage = lazy(() => import("@/modules/product/pages/ProductPage"));

import { Provider } from "react-redux";
import store from "@/modules/product/store/store";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/product/:idProduct/*",
		element: (
			<Provider store={store}>
				<ProductPage />
			</Provider>
		),
	},
	{
		path: "*",
		element: <h1>404 Not Found</h1>,
	},
];

const router = createBrowserRouter(routes);
export default router;
