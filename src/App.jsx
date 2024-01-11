import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import { Products, ProductDetails, Home, About, Error } from "./pages/index";
import { loader as productsLoader } from "./pages/Products";
import { loader as productDetailsLoader } from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "/product/:postId",
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
