export const storeUser = (user) => {
	window.localStorage.setItem('loggedUser', JSON.stringify(user));
};

export const retrieveUser = () => {
	const storedJSON = window.localStorage.getItem('loggedUser');

	return JSON.parse(storedJSON);
};

export const clearUser = () => {
	window.localStorage.removeItem('loggedUser');
};
