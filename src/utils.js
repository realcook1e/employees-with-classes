function getMaxId(list) {
	let maxId = 0;

	list.forEach(item => {
		if (item.id > maxId) {
			maxId = item.id;
		}
	});

	return maxId;
}

export { getMaxId };
