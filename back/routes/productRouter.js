import express from "express";
import {
	getAllProducts,
	getAllProductsSameBrand,
	getAllProductsSameType,
	getProduct,
} from "../services/api.products.js";
import { getAllComments } from "../services/api.comment.js";
import dbConnection from "../services/dbConnection.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
	const sort = req.query.sort;
	// console.log(sort);
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
});

productRouter.get("/:id", async (req, res) => {
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

productRouter.get("/categorie/:type", async (req, res) => {
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

productRouter.get("/marques/:brand", async (req, res) => {
	const results = await getAllProductsSameBrand(req.params);
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

productRouter.get("/commentaires/:id", async (req, res) => {
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

productRouter.post("/commentaires/user", async (req, res) => {
	const sql = `
	INSERT INTO lisabeaute.comment
	VALUE (NULL, :content, :time, :userId, :productId);
    `;
	// console.log("recu", req.body);
	try {
		const [results] = await dbConnection.execute(sql, req.body);
		// console.log("results", results);
		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		// console.log("error", error);
		return res.status(400).json({
			status: 400,
			message: error,
		});
	}
});

export default productRouter;
