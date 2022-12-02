import React from "react";
import styled from "styled-components";

const ColorBand = () => {
	return (
		<ColorBandBox>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

			<div>
				<button>
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

					<span>1900</span>
				</button>
				<span>ID</span>
			</div>
		</ColorBandBox>
	);
};

const ColorBandBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 17rem;
	height: 10rem;

	background: gray;
`;

export default ColorBand;
