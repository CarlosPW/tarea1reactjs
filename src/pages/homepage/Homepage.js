import React from "react";
import HomepageCards from "../../components/homepage-cards/HomepageCards";
import "./homepage-style.css";

import { Link } from "react-router-dom";

import SHOP_DATA from "./../../assets/shop.data";

const collection = SHOP_DATA;

export const Homepage = () => {
	return (
		<>
			<div className="container-homepage animate__animated animate__fadeIn animate__faster">
				<Link to="/Hatspage" style={{ textDecoration: "none" }}>
					<HomepageCards
						title={collection[0].title}
						imageUrl={collection[0].items[0].imageUrl}
					/>
				</Link>

				<Link to="/Sneakerspage" style={{ textDecoration: "none" }}>
					<HomepageCards
						title={collection[1].title}
						imageUrl={collection[1].items[0].imageUrl}
					/>
				</Link>
			</div>
		</>
	);
};
