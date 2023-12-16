import CartModal from "./CartModal/CartModal";
import Shop from "./Shop/Shop";
import classes from "./Shopping.module.css";
import { useState } from "react";
import StoreContextProvider from "./ContextStore/storeContext";

export default function Shopping() {
  const [showCart, setShowCart] = useState(false);

  const changeCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <StoreContextProvider>
        {showCart && <CartModal changeCart={changeCart} />}
        <div className={classes.shoppingbg}>
          <div className={classes.mainheader}>
            <h1>&nbsp;Buy Something&nbsp;</h1>
            <button onClick={changeCart}>
              <span>&nbsp;CART&nbsp;</span>
              <span aria-hidden="true" className={classes.hovertext}>
                &nbsp;CART&nbsp;
              </span>
            </button>
          </div>
          <Shop/>
        </div>
      </StoreContextProvider>
    </>
  );
}
