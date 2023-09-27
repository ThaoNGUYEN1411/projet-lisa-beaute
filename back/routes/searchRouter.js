import express from "express";
import dbConnection from "../services/dbConnection.js";
import { getProductsBySearch } from "../services/api.products.js";

const searchRouter = express.Router();

searchRouter.get("/", async (req, res) => {
	const q = req.query.q;
	// console.log(req.params);
	const results = await getProductsBySearch(q);
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

export default searchRouter;
