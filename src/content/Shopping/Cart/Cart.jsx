import classes from "./Cart.module.css";
import { useContext } from "react";
import { StoreContext } from "../ContextStore/storeContext";

export default function Cart() {
  const storeContext = useContext(StoreContext);

  const calcEach = (price, quantity) => {
    return price * quantity;
  };

  const calcTotal = () => {
    let sum = 0;
    storeContext.items.forEach((item) => {
      sum = sum + item.price * item.quantity;
    });
    return sum;
  };

  return (
    <>
      {storeContext.items.length === 0 ? (
        <h1>Cart is empty. Buy something.</h1>
      ) : (
        storeContext.items.map((item) => (
          <div key = {item.id} className={classes.cardcontainer}>
            <div className={classes.card}>
              <div className={classes.cardblock}>
                <span>Name</span>
                <h2>{item.name}</h2>
              </div>
              <div className={classes.cardblock}>
                <span>Price</span>
                <h2>{item.price}</h2>
              </div>
              <div className={classes.cardblock}>
                <span>Quantity</span>
                <h2>{item.quantity}</h2>
              </div>
            </div>
            <button className={classes.changeqtybutton} onClick={() => storeContext.onChangeQuantity(item.id, "-")}>-</button>
            <div className={classes.quantitybutton}>
              <h2>{item.quantity}</h2>
            </div>
            <button className={classes.changeqtybutton} onClick={() => storeContext.onChangeQuantity(item.id, "+")}>+</button>
            <div className={classes.cardblock}>
                <span>Total</span>
                <h2>{calcEach(item.price, item.quantity)}</h2>
              </div>
          </div>
        ))
      )}
      <div className={classes.totalSum}>
        <p>Total : {calcTotal()}</p>
      </div>
    </>
  );
}
