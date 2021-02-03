import "./App.css";
import React from "react";
import Menu from "../pages/Menu/Menu";

import Nav from "../components/Nav/Nav";

import OmniFood from "../pages/OmniFood/OmniFood";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
	let routes = (
		<Switch>
			<Route path="/menu" component={Menu} />
			<Route path="/" component={OmniFood} />
		</Switch>
	);

	return (
		<div>
			<Nav />
			{routes}
		</div>
	);
}

export default App;
