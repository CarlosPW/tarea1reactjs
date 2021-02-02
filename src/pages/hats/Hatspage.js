import React from "react";
import Cards from "../../components/cards/Cards";
import "./Hats-page-style.css";
import SHOP_DATA from "../../assets/shop.data";

const collection = SHOP_DATA[0];
const { items } = collection;

export const Hatspage = () => {
	return (
		<div className="animate__animated animate__fadeIn animate__faster">
			<h1 className="title">Hats</h1>
			<div className="container">
				{items.map((item) => {
					return (
						<Cards
							key={item.id}
							imageUrl={item.imageUrl}
							name={item.name}
							price={item.price}
						/>
					);
				})}
			</div>
		</div>
	);
};
