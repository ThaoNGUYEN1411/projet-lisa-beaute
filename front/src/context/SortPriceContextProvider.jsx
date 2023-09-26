import { createContext, useState } from "react";

const SortPriceContext = createContext();

const SortPriceProvider = ({ children }) => {
	const [sort, setSort] = useState();
	return (
		<SortPriceContext.Provider value={{ sort, setSort }}>
			{children}
		</SortPriceContext.Provider>
	);
};

export { SortPriceContext, SortPriceProvider };
