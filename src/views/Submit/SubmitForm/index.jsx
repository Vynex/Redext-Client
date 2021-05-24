import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addPost } from '../../../reducers/postReducer.js';
import { setNotification } from '../../../reducers/notificationReducer.js';

import { RiArrowDownSFill, RiMessage2Line, RiImage2Line } from 'react-icons/ri';
import {
	SubmitHeader,
	SubmitSelect,
	FormContainer,
	SubmitSub,
	SubmitOption,
	SubmitSelector,
	SubmitType,
	SubmitTab,
	SubmitMain,
	SubmitTitle,
	SubmitContent,
	SubmitButtons,
	SubmitButton,
	SubmitContainer,
	SubmitError,
} from './styles';

const SubmitForm = ({ link = null }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const ref = useRef();

	const formik = useFormik({
		initialValues: {
			title: '',
			content: '',
		},

		validationSchema: Yup.object({
			title: Yup.string()
				.min(5, 'Title must be greater than 5 characters.')
				.max(150, 'Title must be lesser than 150 characters.')
				.required('Title is Required'),

			content: Yup.string()
				.min(5, 'Content must be greater than 5 characters.')
				.max(3000, 'Content must be lesser than 3000 characters.')
				.required('Content is Required'),
		}),

		onSubmit: (values) => {
			handleSubmit(values.title, values.content);
		},
	});

	const subscribed = useSelector(({ subscribed }) => subscribed);

	const [sub, setSub] = useState(link);
	const [isSelectActive, setIsSelectActive] = useState(false);

	useEffect(() => {
		setSub(link);
	}, [link]);

	useEffect(() => {
		const handleBodyClick = (e) => {
			if (ref.current && ref.current.contains(e.target)) return;
			setIsSelectActive(false);
		};

		document.addEventListener('click', handleBodyClick);
	}, []);

	const handleSubmit = async (title, content) => {
		const post = { title, content };
		const notification = {};

		try {
			await dispatch(addPost(sub._id, post));

			notification.type = 'success';
			notification.message = 'Successfully Submitted Post';
		} catch (e) {
			notification.type = 'error';
			notification.message = 'An Error Occured!';
		}

		dispatch(setNotification(notification));

		if (notification.type === 'success') history.push(`/r/${sub.title}`);
	};

	const toggleVisible = () => setIsSelectActive((prevState) => !prevState);

	return (
		<SubmitContainer>
			<SubmitHeader>Create a Post</SubmitHeader>

			<SubmitSub>
				<SubmitSelector
					active={isSelectActive}
					onClick={toggleVisible}
					ref={ref}
				>
					<span className="sub-text">r/{sub && sub.title}</span>
					<span className="sub-icon">
						<RiArrowDownSFill />
					</span>
				</SubmitSelector>

				<SubmitSelect visible={isSelectActive}>
					{subscribed.map((sub) => (
						<SubmitOption
							key={sub._id}
							value={sub._id}
							onClick={() => setSub(sub)}
							to={`/r/${sub.title}/submit`}
						>
							r/{sub.title}
							<span style={{ color: '#818384', fontSize: '0.8rem' }}>
								{sub.members.length} members
							</span>
						</SubmitOption>
					))}
				</SubmitSelect>
			</SubmitSub>

			<FormContainer>
				<SubmitType>
					<SubmitTab active>
						<RiMessage2Line />
						Text
					</SubmitTab>

					<SubmitTab disabled>
						<RiImage2Line />
						Media
					</SubmitTab>
				</SubmitType>

				<SubmitMain>
					<form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
						<SubmitTitle
							name="title"
							placeholder="Title"
							value={formik.values.title}
							onChange={formik.handleChange}
						/>
						{formik.touched.title && formik.errors.title ? (
							<SubmitError>{formik.errors.title}</SubmitError>
						) : null}

						<SubmitContent
							name="content"
							placeholder="Content"
							value={formik.values.content}
							onChange={formik.handleChange}
							maxLength="3000"
						/>
						{formik.touched.content && formik.errors.content ? (
							<SubmitError>{formik.errors.content}</SubmitError>
						) : null}

						<SubmitButtons>
							<SubmitButton type="submit" disabled={sub === null}>
								Post
							</SubmitButton>
						</SubmitButtons>
					</form>
				</SubmitMain>
			</FormContainer>
		</SubmitContainer>
	);
};

export default SubmitForm;
