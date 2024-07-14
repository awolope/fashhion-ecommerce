import React from "react";
import AddToCartButton from "./AddToCartButton";

const products = [
  {
    id: 1,
    name: "Elegant Dress",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Casual Shirt",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Stylish Pants",
    price: 39.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Trendy Jacket",
    price: 79.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Fashionable Shoes",
    price: 49.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Cool Sunglasses",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Cool Sunglasses",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
];

const ProductPage = ({ addToCart }) => {
  return (
    <div className="product-page">
      <h2 className="text-center my-3">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <AddToCartButton product={product} addToCart={addToCart} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
