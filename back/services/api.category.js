import dbConnection from "./dbConnection.js";

const getAllCategories = async () => {
	const sql = `
        SELECT category.*
        FROM lisabeaute.category;
    `;

	try {
		const [results] = await dbConnection.execute(sql);
		return results;
	} catch (error) {
		return error;
	}
};

export { getAllCategories };
