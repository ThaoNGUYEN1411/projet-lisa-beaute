import express from "express";
import { getAllBrands } from "../services/api.brand.js";

const brandRouter = express.Router();

brandRouter.get("/", async (req, res) => {
	const results = await getAllBrands();
	console.log(results);
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

export default brandRouter;
