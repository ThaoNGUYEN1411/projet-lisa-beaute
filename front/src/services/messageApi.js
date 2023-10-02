const VITE_API_URL = import.meta.env.VITE_API_URL;

const createNewMessage = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/messages/create`, {
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

const getAllMessages = async () => {
	const requestInfos = new Request(`${VITE_API_URL}/messages`);
	const request = await fetch(requestInfos);
	const response = await request.json();
	console.log(response);
	return response;
};

const deleteMessage = async (values) => {
	const requestInfos = new Request(`${VITE_API_URL}/messages/delete`, {
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

export { createNewMessage, getAllMessages, deleteMessage };
