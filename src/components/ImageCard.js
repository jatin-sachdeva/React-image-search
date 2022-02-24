import React from 'react';
class ImageCard extends React.Component {
	constructor(props) {
		super();
	}
	render() {
		const { image } = this.props;
		return <img src={image.urls.regular} alt={image.description} />;
	}
}
export default ImageCard;
