const getAllproducts = async () => {
	const requestProducts = new Request("http://localhost:3000/produits");
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

export {
	getProduct,
	getAllproducts,
	getAllProductsSameBrand,
	getAllProductsSameType,
};
