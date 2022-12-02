import React from "react";
import styled from "styled-components";
import { color } from "../style/theme";
import ColorBand from "./ColorBand";

const Aside = () => {
	return (
		<AsideSection>
			<nav>
				<span>new</span>
				<span>popular</span>
				<span>collection</span>
			</nav>

			<ListBox>
				<ColorBand />
				<ColorBand />
				<ColorBand />
			</ListBox>
		</AsideSection>
	);
};

const AsideSection = styled.aside`
	display: flex;
	flex-direction: column;
	width: 40rem;
	height: 90%;
	position: absolute;
	left: 0;
	bottom: 0;
	border-right: 0.5px solid ${color.gray};
`;

const ListBox = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export default Aside;
