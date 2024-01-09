function validateEmail(email) {
	const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
	return reg.test(email);
}

export { validateEmail };
