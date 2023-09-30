import express from "express";
import { getAllBrands } from "../services/api.brand.js";
import dbConnection from "../services/dbConnection.js";

const brandRouter = express.Router();

brandRouter.get("/", async (req, res) => {
	const results = await getAllBrands();
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

brandRouter.get("/:id", async (req, res) => {
	const { id } = req.params;

	const query = `
		SELECT brand.*
		FROM lisabeaute.brand
		WHERE brand.id = :id;
	`;

	try {
		// const [results] = await dbConnection.execute(query, { id: 1 });
		const [results] = await dbConnection.execute(query, req.params);
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

brandRouter.put("/update", async (req, res) => {
	// requête
	const query = `
		UPDATE lisabeaute.brand
		SET brand.name = :name
		WHERE brand.id = :id;
	`;

	try {
		const [results] = await dbConnection.execute(query, req.body);
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

brandRouter.post("/create", async (req, res) => {
	const sql = `
	INSERT INTO lisabeaute.brand
	VALUE (NULL, :name);
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
});

brandRouter.delete("/delete", async (req, res) => {
	const sql = `
	DELETE FROM lisabeaute.brand
	WHERE brand.id = :id;
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
});

export default brandRouter;
