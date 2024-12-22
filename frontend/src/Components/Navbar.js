import React, {useEffect, useState, useRef} from 'react';
import './Styles/Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useSelector } from 'react-redux';
import { persistor } from '../store/store';

import axios from 'axios';

axios.defaults.withCredentials = true;

const Navbar = () => {
  //const[user, setUser] = useState();

  const [user, setUser] = useState(() => {
    
    const savedUser = sessionStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const total = useSelector((state) => state.cart.cart);

  const accessTokenRef = useRef(null); 
  const timeoutRef = useRef(null);

  const handlePageLoad = async () => {
    const accessToken = getCookie("accessToken") || sessionStorage.getItem("accessToken");
    const refreshToken = getCookie("refreshToken");
  
    if (!accessToken && refreshToken) {
      console.log("Access token missing. Using refresh token...");
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        const payload = decodeTokenPayload(newAccessToken);
        handleTokenExpiration(payload.exp);
        setUserFromAccessToken(newAccessToken); // Set user data from new token
      } else {
        console.error("Failed to refresh token during page load. Redirecting to login.");
        navigate("/contact");
      }
    } else if (accessToken) {
      
      const payload = decodeTokenPayload(accessToken);
      handleTokenExpiration(payload.exp);
      setUserFromAccessToken(accessToken);
    }
  };

  const refreshAccessToken = async () => {
    try {
      console.log("Refresh Token fun is calling....");
      const response = await axios.post(
        "http://localhost:8080/api/user/refresh",
        {},
        { withCredentials: true }
      );
  
      const newAccessToken = getCookie("accessToken") || response.data.accessToken;
  
      if (newAccessToken) {
        
        document.cookie = `accessToken=${newAccessToken}; path=/`; // Save token to cookies
        sessionStorage.setItem("accessToken", newAccessToken); // Store token in sessionStorage
        accessTokenRef.current = newAccessToken; // Update the ref value
        return newAccessToken;
      } else {
        console.error("Refresh failed: No new access token received.");
        return null;
      }
    } catch (error) {
      console.error("Error refreshing access token:", error.response?.data || error.message);
      return null;
    }
  };

  const decodeTokenPayload = (token) => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) {
        console.error("Invalid token format.");
        return null;
      }
      const payload = JSON.parse(atob(parts[1]));
      return payload;
    } catch (error) {
      console.error("Error decoding token payload:", error.message);
      return null;
    }
  };
  
  const setUserFromAccessToken = (accessToken) => {
    const payload = decodeTokenPayload(accessToken);
    if (payload) {
      const user = { id: payload.sub,name: payload.name || "Unknown" };
      setUser(user);
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      console.error("Invalid token payload. Unable to set user.");
      setUser(null);

      setIsLoggedIn(false)
    }
  };

  const calculateTimeUntilExpiration = (exp) => {
    const expirationTime = exp * 1000; // Convert seconds to milliseconds
    const currentTime = Date.now();
    return expirationTime - currentTime;
  };

  const handleTokenExpiration = async (exp) => {
    const timeLeft = calculateTimeUntilExpiration(exp);
    if (timeLeft > 0) {
      
      timeoutRef.current = setTimeout(async () => {
        console.log("Access token expired. Attempting to refresh...");
        const newAccessToken = await refreshAccessToken();

        if (!newAccessToken) {
          console.error("Failed to refresh token. Redirecting to login.");
         
          setUser(null);
          navigate("/contact");
          return;
        }

        const newPayload = decodeTokenPayload(newAccessToken);
        if (newPayload) {
          handleTokenExpiration(newPayload.exp); // Reschedule for the next expiration
        }
      }, timeLeft);
    } else {
      console.log("Access token expired immediately. Attempting to refresh...");
      const newAccessToken = await refreshAccessToken();

      if (!newAccessToken) {
        console.error("Failed to refresh token. Redirecting to login.");
        setUser(null);
        navigate("/contact");
        return;
      }

      const newPayload = decodeTokenPayload(newAccessToken);
      if (newPayload) {
        handleTokenExpiration(newPayload.exp); // Reschedule for the next expiration
      }
    }
  };
  
  const handleRequest = async () => {
    try {
      const accessToken = getCookie("accessToken") || sessionStorage.getItem("accessToken");
      accessTokenRef.current = accessToken; // Store in ref
  
      if (!accessToken) {
       
        setUser(null);
        navigate("/contact");
        return;
      }
  
      const payload = decodeTokenPayload(accessToken);
      if (!payload) {
        console.error("Invalid token payload.");
        setUser(null);
        navigate("/contact");
        return;
      }
  
      handleTokenExpiration(payload.exp);
  
      console.log("Fetching user profile...");
      const response = await axios.get("http://localhost:8080/api/user/profile", {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      });
      setUser(response.data.data);
      
      sessionStorage.setItem("user", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error in handleRequest:", error.message);
      alert("An error occurred. Please log in again.");
      setUser(null);
      navigate("/contact");
    }
  };
  
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  };
  
  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/logout",
        {},
        { withCredentials: true }
      );
  
      if (response.status === 200) {
        setUser(null);
        setIsLoggedIn(false);
        sessionStorage.removeItem("accessToken"); 
        sessionStorage.removeItem("user");

        localStorage.removeItem("user");
        persistor.purge();
       
        navigate("/");
      } else {
        console.error("Failed to logout");
      }
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await handleRequest();
      await handlePageLoad();

      if (user) {
        setIsLoggedIn(true);
        navigate("/"); 
      } else {
        setIsLoggedIn(false);
        navigate("/"); // Navigate to Home by default
      }
    };

    initialize();
    return () => clearTimeout(timeoutRef.current); // Cleanup timeout on component unmount
  },[]);

  useEffect(() => {
    // Watch for changes in `user` and update `isLoggedIn`
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navy">
        <div className="container-fluid">
          <div className="navbar-brand flogo">
            <NavLink to="/" className="header">Foody</NavLink>
            <div>
              <img
                src="https://img.freepik.com/premium-vector/chef-man-logo-restaurants-logo-fast-food-logo_663736-303.jpg?w=826"
                alt="foodyChef"
                className="logo"
              />
            </div>

            <div>
              
              <h1>{user ? user.name : "User"}</h1>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: 'yellow' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
            <ul className="navbar-nav mb-3 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              {
                user ? (
                    <li className="nav-item">
                      <button className="nav-link" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Login
                      </NavLink>
                    </li>
                  )
              }

              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  Create
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className="nav-link" to="/cart" style={{display:"flex", alignItems:"center"}}>
                
                <div>Cart</div>
                            
                <div className='cart m-1' style={{color:"red", fontWeight:"900"}}>
                  {total.length > 0 ? total.length : '0'}
                </div> 

                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

