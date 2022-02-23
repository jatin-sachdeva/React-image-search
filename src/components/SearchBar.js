import React from 'react';
class SearchBar extends React.Component {
	constructor(props) {
		super();
		this.state = {
			searchQuery: ''
		};
	}
	onInputChange = (e) => {
		this.setState({
			searchQuery: e.target.value
		});
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		// pass the searchQuery back to APP
		this.props.onSubmit(this.state.searchQuery);
	};
	render() {
		return (
			<div className="ui-segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Search Image</label>
						<input name="search-field" onChange={this.onInputChange} value={this.state.searchQuery} />
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
