import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { setNotification } from '../../reducers/notificationReducer.js';
import { newSubredext } from '../../reducers/subredextReducer.js';
import { Main } from '../styles.js';
import {
	SideBanner,
	SubmitHeader,
	SubmitLabel,
	SubmitMain,
	SubmitForm,
	SubmitSubtext,
	SubmitInput,
	SubmitTextArea,
	SubmitButtonContainer,
	SubmitButton,
	SubmitError,
} from './styles.js';

const Submit = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
		},

		validationSchema: Yup.object({
			title: Yup.string()
				.min(2, 'Title must be at least 3 characters long.')
				.max(21, 'Title must be less than 21 characters long.')
				.matches(/^[aA-zZ]+$/, 'Subredext Title can only contain Letters.')
				.required('Title is Required'),

			description: Yup.string()
				.min(5, 'Decription must be more than 5 characters long.')
				.max(500, 'Description must be less than 500 characters long.')
				.required('Description is Required'),
		}),

		onSubmit: (values) => {
			handleSubmit(values.title, values.description);
		},
	});

	useEffect(() => {
		document.title = 'Create a Community';
	}, []);

	const handleSubmit = async (title, description) => {
		const notification = {};

		try {
			await dispatch(newSubredext({ title, description }));

			notification.type = 'success';
			notification.message = 'Successfully Created Subredext';
		} catch (e) {
			notification.type = 'error';
			notification.message = 'An Error Occured!';
		}

		dispatch(setNotification(notification));

		if (notification.type === 'success') history.push(`/r/${title}`);
	};

	return (
		<Main noPadding>
			<SideBanner />

			<SubmitMain>
				<SubmitHeader>Create a Community</SubmitHeader>

				<SubmitForm onSubmit={formik.handleSubmit}>
					<SubmitLabel>Title*</SubmitLabel>
					<SubmitSubtext>
						Community names including capitalization cannot be changed.
					</SubmitSubtext>
					<SubmitInput
						name="title"
						value={formik.values.title}
						onChange={formik.handleChange}
					/>
					{formik.touched.title && formik.errors.title ? (
						<SubmitError>{formik.errors.title}</SubmitError>
					) : null}

					<SubmitLabel>Description*</SubmitLabel>
					<SubmitSubtext>
						This is how new members come to understand your community.
					</SubmitSubtext>
					<SubmitTextArea
						name="description"
						value={formik.values.description}
						onChange={formik.handleChange}
						maxLength="500"
					/>
					{formik.touched.description && formik.errors.description ? (
						<SubmitError>{formik.errors.description}</SubmitError>
					) : null}

					<SubmitButtonContainer>
						<SubmitButton type="submit">Create Community</SubmitButton>
					</SubmitButtonContainer>
				</SubmitForm>
			</SubmitMain>
		</Main>
	);
};

export default Submit;
