import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: { "@": resolve(__dirname, "./src") },
	},
	build: {
		emptyOutDir: true,
		cssCodeSplit: false,
	},
});