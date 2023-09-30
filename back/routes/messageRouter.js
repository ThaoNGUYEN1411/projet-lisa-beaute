import express from "express";
import dbConnection from "../services/dbConnection.js";
const messageRouter = express.Router();

messageRouter.post("/", async (req, res) => {
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
export default messageRouter;
