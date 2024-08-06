import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

// Configuración de __dirname y __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);

// Crear el servidor
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "/db.json"));
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter(require("./routes.json"));

// Usar los middlewares
server.use(middlewares);
server.use(rewriter);
server.use(router);

server.listen(3000, () => {
	console.log("JSON Server is running");
});
