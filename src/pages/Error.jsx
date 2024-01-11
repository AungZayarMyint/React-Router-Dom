import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "Unknown error occur!";

  if (error.status === 404) {
    title = error.data.message;
  }
  return (
      <section>
        <h1>Oh! Fuck</h1>
        <Link to={"/"}>
          <button>go back to home</button>
        </Link>
      </section>
  );
};

export default Error;
