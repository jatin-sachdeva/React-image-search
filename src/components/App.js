import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
	state = {
		images: []
	};

	// function to handle searchInput submit in search bar
	onSubmit = async (searchQuery) => {
		console.log(searchQuery);
		const response = await unsplash.get('/search/photos/', {
			params: {
				query: searchQuery
			}
		});
		console.log(response.data.results);
		this.setState({
			images: response.data.results
		});
	};

	render() {
		return (
			<div>
				<SearchBar onSubmit={this.onSubmit} />
				no of images are :{this.state.images.length}
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
export default App;
