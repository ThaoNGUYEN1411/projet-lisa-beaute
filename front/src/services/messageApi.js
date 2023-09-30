const createNewMessage = async (values) => {
	const requestInfos = new Request("http://localhost:3000/messages/create", {
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
	const requestInfos = new Request("http://localhost:3000/messages");
	const request = await fetch(requestInfos);
	const response = await request.json();
	console.log(response);
	return response;
};

const deleteMessage = async (values) => {
	const requestInfos = new Request("http://localhost:3000/messages/delete", {
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
