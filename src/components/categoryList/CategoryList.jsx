import Category from "../category/Category";
import './categoryList.css';

const ItemList = ( {products} ) => {
  return (
    <div className="ListGroup">
      {products.map(prod => <Category key={prod.id}{...prod}/>)}
    </div>
  )
};

export default ItemList;
