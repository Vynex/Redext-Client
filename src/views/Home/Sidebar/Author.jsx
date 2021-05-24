import React from 'react';
import { AuthorHeader, AuthorLink } from './styles.js';

const Author = () => {
	return (
		<>
			<AuthorHeader>
				<AuthorLink href="http://vynex.github.io">
					Made With ❤ by Kushagra
				</AuthorLink>
			</AuthorHeader>
		</>
	);
};

export default Author;
