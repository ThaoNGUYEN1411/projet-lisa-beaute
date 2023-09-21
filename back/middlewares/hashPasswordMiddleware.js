import * as argon2 from "argon2";

const hashPasswordMiddleware = async (req, res, next) => {
	const hash = await argon2.hash(req.body.password);
	req.body.password = hash;

	next();
};

export default hashPasswordMiddleware;
