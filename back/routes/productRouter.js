import express, { query } from "express";
import multer from "multer";
import fs from "node:fs/promises";
import {
	getAllProducts,
	getAllProductsSameBrand,
	getAllProductsSameType,
	getProduct,
	getProductById,
} from "../services/api.products.js";
import { getAllComments } from "../services/api.comment.js";
import dbConnection from "../services/dbConnection.js";
import { getExtensionFromMimeType } from "../services/fileService.js";
import { log } from "node:console";

const productRouter = express.Router();

const uploadDirectory = "public/img/";
const uploader = multer({ dest: uploadDirectory });

// renvoyer tous les produits
productRouter.get("/", async (req, res) => {
	const sort = req.query.sort;
	// console.log(sort);
	const results = await getAllProducts(sort);
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

// récupérer un produit par son identifiant : /produits/:id
productRouter.get("/:id", async (req, res) => {
	const results = await getProduct(req.params);
	// console.log(req.params);
	if (results?.errno) {
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

// récupérer tous les produit la même categorie ex: /produits/categorie/soin
productRouter.get("/categorie/:type", async (req, res) => {
	// console.log(req.params);

	const results = await getAllProductsSameType(req.params);
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

// récupérer tous les produit la même marque ex: /produits/marques/chanel
productRouter.get("/marques/:brand", async (req, res) => {
	const results = await getAllProductsSameBrand(req.params);
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

// récupérer tous les commentaire d'un produit ex: /produits/commentaires/:id
productRouter.get("/commentaires/:id", async (req, res) => {
	const results = await getAllComments(req.params);
	// console.log(req.params);
	if (results?.errno) {
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

// créer un commentaire d'un produits par un user /produits/commentaires/user
productRouter.post("/commentaires/user", async (req, res) => {
	const sql = `
	INSERT INTO lisabeaute.comment
	VALUE (NULL, :content, :time, :userId, :productId);
    `;
	// console.log("recu", req.body);
	try {
		const [results] = await dbConnection.execute(sql, req.body);
		// console.log("results", results);
		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		// console.log("error", error);
		return res.status(400).json({
			status: 400,
			message: error,
		});
	}
});

// créer un nouveau produit /produits/create
// ajouter le middleware de multer : uploader.any
productRouter.post("/create", uploader.any(), async (req, res) => {
	// nom final du fichier transféré : ajout de l'extension
	const image = `${req.files[0].filename}.${getExtensionFromMimeType(
		req.files[0].mimetype,
	)}`;

	const query = `
	INSERT INTO lisabeaute.product
	VALUE (NULL, :name, :price, :description, :usage_tips, :ingredients, :image, :brand_id
	);
	`;
	/*
		la valeur de la variable id de la requête SQL est définie dans un objet JS dont les propriétés reprennent les noms des variables SQL
			variable SQL :id > { id: ... }
			variable SQL :name et :id > { name: ..., id: ... }
	*/

	try {
		// ajout du nom final du fichier dans les variables de requête
		const [results] = await dbConnection.execute(query, {
			...req.body,
			image: image,
		});

		// renommer le fichier transféré avec son nom final
		await fs.rename(
			`${req.files[0].destination}${req.files[0].filename}`,
			`${req.files[0].destination}${image}`,
		);
		// donner un accès 777 au fichier transféré
		// await fs.chmod(`${req.files[0].destination}${image}`, 0o777);

		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			message: error,
		});
	}
});

productRouter.delete("/delete", async (req, res) => {
	// récupérer les informations dans la base de données pour connaître l'image à supprimer
	const { id } = req.body;
	// récupérer le produit by id
	const product = await getProductById(id);

	// requête
	const query = `
		DELETE FROM lisabeaute.product
		WHERE product.id = :id;
	`;
	//essayer de récupérer le nom de image mais il est undefined => 400
	console.log(product.image);
	try {
		const [results] = await dbConnection.execute(query, req.body);

		// supprimer l'image
		await fs.rm(`${uploadDirectory}${product.image}`);

		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			// message: "Error",
			message: error,
		});
	}
});

// modifier un product
// ajouter le middleware de multer : uploader.any
productRouter.put("/update", uploader.any(), async (req, res) => {
	// récupérer les informations dans la base de données pour connaître l'image existante
	const { id } = req.body;
	const product = await getProductById(id);
	console.log(id);
	console.log(product);
	// récupérer le body de la requête
	let bodyWithImage = req.body;
	console.log(req.files);
	// si aucune image n'a été sélectionnée dans le formulaire, utiliser l'image existante en base de données
	if (req.files.length === 0) {
		bodyWithImage = { ...bodyWithImage, image: product.image };
	}

	// si une image a été sélectionnée dans le formulaire, transférer la nouvelle image et supprimer l'ancienne
	else {
		// nom final du fichier transféré : ajout de l'extension
		const image = `${req.files[0].filename}.${getExtensionFromMimeType(
			req.files[0].mimetype,
		)}`;

		// renommer le fichier transféré avec son nom final
		await fs.rename(
			`${req.files[0].destination}${req.files[0].filename}`,
			`${req.files[0].destination}${image}`,
		);

		// supprimer l'ancienne image
		await fs.rm(`${uploadDirectory}${student.portrait}`);

		// utiliser la nouvelle image dans le body de la requête
		bodyWithImage = { ...bodyWithImage, image: image };
	}
	// requête
	const query = `
			UPDATE formation.student
			SET
				product.name = :name,
				product.price = :price,
				product.description = :description,
				product.usage_tips = :usage_tips,
				product.ingredients = :ingredients,
				product.image = :image,
				product.brand_id = :brand_id
				WHERE product.id = :id;
		`;
	/*
		la valeur de la variable id de la requête SQL est définie dans un objet JS dont les propriétés reprennent les noms des variables SQL
			variable SQL :id > { id: ... }
			variable SQL :name et :id > { name: ..., id: ... }
	*/

	try {
		const [results] = await dbConnection.execute(query, bodyWithImage);
		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			// message: "Error",
			message: error,
		});
	}
});
export default productRouter;
