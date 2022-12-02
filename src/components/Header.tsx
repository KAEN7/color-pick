import React from "react";
import styled from "styled-components";

// todo 카테고리
// todo 업로드

const Header = () => {
	return (
		<HeaderSection>
			<h1>Color Pick</h1>
			<ul>
				{/* <li>t</li>
				<li>e</li>
				<li>s</li>
				<li>t</li> */}
			</ul>
		</HeaderSection>
	);
};

const HeaderSection = styled.header`
	display: flex;
	flex-direction: column;
	position: fixed;
	background: none;
	top: 0;
	left: 0;
	transition: all 0.7s ease-in 0s;
	z-index: 99;
	padding-left: 3rem;
	box-sizing: border-box;

	ul {
		display: none;
		flex-direction: column;
	}

	&:hover {
		ul {
			display: flex;
		}
	}
`;

export default Header;
