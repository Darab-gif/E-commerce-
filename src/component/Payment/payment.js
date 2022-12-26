import React from "react";
import { useSelector } from "react-redux";
import "./payment.css";

const Payment = () => {
  let totalAmount = 0;
  const amount = useSelector((state) => state.cart.itemList);

  amount.forEach((item) => (totalAmount += item.totalPrice));

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="payment_container">
      <h1>Shipping Details</h1>

      <form className="payment_form" onSubmit={handleSubmit}>
        <input placeholder="Email Address" type="email" />
        <br />
        <input placeholder="Amount" value={totalAmount} type="number" />
        <br />
        <input placeholder="Name" type="text" />
        <br />
        <input type="number" placeholder="Phone Number" />
        <br />
        <button>Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Payment;
