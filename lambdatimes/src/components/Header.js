import React from "react";
import styled from "styled-components";

const HeaderCSS = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	background-color: #fff;
	border-bottom: 1px solid lightgrey;
	width: 100%;
	height: 120px;
	margin-top: 44px;
	padding-bottom: 15px;
`;

const HeaderH1 = styled.div`
	font-size: 60px;
	font-family: Didot, serif;
	font-weight: bold;
	flex: 8;
	text-align: center;
	color: #000;
`;

const HeaderSpan = styled.div`
	align-self: flex-end;
	font-size: 11px;
	font-weight: bold;
	letter-spacing: 1px;

	${props =>
		props.type === "date"
			? `  margin-left: 25px;
flex: 1;
`
			: null}
	${props =>
		props.type === "temp"
			? `  text-align: right;
margin-right: 25px;
flex: 1;
`
			: null}
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
	return (
		<HeaderCSS>
			<HeaderSpan type="date">SMARCH 32, 2018</HeaderSpan>
			<HeaderH1>Lambda Times</HeaderH1>
			<HeaderSpan type="temp">98°</HeaderSpan>
		</HeaderCSS>
	);

	// return (
	//   <div className="header">
	//     <span className="date">SMARCH 32, 2018</span>
	//     <h1>Lambda Times</h1>
	//     <span className="temp">98°</span>
	//   </div>
	// );
};

export default Header;
