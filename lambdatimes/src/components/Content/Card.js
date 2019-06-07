import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card">
			<div className="headline">{/* headline goes here */ props.headline}</div>
			<div className="author">
				<div className="img-container">
					<img src={props.img /* image source goes here */} alt="" />
				</div>
				<span>By {/* author goes here */ props.author}</span>
			</div>
		</div>
	);
};

// Make sure to include PropTypes.
Card.propTypes = {
	headline: PropTypes.string.isRequired,
	tab: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};

export default Card;
