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
			this.setState(prevState => ({
				counter: prevState.counter - 1
			}));
		} else {
			this.setState({
				counter: 3
			});
		}
	};

	rightClick = () => {
		if (this.state.counter < 3) {
			this.setState(prevState => ({
				counter: prevState.counter + 1
			}));
		} else {
			this.setState({
				counter: 0
			});
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
				<div>{this.selectedImage()}</div>
				<div className="right-button" onClick={this.rightClick}>
					{">"}
				</div>
			</div>
		);
	}
}
