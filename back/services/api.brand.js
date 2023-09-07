import dbConnection from "./dbConnection.js";

const getAllMarques = async () => {
	const sql = `
    SELECT brand.*
    FROM lisabeaute.brand;
    `;

	try {
		const [results] = await dbConnection.execute(sql);
		return results;
	} catch (error) {
		return error;
	}
};

export { getAllMarques };
