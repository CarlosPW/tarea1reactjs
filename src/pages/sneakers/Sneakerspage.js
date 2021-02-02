import React from "react";
import Cards from "../../components/cards/Cards";
import "../hats/Hats-page-style.css";
import SHOP_DATA from "../../assets/shop.data";

const collection = SHOP_DATA[1];
const { items } = collection;

export const Sneakerspage = () => {
	return (
		<div className="animate__animated animate__fadeIn animate__faster">
			<h1 className="title">Sneakers</h1>
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
