import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import router from "@/routes/router";
import "@/reset.css";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>,
);
