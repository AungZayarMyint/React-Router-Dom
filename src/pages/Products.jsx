import { Link, json, useLoaderData } from "react-router-dom";
import User from "../components/User";

const Products = () => {
  const PRODUCTS = useLoaderData();
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="card">
            <p>{product.title}</p>
            <User userId={product.userId} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw json({ message: "post not found!!" },{status:404});
  } else {
    const products = await response.json();
    return products;
  }
};
