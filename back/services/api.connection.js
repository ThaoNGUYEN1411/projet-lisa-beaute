// import { query } from "express";
import dbConnection from "./dbConnection.js";
import argon2 from "argon2";

const postCreateUser = async (body) => {
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
        :password,
		2
    );
    `;

	try {
		const [results] = await dbConnection.query(sql, values);
		return results;
	} catch (error) {
		return error;
	}
};

const postLoginUser = async (body) => {
	const sql = `
	SELECT user.*, role.name AS role
	FROM lisabeaute.user
	JOIN formation.role
	ON role.id = user.role_id
	WHERE user.email = :email;`;

	try {
		const [results] = await dbConnection.query(sql, body);

		return results;
	} catch (error) {
		return error;
	}
};

export { postLoginUser, postCreateUser };
