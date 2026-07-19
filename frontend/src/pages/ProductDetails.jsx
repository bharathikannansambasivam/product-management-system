import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import ProductTabs from "../components/ProductTabs";
import ProductAccordion from "../components/ProductAccordion";
import toast from "react-hot-toast";

function ProductDetails() {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await api.get(
        `/items/products?filter[slug][_eq]=${slug}&fields=*,product_image.*`
      );
      setProduct(res.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          Home / Products / {product.productName}
        </p>

        {/* Product Name */}
        <h2 className="text-xl font-bold text-[#243B7B] line-clamp-2 min-h-[64px]">
          {product.productName}
        </h2>

        {/* Top Section */}
        <div className="bg-white rounded-xl shadow-md p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {" "}
          {/* Left - Product Image */}
          {/* Left - Product Image */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md h-[350px] bg-gray-100 border rounded overflow-hidden flex items-center justify-center">
              {product.product_image ? (
                <img
                  src={`https://testing1122.onrender.com/assets/${product.product_image.id}`}
                  alt={product.productName}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>

            {/* Gallery Dots */}
            <div className="mt-8">
              <div className="flex gap-3 flex-wrap">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {product.brand}
                </span>
              </div>
            </div>
          </div>
          {/* Right - Product Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Highlights</h2>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Brand : {product.brand}</li>

              <li>✔ Category : {product.category}</li>

              <li>✔ Status : {product.status}</li>

              <li>✔ High Quality Product</li>
            </ul>

            <hr className="my-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {" "}
              <div>
                <p className="text-gray-500 text-sm">Price</p>

                <h2 className="text-3xl font-bold text-[#243B7B] mt-2">
                  ₹{product.price}
                </h2>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Brand</p>

                <h2 className="text-xl font-semibold mt-2">{product.brand}</h2>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Category</p>

                <h2 className="text-xl font-semibold mt-2">
                  {product.category}
                </h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {" "}
              <a
                href="https://www.e-consystems.com/contactus.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-7 py-3 rounded font-semibold text-center"
              >
                Contact Us
              </a>
              <button
                onClick={() =>
                  toast("Download feature is coming soon!", {
                    icon: "🚧",
                  })
                }
                className="bg-lime-500 hover:bg-lime-600 text-white px-7 py-3 rounded font-semibold"
              >
                Download
              </button>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:block">
          <ProductTabs product={product} />
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <ProductAccordion product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
