import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const params = useParams();

  return (
    <>
      <h1>{params.productId}</h1>
    </>
  );
}

export default ProductDetail;
