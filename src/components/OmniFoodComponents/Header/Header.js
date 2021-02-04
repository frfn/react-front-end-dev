import React from "react";
import * as styles from "./Header.module.css";
import whiteLogo from "../../../assets/OmniFoodAssets/img/logo-white.png";
import logo from "../../../assets/OmniFoodAssets/img/logo.png";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<nav>
				{/* row is the logo and main nav! */}
				<div className={styles.row}>
					<img
						className={styles.header__whiteLogo}
						src={whiteLogo}
						alt="white logo"
					/>

					{/* not false, should display: none */}
					{false && (
						<img
							className={styles.header__logo}
							src={logo}
							alt="black logo"
						/>
					)}

					<ul className={styles.header__mainNav}>
						<li>
							<a href="#features">Food Delivery</a>
						</li>
						<li>
							<a href="#works">How It Works</a>
						</li>
						<li>
							<a href="#loc">Our Cities</a>
						</li>
						<li>
							<a href="#signup">Sign Up</a>
						</li>
					</ul>

					{/* <a className={styles.header__mobileIcon}>
                    <ion-icon class="mobile-icon" name="menu-outline"></ion-icon>
                    </a> */}
				</div>
			</nav>

			{/* hero text */}
			<div className={styles["header__heroTextBox"]}>
				<h1 className={styles["h1"]}>
					Goodbye junk food.
					<br />
					Hello super healthy meals.
				</h1>

				<a
					className={[
						styles["header__button"],
						styles["header__button--full"],
					].join(" ")}
					href="#signup"
				>
					I'm hungry
				</a>
				<a
					className={[
						styles["header__button"],
						styles["header__button--ghost"],
					].join(" ")}
					href="#features"
				>
					Show me more
				</a>
			</div>
		</header>
	);
};

export default Header;
