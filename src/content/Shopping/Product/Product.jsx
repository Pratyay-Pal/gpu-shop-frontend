import Card from '../UI/ShopCard/ShopCard';
import classes from './Product.module.css'

export default function Product({productItem}){
    return(<>
    <Card id={productItem.id} title={productItem.title} price={productItem.price} description={productItem.description}></Card>
    </>);
}