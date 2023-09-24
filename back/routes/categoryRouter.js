import express from "express";
import { getAllCategories } from "../services/api.category.js";

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
	const results = await getAllCategories();

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

export default categoryRouter;
