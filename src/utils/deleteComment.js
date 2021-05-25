// Used to Change State after Deleting a Comment

const replaceLeaf = (tree, deleted) => {
	if (tree) {
		for (let comment of tree) {
			if (comment._id === deleted._id) {
				comment.deleted = true;
				comment.owner = null;
				comment.content = '[deleted]';

				break;
			} else replaceLeaf(comment.children, deleted);
		}
	}

	return tree;
};

export default replaceLeaf;
