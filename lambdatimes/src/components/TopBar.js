import React from "react";
import styled from "styled-components";

const TopBarCSS = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	position: fixed;
	height: 44px;
	background-color: #333;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: none;
	align-items: none;
	flex-direction: row;
	color: #fff;
	letter-spacing: 1px;
	padding: 0 10px;
`;

const ContainerLeft = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
`;

const ContainerLeftSpan = styled.span`
	cursor: pointer;
	margin-right: 25%;
	font-weight: bold;
`;

const ContainerCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex: 3;
	font-size: 9px;
`;

const ContainerCenterSpan = styled.span`
	cursor: pointer;
	margin-right: 5%;
	&:last-child {
		margin-right: 0;
	}
	&:hover {
		text-decoration: underline;
	}
`;

const ContainerRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
	font-weight: bold;
`;

const ContainerRightSpan = styled.span`
	cursor: pointer;
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
	return (
		<TopBarCSS>
			<Container>
				<ContainerLeft>
					<ContainerLeftSpan>TOPICS</ContainerLeftSpan>
					<ContainerLeftSpan>SEARCH</ContainerLeftSpan>
				</ContainerLeft>
				<ContainerCenter>
					<ContainerCenterSpan>GENERAL</ContainerCenterSpan>
					<ContainerCenterSpan>BROWNBAG</ContainerCenterSpan>
					<ContainerCenterSpan>RANDOM</ContainerCenterSpan>
					<ContainerCenterSpan>MUSIC</ContainerCenterSpan>
					<ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
				</ContainerCenter>
				<ContainerRight>
					<ContainerRightSpan>LOG IN</ContainerRightSpan>
				</ContainerRight>
			</Container>
		</TopBarCSS>
	);

	// return (
	// 	<div className="top-bar">
	// 		<div className="container">
	// 			<div className="container-left">
	// 				<span>TOPICS</span>
	// 				<span>SEARCH</span>
	// 			</div>
	// 			<div className="container-center">
	// 				<span>GENERAL</span>
	// 				<span>BROWNBAG</span>
	// 				<span>RANDOM</span>
	// 				<span>MUSIC</span>
	// 				<span>ANNOUNCEMENTS</span>
	// 			</div>
	// 			<div className="container-right">
	// 				<span>LOG IN</span>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};

export default TopBar;
