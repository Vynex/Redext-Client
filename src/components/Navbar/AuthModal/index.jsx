import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { loginUser, registerUser } from '../../../reducers/userReducer.js';
import { setNotification } from '../../../reducers/notificationReducer.js';
import { RiCloseFill } from 'react-icons/ri';
import {
	Modal,
	ModalClose,
	ModalEnd,
	ModalError,
	ModalForm,
	ModalInput,
	ModalLink,
	ModalMain,
	ModalOverlay,
	ModalSide,
	ModalSubmit,
	ModalSubtitle,
	ModalTitle,
} from './styles.js';

const AuthModal = ({ action, handleClose, handleSwitch }) => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},

		validationSchema: Yup.object({
			username: Yup.string()
				.min(5, 'Username must be greater than 5 characters.')
				.max(20, 'Username must be lesser than 20 characters.')
				.required('Username is Required'),

			password: Yup.string()
				.min(6, 'Password must be greater than 6 characters.')
				.max(32, 'Password must be lesser than 32 characters.')
				.required('Password is Required'),
		}),

		onSubmit: (values) => {
			handleSubmit(values.username, values.password);
		},
	});

	const handleSubmit = async (username, password) => {
		const credentials = { username, password };
		const notification = {};

		try {
			if (action === 'Login') {
				await dispatch(loginUser(credentials));

				notification.type = 'success';
				notification.message = 'Successfully Logged In!';
			}
			if (action === 'Register') {
				await dispatch(registerUser(credentials));

				notification.type = 'success';
				notification.message = 'Successfully Signed Up!';
			}
		} catch (e) {
			notification.type = 'error';
			notification.message = 'Invalid Username or Password';
		}

		dispatch(setNotification(notification));

		if (notification.type === 'success') handleClose();
	};

	const escFunction = useCallback(
		(event) => {
			if (event.keyCode === 27) handleClose();
		},
		[handleClose]
	);

	useEffect(() => {
		document.addEventListener('keydown', escFunction, false);

		return () => {
			document.removeEventListener('keydown', escFunction, false);
		};
	}, [escFunction]);

	return (
		<>
			<Modal>
				<ModalSide />

				<ModalMain>
					<ModalTitle>{action}</ModalTitle>
					<ModalSubtitle>
						By continuing, you agree to our User Agreement and Privacy
						Policy.
					</ModalSubtitle>

					<ModalForm onSubmit={formik.handleSubmit}>
						<ModalInput
							name="username"
							type="text"
							placeholder="Username"
							onChange={formik.handleChange}
							value={formik.values.username}
						/>
						{formik.touched.username && formik.errors.username ? (
							<ModalError>{formik.errors.username}</ModalError>
						) : null}

						<ModalInput
							name="password"
							type="password"
							placeholder="Password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						{formik.touched.password && formik.errors.password ? (
							<ModalError>{formik.errors.password}</ModalError>
						) : null}

						{action === 'Login' ? (
							<ModalSubmit type="submit">Log In</ModalSubmit>
						) : (
							<ModalSubmit type="submit">Sign Up</ModalSubmit>
						)}
					</ModalForm>

					{action === 'Login' ? (
						<ModalEnd>
							New to Redext?{' '}
							<ModalLink onClick={handleSwitch}>Sign Up</ModalLink>
						</ModalEnd>
					) : (
						<ModalEnd>
							Already a Redextor?{' '}
							<ModalLink onClick={handleSwitch}>Log In</ModalLink>
						</ModalEnd>
					)}
				</ModalMain>

				<ModalClose onClick={handleClose}>
					<RiCloseFill />
				</ModalClose>
			</Modal>

			<ModalOverlay onClick={handleClose} />
		</>
	);
};

export default AuthModal;
