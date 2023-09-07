import express from "express";
import http from "node:http";

const app = express();

const router = express.Router();
app.use(router);
router.use(express.json());

router.get("/", (req, res) => {
	res.send("hello world");
});

router.get("/products", (req, res) => {
	return res.status(200).json({
		status: 200,
		message: "ok",
		data: [
			{ id: 1, name: "product1", price: 10 },
			{ id: 1, name: "product1", price: 10 },
		],
	});
});

const server = http.createServer(app);
export default server;
