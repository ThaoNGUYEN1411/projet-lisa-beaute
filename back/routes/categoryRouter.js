import express from "express";
import { deleteCategory, getAllCategories } from "../services/api.category.js";
import dbConnection from "../services/dbConnection.js";

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

categoryRouter.delete("/delete", async (req, res) => {
	const sql = `
	DELETE FROM lisabeaute.category
	WHERE category.id = :id;
    `;

	try {
		const [results] = await dbConnection.execute(sql, req.body);
		// console.log("Ok");
		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		return res.status(400).json({
			status: 400,
			message: error,
		});
	}
	// const results = await deleteCategory();

	// if (results.errno) {
	// 	return res.status(400).json({
	// 		status: 400,
	// 		message: "Error",
	// 	});
	// }

	// return res.status(200).json({
	// 	status: 200,
	// 	message: "OK",
	// });
});

categoryRouter.post("/create", async (req, res) => {
	const sql = `
	INSERT INTO lisabeaute.category
	VALUE (NULL, :name);
    `;

	try {
		const [results] = await dbConnection.execute(sql, req.body);
		console.log("Ok");
		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		return res.status(400).json({
			status: 400,
			message: error,
		});
	}
});

export default categoryRouter;
