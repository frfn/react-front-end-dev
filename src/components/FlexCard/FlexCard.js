import React from "react";
import * as styles from "./FlexCard.module.css";

const FoodCard = (props) => {
	return (
		<div className={styles.div}>
			<span style={{ color: "black" }}>
				These are test boxes, all under Flexbox properties!
			</span>
			<span
				style={{
					color: "black",
					fontSize: "24px",
					textAlign: "center",
					paddingBottom: "80px",
				}}
			>
				All you need to know are: flex-flow, flex, justify-content,
				align-items!
			</span>
			<div className={styles.div__box}>Hello</div>
			<div className={styles.div__box2}>Hello</div>
			<div className={styles.div__box3}>Hello</div>
			<div className={styles.div__box4}>Hello</div>
		</div>
	);
};

export default FoodCard;
