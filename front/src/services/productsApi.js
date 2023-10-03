const VITE_API_URL = import.meta.env.VITE_API_URL;

const getAllproducts = async (sort) => {
	const requestProducts = new Request(`${VITE_API_URL}/produits?sort=${sort}`);
	// console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

const getProduct = async (id) => {
	const requestProduct = new Request(`${VITE_API_URL}/produits/${id}`);

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};

const getAllProductsSameBrand = async (brand) => {
	const requestProducts = new Request(
		`${VITE_API_URL}/produits/marques/${brand}`,
	);
	// console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

const getAllProductsSameType = async (type) => {
	const requestProducts = new Request(
		`${VITE_API_URL}/produits/categorie/${type}`,
	);
	// console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

const getAllProductsPriceCroissant = async () => {
	const requestProducts = new Request(`${VITE_API_URL}/produits/croissant`);

	const request = await fetch(requestProducts);

	const reponse = await request.json();
	return reponse;
};

const getAllProductsBySearch = async (value) => {
	const requestProduct = new Request(`${VITE_API_URL}/search?q=${value}`);

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
const addCommentByUser = async (values) => {
	// console.log("addddd");
	const requestInfos = new Request(
		`${VITE_API_URL}/produits/commentaires/user`,
		{
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		},
	);
	const request = await fetch(requestInfos);
	const response = await request.json();
	return response;
};
export {
	getProduct,
	getAllproducts,
	getAllProductsSameBrand,
	getAllProductsSameType,
	getAllProductsPriceCroissant,
	getAllProductsBySearch,
	addCommentByUser,
};
