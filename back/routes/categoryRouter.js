import express from "express";
import { getAllCategories } from "../services/api.category.js";
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

categoryRouter.put("/update", async (req, res) => {
	// requête
	const query = `
		UPDATE lisabeaute.category
		SET category.name = :name
		WHERE category.id = :id;
	`;

	try {
		const [results] = await dbConnection.query(query, req.body);
		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}
});

categoryRouter.delete("/delete", async (req, res) => {
	const sql = `
	DELETE FROM lisabeaute.category
	WHERE category.id = :id;
    `;

	try {
		const [results] = await dbConnection.query(sql, req.body);
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
});

categoryRouter.post("/create", async (req, res) => {
	const sql = `
	INSERT INTO lisabeaute.category
	VALUE (NULL, :name);
    `;

	try {
		const [results] = await dbConnection.query(sql, req.body);
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

categoryRouter.get("/:id", async (req, res) => {
	const { id } = req.params;

	const query = `
		SELECT category.*
		FROM lisabeaute.category
		WHERE category.id = :id;
	`;

	try {
		// const [results] = await dbConnection.query(query, { id: 1 });
		const [results] = await dbConnection.query(query, req.params);
		return res.status(200).json({
			status: 200,
			message: "OK",
			// shift : récupérer le premier indice d'un array
			data: results.shift(),
		});
	} catch (error) {
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}
});

export default categoryRouter;
