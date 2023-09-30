import express from "express";
import { postCreateUser, postLoginUser } from "../services/api.connection.js";
import argon2 from "argon2";
import dbConnection from "../services/dbConnection.js";

const userRouter = express.Router();

userRouter.post("/registration", async (req, res) => {
	// console.log("ok", req.body);
	const results = await postCreateUser(req.body);
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

userRouter.post("/login", async (req, res) => {
	// console.log(req.body);
	const query = await postLoginUser(req.body);
	if (query.length === 0) {
		res.status(403).json({
			status: 403,
			message: "Accès refusé",
		});
		return;
	}

	const user = query.shift();
	// console.log(user);
	if (user) {
		// console.log(user.password);
		const verifyHash = await argon2.verify(user.password, req.body.password);
		// console.log("verifiyash", verifyHash);
		if (req.body.email !== user.email || !verifyHash) {
			res.status(403).json({
				status: 403,
				message: "Accès refusé",
			});
			console.log("Accès refusé");
			return;
		}
		res.status(200).json({
			status: 200,
			message: "Connexion réussie.",
			data: user,
		});
		// console.log("Accès réussi");
	}
});

export default userRouter;
