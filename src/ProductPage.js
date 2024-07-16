import React, { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import "./Productpage.css";
import "./Abibas boot.png";
import "./Beringa boot.png";
import "./Beringa.png";
import "./Black benz.png";
import "./Brown Italian Leather.png";
import "./Capenter.png";
import "./Cover shoe.png";
import "./Dragon.png";
import "./Dunk.png";
import "./Italian Leather.png";
import "./Necklace.png";
import "./Ningolan.png";
import "./suit.png";
import "./Mike Dunk.png";
import "./Pink hose.png";
import "./Poesidon.png";
import "./Shikina.png";
import "./Silicon.png";
import "./Teringo.png";
import "./dress.jpg";
import "./dress2.jpg";
import "./sun glasses.webp";
import "./bracelet.png";
import "./canvas.png";
import "./shirt.png";
import "./shopwoman.png";
import "./silican leather.png";
import "./silver necklace.png";
import "./watch box.png";
import "./watch.png";
import MiniFooter from "./minifooter";
import Footer from "./footer";
const productsData = [
  {
    id: 1,
    name: "Suit",
    price: 90,
    image: "/suit.png",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Pink hose",
    price: 64,
    image: "../Pink hose.png",
    category: "Footwear",
  },
  {
    id: 3,
    name: "Abbias boot",
    price: 64,
    image: "../Abibas boot.png",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Beringa boot",
    price: 79,
    image: "../Beringa boot.png",
    category: "Footwear",
  },
  {
    id: 5,
    name: "Bering",
    price: 60,
    image: "../Beringa.png",
    category: "Footwear",
  },
  {
    id: 6,
    name: "Bracelets",
    price: 5,
    image: "../bracelet.jpg",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Necklace",
    price: 19,
    image: "../Gold necklace.jpg",
    category: "Accessories",
  },
  {
    id: 8,
    name: "Teringo",
    price: 80,
    image: "../Teringo.png",
    category: "Footwear",
  },
  {
    id: 9,
    name: "Ningolan",
    price: 75,
    image: "../Ningolan.png",
    category: "Footwear",
  },
  {
    id: 10,
    name: "Dress",
    price: 44,
    image: "../dress2.jpg",
    category: "Clothing",
  },
  {
    id: 11,
    name: "Shirt",
    price: 40,
    image: "/shirt.png",
    category: "Clothing",
  },
  {
    id: 12,
    name: "Italian Leather",
    price: 80,
    image: "../Italian Leather.png",
    category: "Footwear",
  },
  {
    id: 13,
    name: "Cover shoe",
    price: 40,
    image: "../Cover shoe.png",
    category: "Footwear",
  },
  {
    id: 14,
    name: "Watch",
    price: 29,
    image: "../watch.jpg",
    category: "Accessories",
  },
  {
    id: 15,
    name: "Dunk",
    price: 59,
    image: "../Dunk.png",
    category: "Footwear",
  },
  {
    id: 16,
    name: "Necklace",
    price: 9,
    image: "../Tiny Necklace.jpg",
    category: "Accessories",
  },
  {
    id: 17,
    name: "Poesidon",
    price: 55,
    image: "../Poesidon.png",
    category: "Footwear",
  },
  {
    id: 18,
    name: "Shikina",
    price: 74,
    image: "../Shikina.png",
    category: "Footwear",
  },
  {
    id: 19,
    name: "Silican Leather",
    price: 59,
    image: "../Silican Leather.png",
    category: "Footwear",
  },
  {
    id: 20,
    name: "Necklace",
    price: 13,
    image: "../silver necklace.jpg",
    category: "Accessories",
  },
  {
    id: 21,
    name: "Silicon",
    price: 90,
    image: "/Silicon.png",
    category: "Footwear",
  },
  {
    id: 22,
    name: "Watch box",
    price: 40,
    image: "../watch box.jpg",
    category: "Accessories",
  },
  {
    id: 23,
    name: "Dragon",
    price: 63,
    image: "../Dragon.png",
    category: "Footwear",
  },
  {
    id: 24,
    name: "Jean short",
    price: 29,
    image: "../clothes.png",
    category: "Clothing",
  },
  {
    id: 25,
    name: "Canvas",
    price: 49,
    image: ".//canvas.png",
    category: "Footwear",
  },
  {
    id: 26,
    name: "Dress",
    price: 16,
    image: "../dress.jpg",
    category: "Clothing",
  },
  {
    id: 27,
    name: "Choker",
    price: 9,
    image: "../choker.jpg",
    category: "Accessories",
  },
  {
    id: 28,
    name: "Sunglasses",
    price: 10,
    image: "../sun glasses.webp",
    category: "Accessories",
  },
];

const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState(productsData);
  const [sortCriteria, setSortCriteria] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");

  const handleSort = (event) => {
    const criteria = event.target.value;
    setSortCriteria(criteria);
    const sortedProducts = [...products].sort((a, b) => {
      if (criteria === "price-asc") return a.price - b.price;
      if (criteria === "price-desc") return b.price - a.price;
      return 0;
    });
    setProducts(sortedProducts);
  };

  const handleFilter = (event) => {
    const criteria = event.target.value;
    setFilterCriteria(criteria);
    const filteredProducts = productsData.filter(
      (product) => criteria === "" || product.category === criteria
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="product-page">
      <h2 className="text-center m-5 ph2 ">Our Collection</h2>
      <img src="./shopwoman.png" className="img-fluid mb-3" alt=""></img>
      <div className="sort-filter-controls d-flex justify-content-between mb-3">
        <select
          onChange={handleSort}
          value={sortCriteria}
          className="form-select"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <select
          onChange={handleFilter}
          value={filterCriteria}
          className="form-select"
        >
          <option value="">Filter By </option>
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="row m-3">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-2">
            <div className="card m-1 carim">
              <img
                src={product.image}
                className="card-img-top img-fluid proimg"
                alt={product.name}
              />
              <div className="card-body carim2">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₦{product.price},000.00</p>
                <AddToCartButton product={product} addToCart={addToCart} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-6">
          <p className="pfp ms-5">TimbuCloud™</p>
        </div>
        <div className="col-md-6">
          {" "}
          <MiniFooter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
