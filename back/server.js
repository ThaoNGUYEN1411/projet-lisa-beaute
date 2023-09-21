import express from "express";
import http from "node:http";
import cors from "cors";

import { getAllCategories } from "./services/api.category.js";
import { getAllMarques } from "./services/api.brand.js";
import {
	getAllProductsSameType,
	getAllProducts,
	getAllProductsSameBrand,
	getProduct,
	// getAllProductsPriceCroissant,
} from "./services/api.products.js";
import { getAllComments } from "./services/api.comment.js";
// import { postNewMessage } from "./services/api.message.js";

const app = express();

const router = express.Router();
router.use(cors());
app.use(router);
router.use(express.json());

router.get("/categories", async (req, res) => {
	const results = await getAllCategories();
	// console.log(results);

	if (results.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});
});

router.get("/marques", async (req, res) => {
	const results = await getAllMarques();
	if (results.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});
});

router.get("/marques/:brand", async (req, res) => {
	// const { brand } = req.params;
	// console.log(brand);
	const results = await getAllProductsSameBrand(req.params);
	// console.log(results);
	if (results.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});
});

// router.get("/produits", async (req, res) => {
// 	console.log("xouxou");
// 	const results = await getAllProducts();
// 	// console.log(results);
// 	if (results.errno) {
// 		return res.status(400).json({
// 			status: 400,
// 			message: "Error",
// 		});
// 	}

// 	return res.status(200).json({
// 		status: 200,
// 		message: "OK",
// 		data: results,
// 	});
// });

router.get("/produits/croissant", async (req, res) => {
	const results = await getAllProductsPriceCroissant();
	// console.log(results);
	if (results.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});
});

router.get("/produits/categorie/:type", async (req, res) => {
	// const { type } = req.params;

	// console.log(req.params);

	const results = await getAllProductsSameType(req.params);
	// console.log(results);
	if (results.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});
});

router.get("/produits/marques/:brand", async (req, res) => {
	const results = await getAllProductsSameBrand(req.params);
	// console.log(results);
	if (results.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});
});

router.get("/produits/:id", async (req, res) => {
	const results = await getProduct(req.params);
	// console.log(req.params);
	if (results?.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});
});

router.get("/commentaires/:id", async (req, res) => {
	const results = await getAllComments(req.params);
	// console.log(req.params);
	if (results?.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});
});

router.post("/createNewMessage", async (req, res) => {
	// const { email, sujet, contenu } = req.body;
	// console.log("req.body", req.body);
	// const result = await postNewMessage(req.body);
	// console.log("result", result);
	// if (result.errno) {
	// 	return res.status(400).json({
	// 		status: 400,
	// 		message: "Error",
	// 	});
	// }
	// return res.status(200).json({
	// 	status: 200,
	// 	message: "Message added successfully",
	// 	data: result,
	// });
});
//

router.get("/produits", async (req, res) => {
	const sort = req.query.sort;
	console.log(sort);
	const results = await getAllProducts(sort);
	// console.log(results);
	if (results.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(200).json({
		status: 200,
		message: "OK",
		data: results,
	});

	// Récupérer les paramètres d'URL
	// const sort = req.query.sort;
	// console.log(sort);
	// // Copier les produits pour éviter de trier la liste d'origine
	// const produitsCopie = [...produits];
	// // Trier les produits en fonction du paramètre 'sort'
	// if (sort === "asc") {
	// 	produitsCopie.sort((a, b) => parseInt(a.price) - parseInt(b.price)); // Tri croissant
	// } else if (sort === "desc") {
	// 	produitsCopie.sort((a, b) => parseInt(b.price) - parseInt(a.price)); // Tri décroissant
	// }
	// console.log(produitsCopie);
	// // Renvoyer les produits triés en réponse
	// res.json(produitsCopie);
});

const server = http.createServer(app);
export default server;
