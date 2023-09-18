const getAllBrands = async () => {
	const requestProduct = new Request("http://localhost:3000/marques");

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};
export default getAllBrands;
