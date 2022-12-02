import React from "react";
import styled from "styled-components";
import "./App.css";

function App() {
	const list = [
		{ heart: 120, colors: ["#453C67", "#6D67E4", "#46C2CB", "#F2F7A1"] },
		{ heart: 120, colors: ["#E8F3D6", "#FCF9BE", "#FFDCA9", "#FAAB78"] },
		{ heart: 120, colors: ["#2D033B", "#810CA8", "#C147E9", "#E5B8F4"] },
		{ heart: 120, colors: ["#10A19D", "#540375", "#FF7000", "#FFBF00"] },
		{ heart: 120, colors: ["#453C67", "#6D67E4", "#46C2CB", "#F2F7A1"] },
		{ heart: 120, colors: ["#2B3A55", "#CE7777", "#E8C4C4", "#F2E5E5"] },
		{ heart: 120, colors: ["#3F0071", "#FB2576", "#332FD0", "#0002A1"] },
		{ heart: 120, colors: ["#FEFCF3", "#F5EBE0", "#F0DBDB", "#DBA39A"] },
	];

	const degHandler = (index: number) => {
		return 45 * index;
	};

	return (
		<AppSection>
			<div className="wrapper">
				<span>HEART</span>
				{list.map((item, idx) => (
					<Pallete deg={degHandler(idx)} idx={idx}>
						{item.heart}
						{item.colors.map((paint) => (
							<Paint paint={paint}></Paint>
						))}
					</Pallete>
				))}
			</div>
		</AppSection>
	);
}

const AppSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	overflow: hidden;

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 321px;
		height: 321px;
		border: 2px solid #efefef;
		border-radius: 50%;
		position: relative;
		top: -10rem;
		right: -36rem;
		margin: 0;
		padding: 0;
		list-style: none;
		transition: all 0.3s ease-in 0s;
	}
`;

interface IPallete {
	deg: number;
	idx: number;
}

const Pallete = styled.ul<IPallete>`
	display: block;
	position: absolute;
	width: 70px;
	text-align: center;
	line-height: 100px;
	padding: 0;
	padding-top: 14rem;

	transform: ${(props) =>
		`rotate(${props.deg}deg) translate(251px) rotate(-${
			props.deg - 45 * (props.idx - 2)
		}deg)`};
`;

interface IPaint {
	paint: string;
}

const Paint = styled.li<IPaint>`
	list-style-type: none;
	width: 100%;
	height: 120px;
	border-radius: 13px;
	margin-bottom: 15px;
	transition: all 0.1s ease-in 0s;
	background: ${(props) => props.paint};
	box-shadow: ${(props) => `0px 10px 20px ${props.paint}`};

	&:hover {
		transform: scale(1.1);
		box-shadow: ${(props) => `0px 15px 20px ${props.paint}`};
		transform: translateY(7px);
	}
`;

export default App;
