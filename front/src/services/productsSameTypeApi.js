const getAllProductsSameType = async (type) => {
	const requestProducts = new Request(`http://localhost:3000/produits/${type}`);
	console.log(requestProducts);
	const request = await fetch(requestProducts);

	const response = await request.json();
	return response;
};

export default getAllProductsSameType;
