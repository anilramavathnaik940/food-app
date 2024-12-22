import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ items }) => {
  const navigate = useNavigate();

  const productData = (items)=> {
    navigate(`/products/${items.id}`, {state : items});
  };

  return (
    <div className="col-12 col-md-6 col-lg-3" >
      <div className="menu-item-card shadow p-3 mb-3" onClick={() =>productData(items)}>
        
        <img src={items.image} alt={items.title} className="menu-item-image w-100" />
        <h1 className="menu-card-title"><span style={{color:"red", fontSize:"18px"}}>Title</span> : {items.title}</h1>
        <button className="menu-item-link" style={{borderWidth:"0px", borderRadius:"10px", backgroundColor:"inherit"}}>
          View All
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right"
            fill="#d0b200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails
