import dbConnection from "./dbConnection.js";

const getAllProducts = async () => {
	const sql = `
	SELECT product.*,
		brand.name AS brand_name
	FROM lisabeaute.product
	JOIN lisabeaute.brand
	ON product.brand_id = brand.id 
;
    `;
	try {
		const [results] = await dbConnection.execute(sql);
		return results;
	} catch (error) {
		return error;
	}
};

// selectionner tous les parfums
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
		const [results] = await dbConnection.execute(sql, data);
		return results;
	} catch (error) {
		return error;
	}
};

// selectionner tous les produits de la même marque, par exemple the ordinary
const getAllProductsSameBrand = async (data) => {
	const sql = `
    SELECT product.*, brand.name AS brand_name, category.name AS category_name
    FROM lisabeaute.product
    JOIN lisabeaute.brand
    ON product.brand_id = brand.id
	JOIN lisabeaute.category
    JOIN lisabeaute.product_category
    ON product_category.category_id = category.id
    AND product_category.product_id = product.id
    WHERE brand.name = :brand
    ;
    `;

	try {
		const [results] = await dbConnection.execute(sql, data);
		return results;
	} catch (error) {
		return error;
	}
};

const getProduct = async (data) => {
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
		const [results] = await dbConnection.execute(sql, data);
		return results[0];
	} catch (error) {
		return error;
	}
};

export {
	getAllProducts,
	getAllProductsSameType,
	getAllProductsSameBrand,
	getProduct,
};
