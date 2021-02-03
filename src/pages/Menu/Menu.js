import React from "react";
import * as styles from "./Menu.module.css";

import FlexCard from "../../components/FlexCard/FlexCard";
import FoodCard from "../../components/FoodCard/FoodCard";
import pizzaImage from "../../assets/pizza.jpg";
import tacosImage from "../../assets/tacos.jpg";
import burgerImage from "../../assets/burger.jpg";

const Menu = (props) => {
	const menu = [
		{
			image: pizzaImage,
			title: "Pizza Vegetale 🍕",
			tags: [
				{ tag: "#vegetarian", color: "food__tag--green" },
				{ tag: "#italian", color: "food__tag--blue" },
			],
			desc:
				"Yummy veggie pizza with tasty olives, crisp peppers, fresh arugula and original italian tomato sauce.",
			calories: { emoji: "🏃🏻‍♂️", desc: "650 calories" },
			time: { emoji: "⏲", desc: "10 min" },
			rating: { emoji: "⭐️", desc: "4.2 / 5" },
			price: "$9.99",
		},
		{
			image: tacosImage,
			title: "Deconstructed Tacos 🧀",
			tags: [
				{ tag: "#protein", color: "food__tag--red" },
				{ tag: "#mexican", color: "food__tag--blue" },
			],
			desc:
				"Delicious chips with a blend of cheeses, guacamole, fresh tomatoes and special house made sauce.",
			calories: { emoji: "🏃🏻‍♂️", desc: "750 calories" },
			time: { emoji: "⏲", desc: "7 min" },
			rating: { emoji: "⭐️", desc: "4.9 / 5" },
			price: "$7.99",
		},
		{
			image: burgerImage,
			title: "Deluxe Burger 🍔",
			tags: [
				{ tag: "#protein", color: "food__tag--red" },
				{ tag: "#american", color: "food__tag--blue" },
			],
			desc:
				"Fresh, angus beef with monterey jack cheese, crisp lettuce, fresh tomatoes and onions, sided with hand cut potato wedges, spiced with cajun.",
			calories: { emoji: "🏃🏻‍♂️", desc: "1150 calories" },
			time: { emoji: "⏲", desc: "15 min" },
			rating: { emoji: "⭐️", desc: "4.6 / 5" },
			price: "$11.99",
		},
	];

	return (
		<div className={styles.div}>
			<FlexCard />
			{menu.map((item) => {
				return (
					<FoodCard
						image={item.image}
						title={item.title}
						tags={item.tags}
						desc={item.desc}
						calories={item.calories}
						time={item.time}
						rating={item.rating}
						price={item.price}
					/>
				);
			})}
		</div>
	);
};

export default Menu;
