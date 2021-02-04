import React from "react";
import * as styles from "./PicGrid.module.css";

import photo1 from "../../../assets/OmniFoodAssets/img/1.jpg";
import photo2 from "../../../assets/OmniFoodAssets/img/2.jpg";
import photo3 from "../../../assets/OmniFoodAssets/img/3.jpg";
import photo4 from "../../../assets/OmniFoodAssets/img/4.jpg";
import photo5 from "../../../assets/OmniFoodAssets/img/5.jpg";
import photo6 from "../../../assets/OmniFoodAssets/img/6.jpg";
import photo7 from "../../../assets/OmniFoodAssets/img/7.jpg";
import photo8 from "../../../assets/OmniFoodAssets/img/8.jpg";

const PicGrid = () => {
	return (
		<section id="pics" className={styles["section-meals"]}>
			<ul
				className={[styles["meals-showcase"], styles["clearfix"]].join(
					" "
				)}
			>
				<li>
					<figure className={styles["meal-photo"]}>
						<img
							src={photo1}
							alt="Korean bibimbap with egg and vegetables"
						/>
					</figure>
				</li>

				<li>
					<figure className={styles["meal-photo"]}>
						<img
							src={photo2}
							alt="Simple italian pizza with cherry tomatoes"
						/>
					</figure>
				</li>

				<li>
					<figure className={styles["meal-photo"]}>
						<img
							src={photo3}
							alt="Chicken breast steak with vegetables"
						/>
					</figure>
				</li>

				<li>
					<figure className={styles["meal-photo"]}>
						<img src={photo4} alt="Autumn pumpkin soup" />
					</figure>
				</li>
			</ul>

			<ul
				className={[styles["meals-showcase"], styles["clearfix"]].join(
					" "
				)}
			>
				<li>
					<figure className={styles["meal-photo"]}>
						<img
							src={photo5}
							alt="Paleo beef steak with vegetables"
						/>
					</figure>
				</li>

				<li>
					<figure className={styles["meal-photo"]}>
						<img
							src={photo6}
							alt="Healthy baguette with egg and vegetables"
						/>
					</figure>
				</li>

				<li>
					<figure className={styles["meal-photo"]}>
						<img src={photo7} alt="Burger with cheddar and bacon" />
					</figure>
				</li>

				<li>
					<figure className={styles["meal-photo"]}>
						<img
							src={photo8}
							alt="Granola with cherries and strawberries"
						/>
					</figure>
				</li>
			</ul>
		</section>
	);
};

export default PicGrid;
