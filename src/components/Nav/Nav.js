import React from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./Nav.module.css";

const Nav = () => {
	return (
		<header className={styles.nav}>
			<nav className={styles.nav__header}>
				<ul className={styles.nav__ul}>
					<li className={styles.nav__li}>
						<NavLink exact to="/">
							OmniFood
						</NavLink>
					</li>

					<li className={styles.nav__li}>
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
