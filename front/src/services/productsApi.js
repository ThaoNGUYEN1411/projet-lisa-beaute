const VITE_API_URL = import.meta.env.VITE_API_URL;

// renvoyer tous les produits
const getAllproducts = async (sort) => {
	const requestProducts = new Request(`${VITE_API_URL}/produits?sort=${sort}`);
	// console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

// récupérer un produit par son identifiant : /produits/:id
const getProduct = async (id) => {
	const requestProduct = new Request(`${VITE_API_URL}/produits/${id}`);

	const request = await fetch(requestProduct);

	const response = await request.json();
	console.log("response", response.data);
	return response.data;
};

// récupérer tous les produit la même marque ex: /produits/marques/chanel
const getAllProductsSameBrand = async (brand) => {
	const requestProducts = new Request(
		`${VITE_API_URL}/produits/marques/${brand}`,
	);
	// console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

// récupérer tous les produit la même categorie ex: /produits/categorie/soin
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

// récupérer tous les produit contient mot dans le bar de recherche
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

// creer un nouveau commantaire
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

const createProduct = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/produits/create`, {
		method: "post",
		// headers: {
		// 	"Content-Type": "application/json",
		// },
		// body: JSON.stringify(values),
		body: values,
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	return response;
};

const deleteProduct = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/produits/delete`, {
		method: "delete",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: values }),
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	return response;
};

const updateProduct = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/produits/update`, {
		method: "put",
		// headers: {
		// 	"Content-Type": "application/json",
		// },
		// body: JSON.stringify(values),
		body: values,
	});
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
	createProduct,
	deleteProduct,
	updateProduct,
};
