import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>ProductDetails Page</h1>
      <h1>Product title - {title}</h1>
      <button onClick={navigateHandler}>Go back to products</button>
    </>
  );
};

export default ProductDetails;
