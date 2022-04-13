import React from "react";

export default function Listing(props) {
	return (
		<div className="container">
			{props.items.map((i) => (
				<div key={i.listing_id} className="item-list">
					<div className="item">
						<div className="item-image">
							<a href={i.url}>
								<img src={i.MainImage.url_570xN} />
							</a>
						</div>
						<div className="item-details">
							<p className="item-title">
								{i.title.length >= 50
									? i.title.substring(0, 50) + '...'
									: i.title}
							</p>
							<p className="item-price">
								{i.currency_code === 'USD' && '$' + i.price}
								{i.currency_code === 'EUR' && '€' + i.price}
								{i.currency_code === 'USD' || i.currency_code === 'EUR'
									? null
									: i.price + `${''} ${i.currency_code}`}
							</p>
							<p className={
								i.quantity <= 10 && "item-quantity level-low" ||
								i.quantity <= 20 && "item-quantity level-medium" ||
								i.quantity > 20 && "item-quantity level-high"
							}
							>
								{i.quantity} left
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

