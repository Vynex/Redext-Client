const reducer = (state = '', action) => {
	switch (action.type) {
		case 'TOGGLE_MODAL':
			return action.data;

		default:
			return state;
	}
};

export const toggleModal = (modal) => {
	return {
		type: 'TOGGLE_MODAL',
		data: modal,
	};
};

export default reducer;
