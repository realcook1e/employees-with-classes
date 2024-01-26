import { Component } from "react";

import { getMaxId } from "../../utils";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John S.", salary: 3000, increase: false, rise: true, id: 1 },
				{ name: "Ivan L.", salary: 5500, increase: true, rise: false, id: 2 },
				{ name: "Elena M.", salary: 400, increase: false, rise: false, id: 3 },
			],
			search: "",
			filter: "all",
		};
	}

	onDelete = id => {
		this.setState(({ data }) => ({
			data: data.filter(item => item.id !== id),
		}));
	};

	onAdd = (name, salary) => {
		const newItem = {
			name: name,
			salary: salary,
			increase: false,
			rise: false,
			id: getMaxId(this.state.data) + 1,
		};

		this.setState(({ data }) => ({
			data: [...data, newItem],
		}));
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	onSearch = query => {
		this.setState({ search: query });
	};

	searchEmp = (items, search) => {
		if (!search.length) {
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(search) > -1;
		});
	};

	onFilterChange = filter => {
		this.setState({ filter });
	};

	filterEmp = (items, filter) => {
		if (filter === "to-rise") {
			return items.filter(item => item.rise);
		} else if (filter === "over-thousand") {
			return items.filter(item => item.salary > 1000);
		} else {
			return items;
		}
	};

	render() {
		const { data, search, filter } = this.state;
		const employeesTotal = this.state.data.length;
		const employeesIncreased = this.state.data.reduce((acc, currItem) => {
			if (currItem.increase) {
				acc++;
			}
			return acc;
		}, 0);
		const visibleData = this.filterEmp(this.searchEmp(data, search), filter);

		return (
			<div className="app">
				<AppInfo
					employeesTotal={employeesTotal}
					employeesIncreased={employeesIncreased}
				/>

				<div className="search-panel">
					<SearchPanel onSearch={this.onSearch} />
					<AppFilter
						onFilterChange={this.onFilterChange}
						filter={this.state.filter}
					/>
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.onDelete}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.onAdd} />
			</div>
		);
	}
}

export default App;
