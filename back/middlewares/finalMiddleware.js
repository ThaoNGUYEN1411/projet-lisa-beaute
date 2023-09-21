const register = async (req, res) => {
	res.status(200).json({
		status: 200,
		message: "Registration success",
	});
};
export default register;
