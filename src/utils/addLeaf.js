// Used to Change State after Adding a New Reply

const addLeaf = (tree, leaf, parent) => {
	if (parent === null) {
		tree.push(leaf);
		return tree;
	}

	if (tree)
		for (const root of tree) {
			if (root._id === parent) {
				root.children.push(leaf);
				break;
			} else {
				addLeaf(root.children, leaf, parent);
			}
		}
	return tree;
};

export default addLeaf;
