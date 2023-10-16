import { createContext, useState } from "react";

const EmailContext = createContext();

const EmailProvider = ({ children }) => {
	const [email, setEmail] = useState("");
	return (
		<EmailContext.Provider value={{ email, setEmail }}>
			{children}
		</EmailContext.Provider>
	);
};

export { EmailContext, EmailProvider };
