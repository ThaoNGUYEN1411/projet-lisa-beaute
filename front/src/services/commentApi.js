const VITE_API_URL = import.meta.env.VITE_API_URL;

const getAllComments = async (id) => {
	const requestProduct = new Request(`${VITE_API_URL}/commentaires/${id}`);

	const request = await fetch(requestProduct);

	const response = await request.json();

	return response.data;
};
export { getAllComments };
