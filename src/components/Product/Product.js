import React from "react";
import StarIcon from "@material-ui/icons/Star";

import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, uid) => (
              <StarIcon key={uid} className="product__ratingGold" />
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, uid) => (
              <StarIcon key={uid} className="product__ratingWhite" />
            ))}
        </div>
      </div>
      <img src={image} alt="Mouse" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
