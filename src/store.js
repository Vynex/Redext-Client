import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
	userReducer,
	postReducer,
	feedReducer,
	profileReducer,
	votedPostReducer,
	popularReducer,
	commentReducer,
	subredextReducer,
	subscribedReducer,
	modalReducer,
	notificationReducer,
} from './reducers';

const reducer = combineReducers({
	user: userReducer,
	feed: feedReducer,
	post: postReducer,
	profile: profileReducer,
	votedPosts: votedPostReducer,
	popular: popularReducer,
	comments: commentReducer,
	subredext: subredextReducer,
	subscribed: subscribedReducer,
	modal: modalReducer,
	notification: notificationReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
