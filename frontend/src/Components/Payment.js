import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, ProgressBar } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement , useStripe, useElements } from '@stripe/react-stripe-js';
import './Styles/payment.css';

const stripePromise = loadStripe('your-publishable-key'); // Replace with your publishable key

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [trackingStatus, setTrackingStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe.js has not yet loaded.');
      return;
    }

    const cardElement = elements.getElement(CardElement);
    
    if (!cardElement) {
      console.error('CardElement is not available.');
      return;
    }

    const { clientSecret } = await fetch('/api/pay', {
      method: 'POST',
      body: JSON.stringify({ amount: 1000, currency: 'usd' }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,  // Pass the card element here
        billing_details: {
          name: 'Customer Name',
          email: 'customer@example.com',
        },
      },
    });

    if (error) {
      console.error(error.message);
      alert('Payment failed!');
    } else if (paymentIntent.status === 'succeeded') {
      alert('Payment successful!');
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <Container className="payment-container">
        <h1 className="text-center mb-4">Payment Page</h1>

        {paymentSuccess ? (
          <>
            <Alert variant="success" className="text-center">
              Payment Successful! 🎉
            </Alert>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Tracking Information</Card.Title>
                <p>{trackingStatus}</p>
                <ProgressBar now={100} label="Order Placed" />
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              onClick={() => window.location.reload()}
              className="mt-3"
            >
              Go to Homepage
            </Button>
          </>
        ) : (
          <>
            {loading && (
              <ProgressBar
                animated
                now={progress}
                label={`${progress}%`}
                className="mb-4"
                style={{ height: '1.5rem' }}
              />
            )}
            <Row>
              <Col md={6} sm={12}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>User Details</Card.Title>
                    <Form>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number" required />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} sm={12}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Payment Method</Card.Title>
                    <Form onSubmit={handleSubmit}>
                      <CardElement className="mb-3" />
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 mt-3"
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Confirm Payment'}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Elements>
  );
};

export default Payment;