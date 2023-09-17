const getAllComments = async (id) => {
	const requestProduct = new Request(
		`http://localhost:3000/commentaires/${id}`,
	);

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};
export default getAllComments;
