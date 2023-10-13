// import mysql from "mysql2/promise";

// // créer une connexion à l'aide des variables d'environnement stockées dans la configuration
// const dbConnection = mysql.createPool({
// 	host: process.env.DB_HOST,
// 	database: process.env.DB_NAME,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// 	namedPlaceholders: true,
// });

// export default dbConnection;

import mysql from "mysql2";
import config from "../config/config.js";
const dbConnection = mysql
	.createConnection({
		host: config.db.host,
		database: config.db.name,
		user: config.db.user,
		password: config.db.password,
		namedPlaceholders: true,
	})
	.promise();

export default dbConnection;
