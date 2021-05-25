import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../../reducers/commentReducer';
import {
	ModalAction,
	ModalButton,
	ModalContainer,
	ModalContent,
	ModalTitle,
} from '../styles';

const DeleteModal = ({ visible, cID, handleClose }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		handleClose();
		dispatch(deleteComment(cID));
	};

	return (
		<ModalContainer visible={visible}>
			<ModalTitle>Delete Comment</ModalTitle>

			<ModalContent>
				Are you sure you want to delete your comment?
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
