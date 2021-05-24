import React from 'react';
import { PostContainer, PostMain, PostSide } from '../Posts/styles';
import { Loading } from './styles';

const Placeholder = () => {
	return (
		<PostContainer>
			<PostSide />

			<PostMain>
				<Loading header />
            
				<Loading meta />
				<Loading />
			</PostMain>
		</PostContainer>
	);
};

export default Placeholder;
