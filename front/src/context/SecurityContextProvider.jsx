import { createContext, useState, useContext } from "react";

const SecurityContext = createContext();

const SecurityProvider = ({ children }) => {
	const [user, setUser] = useState();
	// const value = { data: "My app" };
	return (
		<SecurityContext.Provider value={{ user, setUser }}>
			{children}
		</SecurityContext.Provider>
	);
};

export { SecurityContext, SecurityProvider };
