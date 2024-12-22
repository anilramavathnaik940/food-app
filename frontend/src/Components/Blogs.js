import React, { useState } from 'react';
import './Styles/Blogs.css';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {setBlogs} from "../store/blogSlice";

import axios from 'axios';

axios.defaults.withCredentials = true;

const BlogImages = () => {

  const [cardData, setCardData] = useState({
    Veg: {
      image: '',
      title: '',
      description: '',
      price: '',
    },
    NonVeg: {
      image: '',
      title: '',
      description: '',
      price: '',
    },
    Desserts: {
      image: '',
      title: '',
      description: '',
      price: '',
    },

    Salads: {
      image: '',
      title: '',
      description: '',
      price: '',
    },
    Soups: {
      image: '',
      title: '',
      description: '',
      price: '',
    },
    SeaFood: {
      image: '',
      title: '',
      description: '',
      price: '',
    },

    Cuisines: {
      image: '',
      title: '',
      description: '',
      price: '',
    },
    FastFood: {
      image: '',
      title: '',
      description: '',
      price: '',
    }
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('Veg');

  const userData = useSelector((state) => state.user.user);

  const categories = ['Veg', 'NonVeg', 'Desserts', 'Salads', 'Soups', 'SeaFood', 'Cuisines', 'FastFood'];

  console.log("User Data", userData._id);

  const createBlog = async()=> {
    
    if (!userData || !userData._id) {
      console.error("User data is missing or invalid.");
      alert("Unable to submit the blog because user information is missing.");
      return;
    }

    const dataToSend = {
        category: selectedCategory,
        ...cardData[selectedCategory],
        user:userData._id
    };

    try {
      const response = await axios.post('http://localhost:8080/api/blogs/add', dataToSend);
  
      let blogs = response.data.blog;

      if (!Array.isArray(blogs)) {
        console.warn('Fallback applied: Converting to array if possible.');
        blogs = blogs ? [blogs] : [];
      }
      
      dispatch(setBlogs(blogs));
      navigate('/products');
  
      // Update card data
      if (selectedCategory) {
          setCardData((prevData) => ({
              ...prevData,
              [selectedCategory]: { image: '', title: '', description: '', price: '' },
          }));
      } else {
          console.error('Selected category is not defined.');
      }
  
      alert('Food item added successfully!');
    } 
    catch (error) {
      console.error('Error adding blog or updating data:', error.message);
      if (error.response) {
          console.error('Response Status:', error.response.status);
          console.error('Response Data:', error.response.data);
      }
    }
      // try {
      //     const response = await axios.post('http://localhost:8080/api/blogs/add', dataToSend);
      //     navigate('/products');
    
      //     alert('Food item added successfully!');

      //     dispatch(setBlogs(response.data.blog));

      //     console.log('Blog successfully added:', response.data.blog);

      //     setCardData((prevData) => ({
      //       ...prevData,
      //       [selectedCategory]: { image: '', title: '', description: '', price: '' },
      //     }));

      //     alert('Food item added successfully!');

      //   } 
      // catch (error) {
      //   console.error('Error posting blog data:', error.response?.data || error.message);
      // }
  }

  const handleSave = async (e) => {
      e.preventDefault();

      const { image, title, description, price } = cardData[selectedCategory];
  
      if (!image || !title || !description || !price) {
        console.error("All fields are required!");
        alert("Please fill in all fields before saving.");
        return;
      }
      console.log(`Details for ${selectedCategory}:`, cardData[selectedCategory]);

      await createBlog();
      
  };


  return (
    <div className="dropdown-card-container">
      <h1>Add Your Food</h1>

      <select
        className="dropdown"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      
      <div className="card">
        <form onSubmit={handleSave}>
  
          <div className="form-group">
            <label htmlFor="imageInput">Image URL:</label>
            <input
              type="text"
              id="imageInput"
              className="form-control"
              placeholder="Enter image URL"
              value={cardData[selectedCategory].image}
              onChange={(e) =>
                setCardData((prevData) => ({
                  ...prevData,
                  [selectedCategory]: {
                    ...prevData[selectedCategory],
                    image: e.target.value,
                  },
                }))
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="titleInput">Title:</label>
            <input
              type="text"
              id="titleInput"
              className="form-control"
              placeholder="Enter title"
              value={cardData[selectedCategory].title}
              onChange={(e) =>
                setCardData((prevData) => ({
                  ...prevData,
                  [selectedCategory]: {
                    ...prevData[selectedCategory],
                    title: e.target.value,
                  },
                }))
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="descriptionInput">Description:</label>
            <textarea
              id="descriptionInput"
              className="form-control"
              placeholder="Enter description"
              value={cardData[selectedCategory].description}
              onChange={(e) =>
                setCardData((prevData) => ({
                  ...prevData,
                  [selectedCategory]: {
                    ...prevData[selectedCategory],
                    description: e.target.value,
                  },
                }))
              }
            />
          </div>

          <div className="form-group">
                <label htmlFor="priceInput">Price:</label>
                <input
                    type="number"
                    id="priceInput"
                    className="form-control"
                    placeholder="Enter price"
                    value={cardData[selectedCategory].price}
                    onChange={(e) =>
                        setCardData((prevData) => ({
                        ...prevData,
                        [selectedCategory]: {
                            ...prevData[selectedCategory],
                            price: e.target.value,
                        },
                        }))
                    }
                    />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogImages;
