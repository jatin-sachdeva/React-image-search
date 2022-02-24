import React from 'react';
import ImageCard from './ImageCard';
import './imagecard.css';
const ImageList = (props) => {
	const images = props.images.map((image) => {
		return <ImageCard image={image} key={image.id} />;
	});

	return <div className="imagecard-container">{images}</div>;
};
export default ImageList;
