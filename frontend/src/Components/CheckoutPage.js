import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Styles/checkout.css";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    console.log("Order Details:", { ...formData, cartItems, totalPrice });
  };

  return (
    <Container className="checkout-container">
      <Row>
        {/* Billing Details */}
        <Col md={6} sm={12} className="billing-details">
          <h3>FeedBack</h3>
          <Form onSubmit={handleSubmit} className="custom-form">
            <Form.Group className="form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message here"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="form-submit-btn" >
              Submit
            </Button>
          </Form>

        </Col>

        <Col md={6} sm={12} className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-box">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-details">
                  <p className="item-title">{item.title}</p>
                  <p>
                    {item.quantity} × ₹{item.price}
                  </p>
                </div>
              </div>
            ))}
            <hr />
            <div className="summary-footer">
              <p className="mt-3">
                <b>Total Price:</b> ₹ <span style={{color:"red", fontSize:"18px", fontFamily:"cursive"}}>{totalPrice}</span>
              </p>
              <Button className="checkout-btn" onClick={() => navigate("/payment")}>Proceed To Pay</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
