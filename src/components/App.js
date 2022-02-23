import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
	// function to handle searchInput submit in search bar
	onSubmit(searchQuery) {
		console.log(searchQuery);
	}

	render() {
		return (
			<div>
				<SearchBar onSubmit={this.onSubmit} />
			</div>
		);
	}
}
export default App;
