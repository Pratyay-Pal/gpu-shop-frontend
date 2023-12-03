import { useContext } from "react";
import classes from "./ShopCard.module.css";
import { CartContext } from "../../ContextStore/cartContext";

export default function Card({id, title, price, description}) {
  const {onAddToCart} = useContext(CartContext);
  return (
    <>
      <div className={classes.card}>
        <div className={classes.pricingblockcontent}>
          <p className={classes.pricingplan}>{title}</p>
          <div className={classes.pricevalue}>
            <p>${price}</p>
          </div>
        </div>
        <button onClick={() => onAddToCart(id)}>Add to Cart</button>
      </div>
    </>
  );
}
