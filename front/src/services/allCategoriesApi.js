const VITE_API_URL = import.meta.env.VITE_API_URL;

const getAllCategories = async () => {
	const requestProduct = new Request(`${VITE_API_URL}/categories`);

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};

const deleteCategory = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/categories/delete`, {
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

const createCategory = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/categories/create`, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	// console.log(response);
	return response;
};

const updateCategory = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/categories/update`, {
		method: "put",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	// console.log(response);
	return response;
};

const getCategoryById = async (id) => {
	const requestInfos = new Request(`${VITE_API_URL}/categories/${id}`, {
		method: "get",
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	// console.log(response);
	return response;
};
export {
	getAllCategories,
	deleteCategory,
	createCategory,
	updateCategory,
	getCategoryById,
};
