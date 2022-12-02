import React from "react";
import styled from "styled-components";
import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Palletes from "./components/Palletes";

function App() {
	return (
		<AppSection>
			<Header />
			<Aside />
			<Palletes />
		</AppSection>
	);
}

const AppSection = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`;

export default App;
