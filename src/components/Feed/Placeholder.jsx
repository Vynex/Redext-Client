import React from 'react';
import { Loading, PostContainer, PostSide, PostMain } from './styles';

const Placeholder = () => {
	return (
		<PostContainer>
			<PostSide />

			<PostMain>
				<Loading header />

				<Loading />
			</PostMain>
		</PostContainer>
	);
};

export default Placeholder;
