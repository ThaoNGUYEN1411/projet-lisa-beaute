const getAllBrands = async () => {
	const requestProduct = new Request("http://localhost:3000/marques");

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};

const deleteBrands = async (values) => {
	const requestInfos = new Request("http://localhost:3000/marques/delete", {
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

const createBrands = async (values) => {
	const requestInfos = new Request("http://localhost:3000/marques/create", {
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

const updateBrands = async (values) => {
	const requestInfos = new Request("http://localhost:3000/marques/update", {
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

const getBrandsById = async (id) => {
	const requestInfos = new Request(`http://localhost:3000/marques/${id}`, {
		method: "get",
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	// console.log(response);
	return response;
};
export {
	getAllBrands,
	deleteBrands,
	createBrands,
	updateBrands,
	getBrandsById,
};
