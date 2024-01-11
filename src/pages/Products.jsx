import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description: "apple from world",
  },
  {
    id:2,
    title:"Banana",
    description: "banana from world",
  },
  {
    id:3,
    title:"Orange",
    description: "Orange from world",
  },
];
const Products = () => {
  return (
    <>
      {PRODUCTS.map((product)=>(
        <Link to={`/product/${product.title}`}>
          <div key={product.id} className="card">
            <p className="title">{product.title}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;
