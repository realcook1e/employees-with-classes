import "./search-panel.css";
import { Component } from "react";

class SearchPanel extends Component {
	state = {
		query: "",
	};

	onChange = e => {
		this.setState({ query: e.target.value });
		this.props.onSearch(e.target.value);
	};

	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Найти сотрудника"
				value={this.state.query}
				onChange={this.onChange}
			/>
		);
	}
}

export default SearchPanel;
