import { getUser, login, register, setToken } from '../services/user.js';
import { clearUser, retrieveUser, storeUser } from '../utils/authStorage.js';

const reducer = (state = null, action) => {
	switch (action.type) {
		case 'INIT_USER':
			return action.data;

		case 'LOGIN_USER':
			return action.data;

		case 'REGISTER_USER':
			return action.data;

		case 'LOGOUT_USER':
			return null;

		default:
			return state;
	}
};

export const initUser = () => {
	const data = retrieveUser();
	if (data) setToken(data.token);

	return async (dispatch) => {
		if (data) {
			const { karma } = await getUser();
			data.karma = karma;
		}

		dispatch({
			type: 'INIT_USER',
			data,
		});
	};
};

export const loginUser = (credentials) => {
	return async (dispatch) => {
		const data = await login(credentials);
		storeUser(data);

		dispatch(initUser());
		dispatch({
			type: 'LOGIN_USER',
			data,
		});
	};
};

export const registerUser = (credentials) => {
	return async (dispatch) => {
		const data = await register(credentials);
		storeUser(data);

		dispatch(initUser());
		dispatch({
			type: 'REGISTER_USER',
			data,
		});
	};
};

export const logoutUser = () => {
	clearUser();

	return {
		type: 'LOGOUT_USER',
	};
};

export default reducer;
