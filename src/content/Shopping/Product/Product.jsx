import Card from "../UI/ShopCard/ShopCard";
import classes from "./Product.module.css";

export default function Product({ productItem }) {
  return (
    <>
      <div className={classes.card}>
        <Card
          id={productItem.gpuid}
          title={productItem.gpuname}
          price={productItem.price}
          company={productItem.company}
          imagelink={productItem.s3bucketkey}
        ></Card>
      </div>
    </>
  );
}
