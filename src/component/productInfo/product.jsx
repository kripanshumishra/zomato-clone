import "./product.css";
import { Link } from "react-router-dom";
const Product = ({imageUrl,name,price,productId}) => {
  return (
    <div className="product">
      <img
        src={imageUrl}
        alt="product immage"
      />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          tenetur.
        </p>
        <p>&#x20B9; {price}</p>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};
export default Product