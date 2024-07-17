import React from "react";
import MiniFooter from "./minifooter";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
const CartPage = ({
  cart,
  clearCart,
  updateCartItemQuantity,
  removeFromCart,
}) => {
  const navigate = useNavigate();

  const handleQuantityChange = (productId, change) => {
    const product = cart.find((item) => item.id === productId);
    if (product.quantity + change > 0) {
      updateCartItemQuantity(productId, change);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2 className="ch2">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item row  text-center">
              <div className="col-md-3 ">
                <h5>{item.name}</h5>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px" }}
                />
                <br />
                <button
                  className="btn btn-danger btn-no-hover mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
              <div className="col-md-3">
                <p>price</p>
                <p>₦{item.price},000.00</p>
              </div>
              <div className="col-md-3">
                <p>Quantity</p>
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="minusbtn"
                >
                  -
                </button>
                <span className="qty">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="minusbtn"
                >
                  +
                </button>
              </div>
              <div className="col-md-3">
                {" "}
                <p>Subtotal</p>
                <p>₦ {item.price * item.quantity},000.00</p>
              </div>
            </div>
          ))}
          <div className="text-center mt-5">
            <h3>Total: ₦{calculateTotal()},000.00</h3>
            <button onClick={clearCart} className="btn btn-danger ">
              Clear Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="btnc mt-3 "
            >
              Proceed to Pay
            </button>
          </div>
        </>
      )}
      <div className="row m-5">
        <div className="col-md-6 footc">
          <p className="cfp ms-5">TimbuCloud™</p>
        </div>
        <div className="col-md-6 footd">
          {" "}
          <MiniFooter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
