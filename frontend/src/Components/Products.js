import React from 'react'
import ProductDetails from "./ProductDetails";

export const menuItems = [
  {
    id:1,
    title: "NonVeg",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
    
  },
  {
    id:2,
    title: "Veg",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png",
    
  },
  {
    id:3,
    title: "Soups",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
   
  },
  {
    id:4,
    title: "Sea Food",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png",
    
  },
  {
    id:5,
    title: "Cuisines",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png",
    
  },
  {
    id:6,
    title: "Fast Food",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png",
    
  },
  {
    id:7,
    title: "Salads",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png",
    
  },
  {
    id:8,
    title: "Desserts",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png",
  },
];


const Products = () => {
  return (
    <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="menu-section-heading">Explore Menu</h1>
          </div>
          {menuItems.map((item, index) => (
            <ProductDetails key={item.id} items={item} />
          ))}
        </div>
      </div>
    </div>  
  )
}

export default Products
