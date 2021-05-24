const initialState = {
	type: null,
	message: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			return action.payload;

		case 'CLEAR_NOTIFICATION':
			return initialState;

		default:
			return state;
	}
};

export const setNotification = (notification) => {
	const { type, message } = notification;

	return async (dispatch) => {
		dispatch({
			type: 'SET_NOTIFICATION',
			payload: {
				type,
				message,
				toId: setTimeout(() => dispatch(clearNotification()), 5000),
			},
		});
	};
};

export const clearNotification = () => {
	return {
		type: 'CLEAR_NOTIFICATION',
	};
};

export default reducer;
