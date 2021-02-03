import React from "react";
import * as styles from "./FoodCard.module.css";

const FoodCard = (props) => {
	return (
		<div className={styles.body}>
			<figure className={styles.food}>
				{/* 1. image */}
				<div className={styles.food__hero}>
					<img
						className={styles.food__img}
						alt={props.title}
						src={props.image}
					/>
				</div>

				{/* 2. content */}
				<div className={styles.food__content}>
					{/* 1. content */}
					<div className={styles.food__title}>
						{/* heading */}
						<h1 className={styles.food__heading}>{props.title}</h1>

						{/* tags */}
						{props.tags.map((tag) => {
							/* css */
							const foodTagCss = [styles.food__tag];

							/* this is how to access the colors */
							foodTagCss.push(styles[tag.color]);

							return (
								<div className={foodTagCss.join(" ")}>
									{tag.tag}
								</div>
							);
						})}
					</div>

					{/* 2. desc */}
					<p className={styles.food__desc}>{props.desc}</p>

					{/* 3. details */}
					<div className={styles.food__details}>
						<p className={styles.food__detail}>
							<span className={styles.emoji}>
								{props.calories.emoji}
							</span>
							{props.calories.desc}
						</p>
						<p className={styles.food__detail}>
							<span className={styles.emoji}>
								{props.time.emoji}
							</span>
							{props.time.desc}
						</p>
						<p className={styles.food__detail}>
							<span className={styles.emoji}>
								{props.rating.emoji}
							</span>
							{props.rating.desc}
						</p>
					</div>
				</div>

				{/* 3. price */}
				<div className={styles.food__price}>{props.price}</div>
			</figure>
		</div>
	);
};

export default FoodCard;
