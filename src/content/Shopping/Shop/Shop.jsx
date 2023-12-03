import Product from "../Product/Product";
import classes from "./Shop.module.css";

export default function Shop({ products }) {
  console.log(products)
  return (
    <>
      <div className={classes.shopcontainer}>
        <ol>
          {products.map((product) => (
            <li key={product.gpuid}>
              <Product productItem={product}></Product>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
