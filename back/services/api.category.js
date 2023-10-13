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

// const deleteCategory = async () => {
// 	const sql = `
// 	DELETE FROM lisabeaute.category
// 	WHERE category.id = :id;
//     `;

// 	try {
// 		console.log(req);
// 		const [results] = await dbConnection.execute(sql, req.body);
// 		// console.log("Ok");
// 		return results;
// 	} catch (error) {
// 		console.log(error);

// 		return error;
// 	}
// };
export { getAllCategories };
