import { useEffect } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const postCreateUser = async (values) => {
	// console.log(values);
	const requestInfos = new Request(`${VITE_API_URL}/user/registration`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	// executer la requete HTTP
	const requete = await fetch(requestInfos);

	//recupérer le réponse HTTP
	const reponse = await requete.json();

	//renvoyer la réponse
	return reponse;
};

const postLoginUser = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/user/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	// executer la requete HTTP
	const requete = await fetch(requestInfos);

	//recupérer le réponse HTTP
	const reponse = await requete.json();
	// console.log(reponse);
	//renvoyer la réponse
	return reponse;
};

const getWishlistOfUser = async (id) => {
	const requestProduct = new Request(`${VITE_API_URL}/user/Wishlist/${id}`);

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};

const addProductToWishlist = async (values) => {
	// console.log("addddd");
	const requestInfos = new Request(`${VITE_API_URL}/user/Wishlist/add`, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	// console.log("requestInfos", requestInfos);
	const request = await fetch(requestInfos);
	const response = await request.json();
	// console.log(response);
	return response;
};

const deleteProductFromWishlist = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/user/Wishlist/delete`, {
		method: "delete",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: values }),
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	// console.log(response);
	return response;
};
export {
	postCreateUser,
	postLoginUser,
	getWishlistOfUser,
	addProductToWishlist,
	deleteProductFromWishlist,
};
