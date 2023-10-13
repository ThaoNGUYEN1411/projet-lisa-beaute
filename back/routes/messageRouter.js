import express from "express";
import dbConnection from "../services/dbConnection.js";
const messageRouter = express.Router();

messageRouter.post("/create", async (req, res) => {
	const sql = ` INSERT INTO lisabeaute.message
    VALUES
    (NULL, :sujet, :lastName, :firstName, :email, :messageContent)`;

	try {
		const [results] = await dbConnection.execute(sql, req.body);
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

messageRouter.get("/", async (req, res) => {
	const sql = ` SELECT message.*
	FROM lisabeaute.message
	`;

	try {
		const [results] = await dbConnection.execute(sql, req.body);
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	} catch (error) {
		return res.status(400).json({
			status: 400,
			message: error,
		});
	}
});

messageRouter.delete("/delete", async (req, res) => {
	const sql = `
	DELETE FROM lisabeaute.message
	WHERE message.id = :id;
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

export default messageRouter;
