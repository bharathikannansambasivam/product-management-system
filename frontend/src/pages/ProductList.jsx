import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await api.get("/items/products?fields=*,product_image.*");
      console.log(res);
      setProducts(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-10 px-4">
      {" "}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#243B7B]">Products</h1>

          <Link to="/admin/add-product">
            <button className="bg-[#243B7B] hover:bg-[#1d3269] text-white px-5 py-2 rounded-lg">
              + Add Product
            </button>
          </Link>
        </div>

        {/* No Products */}
        {products.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-600">
              No Products Found
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 p-5 flex flex-col"
              >
                {console.log("image", product.product_image)}
                {/* Image Placeholder */}
                <div className="h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {product.product_image ? (
                    <img
                      src={`https://testing1122.onrender.com/assets/${product.product_image.id}`}
                      alt={product.productName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <h2 className="text-xl font-bold text-[#243B7B] line-clamp-2 min-h-[64px]">
                  {product.productName}
                </h2>

                {/* Brand */}
                <p className="text-gray-600 mt-3">
                  <span className="font-semibold">Brand :</span> {product.brand}
                </p>

                {/* Category */}
                <p className="text-gray-600">
                  <span className="font-semibold">Category :</span>{" "}
                  {product.category}
                </p>

                {/* Status */}
                <p
                  className={`font-semibold mt-2 ${
                    product.status === "Available"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {product.status}
                </p>

                {/* Price */}
                <p className="text-2xl font-bold text-[#5FAE2E] mt-4">
                  ₹{product.price}
                </p>

                {/* Button */}
                <Link to={`/products/${product.slug}`}>
                  <button className="mt-5 w-full bg-[#243B7B] hover:bg-[#1d3269] text-white py-2 rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
