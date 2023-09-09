import express from "express";
import http from "node:http";
import { getAllCategories } from "./services/api.category.js";
import { getAllMarques } from "./services/api.brand.js";
import {
	getAllProductsSameType,
	getAllProducts,
	getAllProductsSameBrand,
} from "./services/api.products.js";

const app = express();

const router = express.Router();
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

router.get("/produits", async (req, res) => {
	const results = await getAllProducts();
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

router.get("/produits/:type", async (req, res) => {
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

router.get("/marques/:brand", async (req, res) => {
	const { brand } = req.params;
	console.log(brand);
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

const server = http.createServer(app);
export default server;
