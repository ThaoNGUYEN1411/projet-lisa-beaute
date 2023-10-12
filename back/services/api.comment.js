import dbConnection from "./dbConnection.js";

const getAllComments = async (data) => {
	const sql = `
    SELECT product.name, user.lastName AS user_lastName, user.firstName AS user_firstName , comment.content, comment.time
    FROM lisabeaute.product
    JOIN lisabeaute.user
    JOIN lisabeaute.comment
    ON comment.product_id = product.id
    AND comment.user_id = user.id
    WHERE product.id = :id
    ;
    `;

	try {
		const [results] = await dbConnection.query(sql, data);
		return results;
	} catch (error) {
		return error;
	}
};

export { getAllComments };
