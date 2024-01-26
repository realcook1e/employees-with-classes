import "./app-filter.css";

function AppFilter({ onFilterChange, filter }) {
	const filterButtons = [
		{ name: "all", label: "Все сотрудники" },
		{ name: "to-rise", label: "На повышение" },
		{ name: "over-thousand", label: "З/п больше 1000$" },
	];

	const buttons = filterButtons.map(({ name, label }) => {
		const buttonClass = filter === name ? "btn btn-light" : "btn btn-outline-light";
		return (
			<button
				key={name}
				className={buttonClass}
				type="button"
				onClick={() => onFilterChange(name)}
			>
				{label}
			</button>
		);
	});
	return <div className="btn-group">{buttons}</div>;
}

export default AppFilter;
