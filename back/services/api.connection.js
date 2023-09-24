// import { query } from "express";
import dbConnection from "./dbConnection.js";
import argon2 from "argon2";

const postUserConnection = async (body) => {
	const values = { ...body, password: await argon2.hash(body.password) };
	// body.password = await argon2.hash(body.password);
	// console.log(body);
	const sql = `
    INSERT INTO lisabeaute.user
    VALUE(
        NULL,
        :firstName,
        :lastName,
        :email,
        :password
    );
    `;

	try {
		const [results] = await dbConnection.execute(sql, values);
		return results;
	} catch (error) {
		return error;
	}
};

export { postUserConnection };
