import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        Go to <Link to="/products">products page</Link>
      </p>
    </>
  );
}
