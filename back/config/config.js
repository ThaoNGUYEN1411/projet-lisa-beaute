import * as dotenv from "dotenv";

// charger le fichier dotenv
dotenv.config();

// stocker les variables d'environnement dans un objet
const config = {
	db: {
		host: process.env.DB_HOST,
		name: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	},
};

// exporter la configuration
export default config;
