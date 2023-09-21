const FilterSortProducts = (products, order) => {
	const productsClone = [...products];
	if (order === "croissant") {
		productsClone.sort((product1, product2) => product1.price - product2.price);
	} else {
		productsClone.sort((product1, product2) => product2.price - product1.price);
	}
	return productsClone;
};

export default FilterSortProducts;
