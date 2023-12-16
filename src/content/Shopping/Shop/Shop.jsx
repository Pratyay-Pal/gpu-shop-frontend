import Product from "../Product/Product";
import classes from "./Shop.module.css";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../ContextStore/storeContext";
import { GetProductsHTTP } from "../GetProducts/GetProductsHTTP";
import Error from "../Error/Error";

export default function Shop() {
  const storeContext = useContext(StoreContext);
  const [isError, setIsError] = useState();
  useEffect(() => {
    async function getGpuList() {
      try {
        storeContext.updateGpuList(await GetProductsHTTP());
      } catch (error) {
        console.log(error);
        setIsError(error);
      }
    }
    getGpuList();
  }, []);
  if (isError) {
    return <Error title="ERROR" message={isError.message} />;
  }
  
  const products = storeContext.gpuList;
  const isLoading = storeContext.gpuList.length === 0 ? true : false;

  return (
    <>
      {isLoading && (
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          LOADING...
        </h1>
      )}
      {!isLoading && (
        <>
          <div className={classes.shopcontainer}>
            <div className={classes.tableprops}>
              {products.map((product) => (
                <div key={product.gpuid}>
                  <Product productItem={product}></Product>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
