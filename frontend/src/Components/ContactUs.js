import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Styles/Contact.css";
import axios from "axios";

import { useDispatch } from "react-redux";

import { loginUser } from "../store/userSlice";

 axios.defaults.withCredentials = true;

const ContactPage = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const [login, setLogin] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelReq = async (type = "login") => {
    try {

      const res = await axios.post(`http://localhost:8080/api/user/${type}`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      const data = res.data;
      return data;

    } catch (err) {
      console.error("Error in API call:", err);
      return null;
    }
  };

  const isValid = () => {
    if (!formData.email || !formData.password || (!login && !formData.name)) {
      setMessage("All fields are required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid()) return;

    const response = await handelReq(login ? "login" : "signup");

    if (response) {

      console.log("Login user Res", response);
      dispatch(loginUser(response.user));

      setMessage(login ? "Login Successful!" : "Signup Successful! Please log in.");
      if (login) {
        navigate("/"); 
      } else {
        setLogin(true);
      }
    } else {
      setMessage("An error occurred. Please try again.");
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>{login ? "Login to Your Account" : "Create Your Account"}</h1>
        </div>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit} className="contact-form">
          {!login && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button
            type="submit"
            className={`btn ${login ? "btn-primary" : "btn-success"} w-100 mt-3`}
          >
            {login ? "Login" : "Sign Up"}
          </button>

          <p className="toggle-login">
            {login ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={() => setLogin(!login)} className="toggle-link">
              {login ? "SignUp" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
