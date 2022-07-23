import "./Cart.css";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__item">
        <h2>Shopping Cart</h2>
        <hr />

        <div className="cart__product">
          <img
            className="cart__productImage"
            src="https://m.media-amazon.com/images/I/71ISIssoVFL._AC_AA360_.jpg"
            alt=""
          />
          <div className="cart__details">
            <p>THis is a waste product from BOAT</p>
            <p>
              <h1>$100</h1>
            </p>
            <div className="cart_shippingInfo">
              <p>Usually dispatched in 2 to 3 weeks.</p>
              <p>Eligible for FREE Shipping</p>
            </div>
            <div className="cart__manageItem">
              <select className="cart__qty" name="Qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <a href="">Delete</a>
            </div>
          </div>
        </div>

        <div className="cart__total">
          <span>
            <h2>Subtotal (1 item) : </h2>
          </span>
          <span>
            <h1> $100</h1>
          </span>
        </div>
      </div>

      <div className="cart__purchase">
        <div className="cart__purchaseTotal">
          <span>
            <h3>Subtotal (1 item) : </h3>
          </span>
          <span>
            <h1> $100</h1>
          </span>
        </div>
        <input
          className="cart__checkoutBtn"
          type="button"
          value="Proceed To Checkout"
        />
      </div>
    </div>
  );
};

export default Cart;
