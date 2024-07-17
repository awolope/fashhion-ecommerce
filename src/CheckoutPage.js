import React, { useState } from "react";
import Footer from "./footer";
import MiniFooter from "./minifooter";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Checkout.css";
const CheckoutPage = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setDeliveryDetails({ ...deliveryDetails, phone: value });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Please add something to your cart.");

      return;
    }
    sendOrderDetails();
    clearCart();
    setOrderPlaced(true);
    navigate("/thank-you");
  };

  const sendOrderDetails = () => {
    const orderDetails = cart
      .map((item) => `${item.name} - ${item.quantity} x $${item.price}`)
      .join(", ");

    const formDataToSubmit = {
      name: deliveryDetails.name,
      address: deliveryDetails.address,
      city: deliveryDetails.city,
      zip: deliveryDetails.zip,
      phone: deliveryDetails.phone,
      order: orderDetails,
      total: calculateTotal(),
    };

    const formToSubmit = new FormData();
    Object.entries(formDataToSubmit).forEach(([key, value]) => {
      formToSubmit.append(key, value);
    });

    fetch("https://formspree.io/f/mgvwvdza", {
      method: "POST",
      body: formToSubmit,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
        } else {
          alert("Error submitting order. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
        alert("Error submitting order. Please try again.");
      });
  };

  return (
    <div className="checkout-page container mt-5">
      <h2 className="h2ch">Checkout</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col-md-6">
            <h3>Delivery Details</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={deliveryDetails.name}
                onChange={handleDeliveryChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={deliveryDetails.address}
                onChange={handleDeliveryChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={deliveryDetails.city}
                onChange={handleDeliveryChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="zip" className="form-label">
                ZIP Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                value={deliveryDetails.zip}
                onChange={handleDeliveryChange}
                required
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <PhoneInput
                country={"ng"}
                value={deliveryDetails.phone}
                onChange={handlePhoneChange}
                inputClass="form-control"
                containerClass="mb-3"
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <h3 className="mb-3">Order Summary</h3>
            <ul className="list-group mb-3">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                >
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">
                      Quantity: {item.quantity}
                    </small>
                  </div>
                  <span className="text-muted">
                    ₦{item.price * item.quantity},000.00
                  </span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (NGN)</span>
                <strong>{calculateTotal()} ,000.00</strong>
              </li>
            </ul>
            <h3 className="mt-3">
              <strong>Payment Details</strong>
            </h3>
            <div className="mb-3">
              <label htmlFor="account-number" className="form-label">
                Account Number
              </label>
              <p>1234567890 (Access Bank)</p>
              <p>Awolope Feranmi Esther</p>
            </div>
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="btn btnp mt-3"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
      {orderPlaced && <p>Thank you for your purchase!</p>}
      <div className="row mt-5 mb-5">
        <div className="col-md-6 mt-5">
          <p className="pfp text-start ms-5">TimbuCloud™</p>
        </div>
        <div className="col-md-6 ">
          {" "}
          <MiniFooter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
