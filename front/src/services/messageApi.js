const createNewMessage = async (values) => {
	const requestInfos = new Request("http://localhost:3000/createNewMessage", {
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
export { createNewMessage };
