import express from "express";
import http from "node:http";
import cors from "cors";

import brandRouter from "./routes/brandRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import searchRouter from "./routes/searchRouter.js";
import messageRouter from "./routes/messageRouter.js";
// import { postNewMessage } from "./services/api.message.js";

const app = express();
const router = express.Router();
app.use(router);
router.use(express.json());
router.use(
	cors({
		origin: [
			"http://localhost:5173",
			"http://127.0.0.1:4173/",
			"http://localhost:4173/",
			"http://localhost:4174",
			"http://134.209.83.63",
		],
	}),
);

router.use("/categories", categoryRouter);

router.use("/marques", brandRouter);

router.use("/produits", productRouter);

router.use("/user", userRouter);
router.use("/search", searchRouter);

router.use("/messages", messageRouter);

// router.post("/createNewMessage", async (req, res) => {
// 	// const { email, sujet, contenu } = req.body;
// 	// console.log("req.body", req.body);
// 	// const result = await postNewMessage(req.body);
// 	// console.log("result", result);
// 	// if (result.errno) {
// 	// 	return res.status(400).json({
// 	// 		status: 400,
// 	// 		message: "Error",
// 	// 	});
// 	// }
// 	// return res.status(200).json({
// 	// 	status: 200,
// 	// 	message: "Message added successfully",
// 	// 	data: result,
// 	// });
// });

const server = http.createServer(app);
export default server;
