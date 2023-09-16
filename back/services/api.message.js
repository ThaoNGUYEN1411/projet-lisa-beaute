// import dbConnection from "./dbConnection.js";

// const postNewMessage = async (newMessage) => {
// 	// const { sujet, lastName, firstName, email, message } = newMessage;

// 	// console.log("newMEssage", newMessage);

// 	const sql = `
//     INSERT INTO lisabeaute.message
//     (id, sujet, lastName, firstName, email, messageContent)
//     VALUES
//     (?,?,?,?,?,?)
//     `;

// 	dbConnection.query(
// 		sql,
// 		[
// 			newMessage.id,
// 			newMessage.sujet,
// 			newMessage.lastName,
// 			newMessage.firstName,
// 			newMessage.email,
// 			newMessage.messageContent,
// 		],
// 		(err, result) => {
// 			if (err) {
// 				console.error("Error inserting message: ", err);
// 				res.status(500).json({ errno: "Error inserting message" });
// 				return;
// 			}
// 			console.log("Product added successfully");
// 			return result;
// 		},
// 	);
// };

// const newMessage = {
// 	id: 1,
// 	sujet: "publicité",
// 	lastName: "ha",
// 	firstName: "ha",
// 	email: "ha@gmail.com",
// 	messageContent: "message",
// };

// console.log("test", postNewMessage(newMessage));

// export { postNewMessage };
