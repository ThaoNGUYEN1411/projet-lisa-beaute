import dbConnection from "./dbConnection.js";

const getAllBrands = async () => {
	const sql = `
    SELECT brand.*
    FROM lisabeaute.brand;
    `;

	try {
		const [results] = await dbConnection.query(sql);
		return results;
	} catch (error) {
		return error;
	}
};

export { getAllBrands };
