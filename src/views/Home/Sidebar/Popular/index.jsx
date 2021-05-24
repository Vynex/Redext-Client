import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import Subredext from './Subredext.jsx';
import { setPopular } from '../../../../reducers/popularReducer.js';
import {
	PopularEnd,
	PopularHeader,
	PopularMain,
	PopularSwitch,
} from './styles.js';

const Popular = ({ isLogged }) => {
	const dispatch = useDispatch();

	const popularSubs = useSelector(({ popular }) => popular);
	const subscribed = useSelector(({ subscribed }) => subscribed);
	const subscribedIds = subscribed.map((sub) => sub._id);

	const [page, setPage] = useState(0);
	const [hasBack, setHasBack] = useState(false);
	const [hasForward, setHasForward] = useState(false);

	useEffect(() => {
		dispatch(setPopular(page));
	}, [dispatch, page]);

	useEffect(() => {
		if (popularSubs.count > 5) setHasForward(true);
	}, [popularSubs.count]);

	const handlePageChange = (dir) => {
		if (dir === -1 && hasBack) {
			if (page === 1) setHasBack(false);

			setPage((prevPage) => prevPage - 1);
			setHasForward(true);
		}

		if (dir === 1 && hasForward) {
			setPage((prevPage) => prevPage + 1);
			setHasBack(true);

			const current = (page + 2) * 5;
			if (current >= popularSubs.count) setHasForward(false);
		}
	};

	return (
		<>
			<PopularHeader>Top Communities</PopularHeader>

			<PopularMain>
				{popularSubs.data.map((sub) => (
					<Subredext
						key={sub._id}
						sub={sub}
						isSubbed={subscribedIds.includes(sub._id)}
						isLogged={isLogged}
					/>
				))}
			</PopularMain>

			<PopularEnd>
				<PopularSwitch disabled={!hasBack}>
					<RiArrowLeftLine onClick={() => handlePageChange(-1)} />
				</PopularSwitch>
				<PopularSwitch disabled={!hasForward}>
					<RiArrowRightLine onClick={() => handlePageChange(1)} />
				</PopularSwitch>
			</PopularEnd>
		</>
	);
};

export default Popular;
