import Product from "../Product/Product";
import classes from "./Shop.module.css";

export default function Shop({ products }) {
  return (
    <>
      <div className={classes.shopcontainer}>
        <ol>
          {products.map((product) => (
            <li key={product.id}>
              <Product productItem={product}></Product>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
