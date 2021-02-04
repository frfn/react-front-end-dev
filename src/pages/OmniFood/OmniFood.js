import React from "react";
import * as styles from "./OmniFood.module.css";

import Header from "../../components/OmniFoodComponents/Header/Header";
import IconsFeatures from "../../components/OmniFoodComponents/IconsFeatures/IconsFeatures";
import PicGrid from "../../components/OmniFoodComponents/PicGrid/PicGrid";

const OmniFood = () => {
	return (
		<div className={styles.main__div}>
			<Header />
			<IconsFeatures />
			<PicGrid />
		</div>
	);
};

export default OmniFood;
