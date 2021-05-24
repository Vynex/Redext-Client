import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { editPost } from '../../../reducers/postReducer';
import { PostContent, ContentEdit, ContentEnd, ContentButton } from './styles';

const Content = ({ isEditing, cancelEditing, body, pID }) => {
	const dispatch = useDispatch();
	const [content, setContent] = useState(body);

	const handleCancel = () => {
		cancelEditing();
		setContent(body);
	};

	const handleSave = () => {
		cancelEditing();

		if (content !== body) {
			dispatch(editPost(pID, content));
		}
	};

	if (!isEditing)
		return (
			<PostContent>
				<ReactMarkdown>{body}</ReactMarkdown>
			</PostContent>
		);

	return (
		<>
			<ContentEdit
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<ContentEnd>
				<ContentButton onClick={handleCancel}>Cancel</ContentButton>
				<ContentButton onClick={handleSave} primary>
					Save
				</ContentButton>
			</ContentEnd>
		</>
	);
};

export default Content;
