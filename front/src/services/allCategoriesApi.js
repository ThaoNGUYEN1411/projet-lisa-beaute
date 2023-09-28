const getAllCategories = async () => {
	const requestProduct = new Request("http://localhost:3000/categories");

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};

const deleteCategory = async (values) => {
	const requestInfos = new Request("http://localhost:3000/categories/delete", {
		method: "delete",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: values }),
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	console.log(response);
	return response;
};

const createCategory = async (values) => {
	const requestInfos = new Request("http://localhost:3000/categories/create", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	console.log(response);
	return response;
};
export { getAllCategories, deleteCategory, createCategory };
