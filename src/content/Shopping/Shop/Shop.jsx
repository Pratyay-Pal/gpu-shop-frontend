import Product from "../Product/Product";
import classes from "./Shop.module.css";

export default function Shop({ products }) {
  console.log(products);
  return (
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
  );
}
