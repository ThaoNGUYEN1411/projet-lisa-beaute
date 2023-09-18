const getAllCategories = async () => {
	const requestProduct = new Request("http://localhost:3000/categories");

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};
export default getAllCategories;
