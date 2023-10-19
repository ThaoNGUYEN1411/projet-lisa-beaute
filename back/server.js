// import des dépendances
import express from "express";
import http from "node:http";
import cors from "cors";

import brandRouter from "./routes/brandRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import searchRouter from "./routes/searchRouter.js";
import messageRouter from "./routes/messageRouter.js";

// création d'une application
const app = express();

// création d'un routeur
const router = express.Router();

// associer l'application au routeur
app.use(router);

// ajouter la méthode JSON à toutes les routes, pour récupérer le body des requêtes
router.use(express.json());

// autoriser les serveurs à dialoguer avec l'API
router.use(
	cors({
		origin: [
			"http://localhost:5173",
			"http://127.0.0.1:4173/",
			"http://localhost:4173/",
			"http://localhost:4174",
			"http://134.209.83.63",
		],
	}),
);

// accéder aux ressources externes
router.use(express.static("public"));

// créer les route
router.use("/categories", categoryRouter);

router.use("/marques", brandRouter);

router.use("/produits", productRouter);

router.use("/user", userRouter);

router.use("/search", searchRouter);

router.use("/messages", messageRouter);

// création du serveur http
const server = http.createServer(app);

// exporter le serveur pour l'importer dans index.js
export default server;
