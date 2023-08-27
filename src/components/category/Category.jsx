import { Link } from "react-router-dom";
import "./category.css";

const Item = ({ name, img}) => {
  
  return (
    <article className="category-card-container">

        <button className='ir'>
        <Link to='/test'>
                <header className="Header">
        <h2 className="ItemHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
          </picture>
        </Link>
        </button>
    </article>
  );
};

export default Item;