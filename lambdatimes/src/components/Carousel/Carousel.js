import React, { Component } from "react";
import { carouselData } from "../../data";

// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carouselImg: [],
			counter: 0
		};
	}
	componentDidMount() {
		this.setState({
			carouselImg: carouselData
		});
	}

	leftClick = () => {
		if (this.state.counter > 0) {
			this.state.counter -= 1;
		} else {
			this.state.counter = 4;
		}
	};

	rightClick = () => {
		if (this.state.counter > 0) {
			this.state.counter += 1;
		} else {
			this.state.counter = -1;
		}
	};

	selectedImage = () => {
		return (
			<img
				src={this.state.carouselImg[this.state.counter]}
				style={{ display: "block" }}
			/>
		);
	};

	render() {
		return (
			<div className="carousel">
				<div className="left-button" onClick={this.leftClick}>
					{"<"}
				</div>
				<div className="right-button" onClick={this.rightClick}>
					{">"}
				</div>
			</div>
		);
	}
}
