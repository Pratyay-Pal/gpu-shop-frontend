import { createPortal } from "react-dom";
import classes from "./CartModal.module.css";
import Cart from "../Cart/Cart";

export default function CartModal({ changeCart }) {
  return createPortal(
    <>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <div className={classes.card}>
            <h1>Items in Cart</h1>
            <Cart/>
            <button className={classes.cartbutton} onClick={changeCart}>Close</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
