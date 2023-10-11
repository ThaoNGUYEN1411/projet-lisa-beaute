import { createContext, useState, useContext } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
	const data = { lat: 48.8588845, lng: 2.3469411 };

	const [coords, setCoords] = useState(data);
	// const value = { data: "My app" };
	return (
		<StoreContext.Provider value={{ coords, setCoords }}>
			{children}
		</StoreContext.Provider>
	);
};

export { StoreContext, StoreProvider };
