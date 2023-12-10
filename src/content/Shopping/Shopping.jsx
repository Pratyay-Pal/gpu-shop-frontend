import CartModal from "./CartModal/CartModal";
import Shop from "./Shop/Shop";
import classes from "./Shopping.module.css";
import { DUMMY_PRODUCTS } from "./dummy_products";
import axios from "axios";
import CartContextProvider from "./ContextStore/cartContext";
import { useState, useEffect } from "react";
import GetProductsHTTP from "./GetProducts/GetProductsHTTP";
import Error from "./Error/Error";

export default function Shopping() {
  const [showCart, setShowCart] = useState(false);
  const [gpuList, setGpuList] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
      axios.get("http://localhost:8080/shop/getAllGpus").then((response) => {        
        if (response.ok) {
          setIsError(true)
          throw new Error("Unable to fetch data from backend")          
        }
        setGpuList(response.data.gpulist);        
      }).catch((error) => {
        setIsError(error)
      });
    
  }, []);

  const changeCart = () => {
    setShowCart(!showCart);
  };

  if(isError){
    return <Error title="ERROR" message={isError.message}/>
  }

  return (
    <>
      <CartContextProvider>
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
          <Shop
            isLoading={gpuList.length === 0 ? true : false}
            products={gpuList}
          ></Shop>
        </div>
      </CartContextProvider>
    </>
  );
}
