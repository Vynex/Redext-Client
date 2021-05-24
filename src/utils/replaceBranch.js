// Used to Change State after Fetching Replies to a Comment

const replaceBranch = (tree, branch, id) => {
	if (tree)
		for (const root of tree) {
			if (root._id === id) {
				root.children = branch;
				break;
			} else {
				replaceBranch(root.children, branch, id);
			}
		}
	return tree;
};

export default replaceBranch;
