import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Styles/Details.css';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../store/cartSlice";

axios.defaults.withCredentials = true;

const Product = () => {
  const [fdata, setFdata] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const location = useLocation();
  const data = location.state || {}; 

  const blogsData = useSelector((state) => state.blogs.blogs);

  const dispatch = useDispatch();

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your backend URL
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  });

  const saveToDatabase = async (newData) => {
    try {
      const saveResponse = await axiosInstance.post('/api/food/add', newData);
      console.log('Data added to database successfully:', saveResponse.data);
    } catch (error) {
      console.error('Error adding data to the database:', error.message);
    }
  };
  
  useEffect(() => {
    const getFoodItems = async () => {
      try {
        const response = await axiosInstance.get('/api/food/all');
        const foodItems = response.data.data;
  
        const updatedFoodItems = foodItems.map((item) => {
          if (item.category === data.title) {
            const newItems = blogsData.map((blog) => ({
              title: blog.title,
              image: blog.image,
              price: blog.price,
            }));
            return {
              ...item,
              items: [...item.items, ...newItems],
            };
          }
          return item;
        });
  
        setFdata(updatedFoodItems);
  
        const newEntries = updatedFoodItems.filter((item) => !foodItems.includes(item)); // Identify new items
        if (newEntries.length > 0) {
          await saveToDatabase(newEntries);
        }
      } catch (error) {
        console.error('Error fetching food items:', error.message);
        if (error.response) {
          console.error('Response Status:', error.response.status);
          console.error('Response Data:', error.response.data);
        }
      }
    };
  
    getFoodItems();
  }, [blogsData, data.title]);
  
  useEffect(() => {
    if (data.title) {
      const filteredItems = fdata.filter((item) => item.category === data.title);
      setFilteredData(filteredItems.length > 0 ? filteredItems[0].items : []);
    } else {
      console.error('No category title found in data.');
      setFilteredData([]); // Clear filtered data if no category is found
    }
  }, [data.title, fdata]);
  
  const handleAddToCart = (item) => {
    alert(`${item.title} added to cart!`);
    dispatch(addToCart(item));
  };

  return (
    <Container className="product-container my-4">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>
          <h2
            className="text-center mb-4"
            style={{
              color: "brown",
              fontFamily: "cursive",
              fontStyle: "italic",
              fontSize: "20px",
              fontWeight: "900",
            }}
          >
            {data.title || 'Unknown Category'}{' '}
            <span style={{ color: "red", fontSize: "20px" }}>Items</span>
          </h2>
        </div>
        <NavLink to="/products" className="mb-4 m-1">
          <button
            style={{
              borderRadius: "20px",
              padding: "3px",
              backgroundColor: "blue",
              width: "100px",
              color: "white",
              fontWeight: "900",
              borderWidth: "0px",
            }}
          >
            Go Back
          </button>
        </NavLink>
      </div>

      <Row className="gy-4">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title className="product-title">
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                      <>
                        <span style={{color:'red', fontSize:"18px",fontWeight:"bold", fontFamily:"cursive"}}>Title </span>
                      </> 
                      <p>
                        {item.title}
                      </p>
                    </div>
                    
                  </Card.Title>

                  <Card.Text className="product-price fw-bold">
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                      <>
                        <span style={{color:'blue', fontSize:"20px",fontWeight:"bold", fontFamily:"cursive"}}>Price </span>
                      </> 
                      <>
                       ${item.price}
                      </>
                    </div>
                     
                  </Card.Text>

                  <Button
                    variant="primary"
                    className="w-100 add-to-cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No products available in this category.</p>
        )}
      </Row>
    </Container>
  );
};

export default Product;