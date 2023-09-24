import express from "express";
import { postUserConnection } from "../services/api.connection.js";

const userRouter = express.Router();

userRouter.post("/create", async (req, res) => {
	// console.log("ok", req.body);
	const results = await postUserConnection(req.body);
	// console.log(results);
	if (results.errno) {
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}

	return res.status(201).json({
		status: 201,
		message: "OK",
		// data: results,
	});
});

export default userRouter;
