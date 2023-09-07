import mysql from "mysql2/promise";
import config from "../config/config.js";

// créer une connexion à l'aide des variables d'environnement stockées dans la configuration
const dbConnection = await mysql.createConnection({
	host: config.db.host,
	database: config.db.name,
	user: config.db.user,
	password: config.db.password,
	namedPlaceholders: true,
});

export default dbConnection;
