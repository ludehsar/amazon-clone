import React from "react";
import StarIcon from "@material-ui/icons/Star";

import "./Product.css";

function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p class="product__title">{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <StarIcon className="product__ratingGold" />
            ))}
          {Array(5 - props.rating)
            .fill()
            .map((_) => (
              <StarIcon className="product__ratingWhite" />
            ))}
        </div>
      </div>
      <img src={props.image} alt="Mouse" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
