const getProduct = async () => {
	const requestProduct = new Request("http://localhost:3000/produits");
	console.log(requestProduct);
	const request = await fetch(requestProduct);

	const response = await request.json();
	return response;
};
export default getProduct;
