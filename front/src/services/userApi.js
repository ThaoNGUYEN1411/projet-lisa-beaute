const postCreateUser = async (values) => {
	console.log(values);
	const requestInfos = new Request("http://localhost:3000/user/registration", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	// executer la requete HTTP
	const requete = await fetch(requestInfos);

	//recupérer le réponse HTTP
	const reponse = await requete.json();

	//renvoyer la réponse
	return reponse;
};

const postLoginUser = async (values) => {
	// console.log(values);
	const requestInfos = new Request("http://localhost:3000/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	// executer la requete HTTP
	const requete = await fetch(requestInfos);

	//recupérer le réponse HTTP
	const reponse = await requete.json();
	console.log(reponse);
	//renvoyer la réponse
	return reponse;
};
export { postCreateUser, postLoginUser };
