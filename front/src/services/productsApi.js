const getAllproducts = async (sort) => {
	const requestProducts = new Request(
		`http://localhost:3000/produits?sort=${sort}`,
	);
	// console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

const getProduct = async (id) => {
	const requestProduct = new Request(`http://localhost:3000/produits/${id}`);

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};

const getAllProductsSameBrand = async (brand) => {
	const requestProducts = new Request(
		`http://localhost:3000/produits/marques/${brand}`,
	);
	// console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

const getAllProductsSameType = async (type) => {
	const requestProducts = new Request(
		`http://localhost:3000/produits/categorie/${type}`,
	);
	// console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

const getAllProductsPriceCroissant = async () => {
	const requestProducts = new Request(
		"http://localhost:3000/produits/croissant",
	);

	const request = await fetch(requestProducts);

	const reponse = await request.json();
	return reponse;
};

const getAllProductsBySearch = async (value) => {
	const requestProduct = new Request(`http://localhost:3000/search?q=${value}`);

	const request = await fetch(requestProduct);

	const response = await request.json();

	// setSearchResult(response.data);
	return response.data;
};
// const getAllProductsFilter = async () => {
// 	const requestProducts = new Request(
// 		"http://localhost:3000/produits?sort=${sort}",
// 	);
// 	const request = await fetch(requestProducts);
// 	const reponse = await request.json();
// 	return reponse;
// };

export {
	getProduct,
	getAllproducts,
	getAllProductsSameBrand,
	getAllProductsSameType,
	getAllProductsPriceCroissant,
	getAllProductsBySearch,
};
