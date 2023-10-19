import mysql from "mysql2/promise";

// // créer une connexion à l'aide des variables d'environnement stockées dans la configuration
const dbConnection = mysql.createPool({
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	namedPlaceholders: true,
});

export default dbConnection;
