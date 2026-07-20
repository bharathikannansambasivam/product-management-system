import { useNavigate } from "react-router-dom";

function ProductNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="mt-2 text-2xl font-semibold">Product Not Found</h2>
        <p className="mt-2 text-gray-500">
          The product you are looking for doesn't exist.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-6 rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductNotFound;
