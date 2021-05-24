import {
	getProfile,
	getProfileComments,
	getProfilePosts,
} from '../services/profile';

const initialState = {
	loaded: false,
	postKarma: 0,
	commentKarma: 0,
	createdAt: null,
	owned: [],
	posts: {
		count: 0,
		data: [],
	},
	comments: {
		count: 0,
		data: [],
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INIT_PROFILE':
			return { ...state, ...action.data, loaded: true };

		case 'SET_PROFILE_POSTS':
			return { ...state, posts: action.payload };

		case 'EXTEND_PROFILE_POSTS':
			return {
				...state,
				posts: {
					count: state.posts.count,
					data: [...state.posts.data, ...action.data],
				},
			};

		case 'SET_PROFILE_COMMENTS':
			return { ...state, comments: action.payload };

		case 'EXTEND_PROFILE_COMMENTS':
			return {
				...state,
				comments: {
					count: state.comments.count,
					data: [...state.comments.data, ...action.data],
				},
			};

		case 'CLEAR_PROFILE':
			return initialState;

		default:
			return state;
	}
};

export const initProfile = (username) => {
	return async (dispatch) => {
		const data = await getProfile(username);

		dispatch({
			type: 'INIT_PROFILE',
			data,
		});
	};
};

export const setProfilePosts = (username) => {
	return async (dispatch) => {
		const { count, data } = await getProfilePosts(username);

		dispatch({
			type: 'SET_PROFILE_POSTS',
			payload: {
				count,
				data,
			},
		});
	};
};

export const extendProfilePosts = (username, page) => {
	return async (dispatch) => {
		const { data } = await getProfilePosts(username, page);

		dispatch({
			type: 'EXTEND_PROFILE_POSTS',
			data,
		});
	};
};

export const setProfileComments = (username) => {
	return async (dispatch) => {
		const { count, data } = await getProfileComments(username);

		dispatch({
			type: 'SET_PROFILE_COMMENTS',
			payload: {
				count,
				data,
			},
		});
	};
};

export const extendProfileComments = (username, page) => {
	return async (dispatch) => {
		const { data } = await getProfileComments(username, page);

		dispatch({
			type: 'EXTEND_PROFILE_COMMENTS',
			data,
		});
	};
};

export const clearProfile = () => {
	return {
		type: 'CLEAR_PROFILE',
	};
};

export default reducer;
