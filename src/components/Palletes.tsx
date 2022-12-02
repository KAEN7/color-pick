import React from "react";
import styled from "styled-components";
import { color } from "../style/theme";

const Palletes = () => {
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

	const copyHandler = (color: string) => {
		window.navigator.clipboard.writeText(color);
	};

	return (
		<PalleteSection>
			<svg
				width="47"
				height="38"
				viewBox="0 0 47 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M47 14.0253C47 27.004 26 37.5253 23.5 37.5253C21 37.5253 0 27.004 0 14.0253C0 1.04661 17.5 -8.97468 23.5 12.5253C29 -8.97469 47 1.04661 47 14.0253Z"
					fill="#D9D9D9"
				/>
			</svg>

			{list.map((item, idx) => (
				<Pallete deg={degHandler(idx)} idx={idx}>
					<span className="heart">{item.heart}</span>
					{item.colors.map((paint) => (
						<Paint paint={paint} onClick={() => copyHandler(paint)}>
							<span>{paint.slice(1, paint.length)}</span>
						</Paint>
					))}
				</Pallete>
			))}
		</PalleteSection>
	);
};

const PalleteSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 321px;
	height: 321px;
	border: 1px solid ${color.gray};
	border-radius: 50%;
	position: relative;
	top: -10rem;
	right: -36rem;
	margin: 0;
	padding: 0;
	list-style: none;
	transition: all 0.3s ease-in 0s;

	svg {
		cursor: pointer;
		z-index: 2;
		transition: all 0.4s ease-in 0s;

		path {
			/* fill: ${color.point}; */
		}

		&:hover {
			-webkit-filter: drop-shadow(0px 10px 20px ${color.point});
			filter: drop-shadow(0px 10px 20px ${color.point});

			path {
				fill: ${color.point};
				transition: all 0.4s ease-in 0s;
			}
		}
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

	.heart {
		color: ${color.gray};
	}
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
	transition: all 0.3s ease-in 0s;
	background: ${(props) => props.paint};
	box-shadow: ${(props) => `0px 10px 20px ${props.paint}`};
	cursor: pointer;

	span {
		display: none;
		cursor: pointer;
		font-weight: bold;
	}

	&:hover {
		transform: scale(1.1);
		box-shadow: ${(props) => `0px 15px 20px ${props.paint}`};
		transform: translateY(-7px);

		span {
			display: block;
			position: absolute;
			right: -70px;
			writing-mode: vertical-lr;
			text-orientation: upright;
		}
	}
`;

export default Palletes;
