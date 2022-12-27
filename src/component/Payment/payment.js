import React from "react";
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./payment.css";
import { useState } from "react";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const publicKey = "pk_test_6d8fb07eb4fa7e8b742070d49f314cc516b94b96";
  let amount = 0;

  const totalAmount = useSelector((state) => state.cart.itemList);
  totalAmount.map((item) => (amount += item.totalPrice));

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const config = {
    email,
    amount: amount * 750 * 100,
    publicKey,
    metadata: {
      name,
      phone,
    },
  };

  const componentProps = {
    ...config,
    text: "Proceed to Payment",
    onSuccess: () => {
      toast.success(`Payment complete!! `);
    },
    onClose: () => toast.warning("You Have Cancelled  a transaction"),
  };
  return (
    <div className="payment_container">
      <h1>Shipping Details</h1>

      <form className="payment_form" onSubmit={handleSubmit}>
        <input
          placeholder="Email Address*"
          type="email"
          onChange={(ev) => setEmail(ev.target.value)}
          required
        />
        <br />
        <input
          placeholder="Amount"
          type="text"
          value={`${(amount * 750).toLocaleString()}`}
          disabled
        />
        <br />
        <input
          placeholder="Name*"
          type="text"
          onChange={(ev) => setName(ev.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Phone Number*"
          onChange={(ev) => setPhone(ev.target.value)}
          required
        />
        <br />

        <PaystackButton {...componentProps} />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Payment;
