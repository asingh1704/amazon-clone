import "./Product.css";

const Product = ({ id, title, price, rating, image }) => {
  return (
    <div className="product">
      <p>{title}</p>
      <p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <img
                  className="product__ratingIcon"
                  src="images/starIcon.png"
                />
              </p>
            ))}
        </div>

        <img
          className="product__img"
          src="https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY327_FMwebp_QL65_.jpg"
          alt=""
        />
        <input className="product__addbtn" type="button" value="Add to cart" />
      </p>
    </div>
  );
};

export default Product;
