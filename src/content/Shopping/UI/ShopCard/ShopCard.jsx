import { useContext } from "react";
import classes from "./ShopCard.module.css";
import { StoreContext } from "../../ContextStore/storeContext";

export default function Card({ id, title, price, company, imagelink }) {
  const { onAddToCart } = useContext(StoreContext);
  return (
    <>
      <div className={classes.card}>
        <div className={classes.pricingblockcontent}>
          <img
            src={`https://gpu-shop-frontend-images.s3.amazonaws.com/${imagelink}`}
          ></img>
          <p className={classes.pricingplan}>{title}</p>
          <div className={classes.pricevalue}>
          <p>{company}</p>
            <p>${price}</p>
          </div>
        </div>
        <button onClick={() => onAddToCart(id)}>Add to Cart</button>
      </div>
    </>
  );
}
