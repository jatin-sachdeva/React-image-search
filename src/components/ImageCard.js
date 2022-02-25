import React from 'react';
class ImageCard extends React.Component {
	constructor(props) {
		super();
		this.imageRef = React.createRef();
		// state variable for getting no of spans
		this.state = {
			spanCount: 0
		};
	}

	//**dont use DidMount to get vakues from ref's */
	// componentDidMount() {
	// 	console.log(this.imageRef);
	//     console.log(this.imageRef.current.clientHeight); // gives 0
	//     // cant fetch the image eight in didMount functio because it is too soon to fetch the
	//     // height as u are trying to fecth height at very next instant
	// }

	// add an eventListener to imageRef that will be called when imae are actually loaded
	// and added to DOM
	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpan);
	}
	setSpan = () => {
		const height = this.imageRef.current.clientHeight;
		console.log(height);
		// span = no of cells
		// no of spans covered will be imageHeight/cellHeight
		this.setState({
			spanCount: Math.ceil(height / 10)
		});
	};

	render() {
		const { image } = this.props;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spanCount}` }}>
				<img ref={this.imageRef} src={image.urls.regular} alt={image.description} />
			</div>
		);
	}
}
export default ImageCard;
