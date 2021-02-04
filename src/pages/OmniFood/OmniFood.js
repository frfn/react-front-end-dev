import React from "react";
import * as styles from "./OmniFood.module.css";

import Header from "../../components/OmniFoodComponents/Header/Header";

const OmniFood = () => {
	return (
		<div className={styles.main__div}>
			<Header />
		</div>
	);
};

export default OmniFood;
