import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink exact to="/">
							OmniFood
						</NavLink>
					</li>

					<li>
						<NavLink exact to="/menu">
							Menu
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Nav;
