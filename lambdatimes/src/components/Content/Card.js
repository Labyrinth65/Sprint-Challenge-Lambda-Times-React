import React from "react";
import PropTypes from "prop-types";

const Card = ({ headline, img, author }) => {
	return (
		<div className="card">
			<div className="headline">{/* headline goes here */ headline}</div>
			<div className="author">
				<div className="img-container">
					<img src={img /* image source goes here */} alt="" />
				</div>
				<span>By {/* author goes here */ author}</span>
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
