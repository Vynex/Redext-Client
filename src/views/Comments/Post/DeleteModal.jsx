import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../reducers/postReducer';
import {
	ModalAction,
	ModalButton,
	ModalContainer,
	ModalContent,
	ModalTitle,
} from '../styles';

const DeleteModal = ({ visible, pID, handleClose }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		handleClose();
		dispatch(deletePost(pID));
	};

	return (
		<ModalContainer visible={visible}>
			<ModalTitle>Delete Post</ModalTitle>

			<ModalContent>
				Are you sure you want to delete your post?
			</ModalContent>

			<ModalAction>
				<ModalButton onClick={handleDelete} primary>
					Delete
				</ModalButton>
				<ModalButton onClick={handleClose}>Keep</ModalButton>
			</ModalAction>
		</ModalContainer>
	);
};

export default DeleteModal;
