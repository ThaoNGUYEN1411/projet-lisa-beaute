import dbConnection from "./dbConnection.js";

const getAllProducts = async (sort) => {
	//creer requête SQl
	let sql = `
	SELECT product.*,
		brand.name AS brand_name
	FROM lisabeaute.product
	JOIN lisabeaute.brand
	ON product.brand_id = brand.id
    `;
	if (sort === "asc" || sort === "desc") {
		sql += `
		  ORDER BY product.price ${sort}
		`;
	}
	// exécuter la requête
	try {
		// récupérer les résultats de la requête
		const [results] = await dbConnection.query(sql);
		return results;
	} catch (error) {
		return error;
	}
};

// selectionner tous les produits selon leurs type
const getAllProductsSameType = async (data) => {
	const sql = `
    SELECT product.*, brand.name AS brand_name, category.name AS category_name
    FROM lisabeaute.product
	JOIN lisabeaute.brand
	ON product.brand_id = brand.id 
    JOIN lisabeaute.category
    JOIN lisabeaute.product_category
    ON product_category.category_id = category.id
    AND product_category.product_id = product.id 
    WHERE category.name = :type;
    `;

	try {
		const [results] = await dbConnection.query(sql, data);
		return results;
	} catch (error) {
		return error;
	}
};

// selectionner tous les produits de la même marque, par exemple the ordinary
const getAllProductsSameBrand = async (data) => {
	const sql = `
    SELECT product.*, brand.name AS brand_name, 
	GROUP_CONCAT(category.name) AS category_name
    FROM lisabeaute.product
    JOIN lisabeaute.brand
    ON product.brand_id = brand.id
	JOIN lisabeaute.category
    JOIN lisabeaute.product_category
    ON product_category.category_id = category.id
    AND product_category.product_id = product.id
    WHERE brand.name = :brand
	GROUP BY(product.id)
    ;
    `;

	try {
		const [results] = await dbConnection.query(sql, data);
		return results;
	} catch (error) {
		return error;
	}
};
// récupérer un product avec le marque et la categorie
const getProduct = async (data) => {
	// requête
	const sql = `SELECT product.*, brand.name AS brand_name, category.name AS category_name
	FROM lisabeaute.product
	JOIN lisabeaute.brand
	ON product.brand_id = brand.id 
	JOIN lisabeaute.category
	JOIN lisabeaute.product_category
	ON product_category.category_id = category.id
	AND product_category.product_id = product.id 
	WHERE product.id = :id;`;
	try {
		const [results] = await dbConnection.query(sql, data);
		return results[0];
	} catch (error) {
		return error;
	}
};

// récupérer un produit par son identifiant
const getProductById = async (id) => {
	// console.log("getProductById", id);
	// requête
	const sql = `SELECT product.*
	FROM lisabeaute.product
	WHERE product.id = :id;`;
	try {
		const [results] = await dbConnection.query(sql, id);
		// console.log(results);
		return results[0];
	} catch (error) {
		return error;
	}
};

const getAllProductsPriceCroissant = async () => {
	const sql = `SELECT product.*,
	brand.name AS brand_name
	FROM lisabeaute.product
	JOIN lisabeaute.brand
	ON product.brand_id = brand.id 
	ORDER BY product.price DESC;`;
	try {
		const [results] = await dbConnection.query(sql);
		return results;
	} catch (error) {
		return error;
	}
};

const getProductsBySearch = async (search) => {
	const sql = `SELECT product.id, product.name, brand.name AS brand
	FROM lisabeaute.product
	JOIN lisabeaute.brand
	ON product.brand_id = brand.id 
	WHERE product.name 
	LIKE "%${search}%"
	OR brand.name
	LIKE "%${search}%"
	LIMIT 8;`;

	// console.log(sql);
	try {
		const [results] = await dbConnection.query(sql);
		return results;
	} catch (error) {
		return error;
	}
};

export {
	getAllProducts,
	getAllProductsSameType,
	getAllProductsSameBrand,
	getProduct,
	getAllProductsPriceCroissant,
	getProductsBySearch,
	getProductById,
};
