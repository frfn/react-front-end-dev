import React from "react";
import * as styles from "./IconsFeatures.module.css";

const IconsFeatures = () => {
	return (
		<section
			id="features"
			className={[
				styles["section-features"],
				styles["js--section-features"],
			].join(" ")}
		>
			<div className={styles["row"]}>
				<h2>Get food fast &mdash; not fast food</h2>

				<p className={styles["long-copy"]}>
					Hello, we're OmniFood, your new premium food delivery
					service. We know you're always busy. No time for cooking. So
					let us take care of that, we're really good at it, we
					promise!
				</p>

				<div className={styles["row"]}>
					<div className={styles["box"]}>
						<ion-icon
							class="icon-big"
							name="infinite-outline"
						></ion-icon>
						<h3>Up to 365 days/year</h3>
						<p>
							Never cook again! We really mean that. Our
							subscription plan include 365 days/year coverage.
							You can also choose to order more flexibly if that's
							your style!
						</p>
					</div>

					<div className={styles["box"]}>
						<ion-icon
							class="icon-big"
							name="stopwatch-outline"
						></ion-icon>
						<h3>Ready in 20 minutes</h3>
						<p>
							You're only twenty minutes away from your delicious
							and super healthy meals delivered right to your
							home. We work with the best chefs in each town to
							ensure that you're 100% happy.
						</p>
					</div>

					<div className={styles["box"]}>
						<ion-icon
							class="icon-big"
							name="nutrition-outline"
						></ion-icon>
						<h3>100% organic</h3>
						<p>
							All our vegetables are fresh, organic and local.
							Animals are raised without added hormones or
							antibiotics. Good for your health, the environment,
							and it also tastes better!
						</p>
					</div>

					<div className={styles["box"]}>
						<ion-icon
							class="icon-big"
							name="cart-outline"
						></ion-icon>
						<h3>Order anything</h3>
						<p>
							We don't limit your creativity, which means you can
							order whatever you feel like. You can also choose
							from our menu containing over 100 delicious meals.
							It's up to you!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IconsFeatures;
