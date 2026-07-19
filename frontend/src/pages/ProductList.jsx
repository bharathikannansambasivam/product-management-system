import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(null);
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
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/items/products/${id}`);

      setProducts((prev) => prev.filter((product) => product.id !== id));

      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Failed to delete product");
      console.log(error);
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading...
      </div>
    );
  }
  const filteredProducts = products.filter((product) => {
    const keyword = search.toLowerCase();

    return (
      product.productName.toLowerCase().includes(keyword.trim()) ||
      product.brand.toLowerCase().includes(keyword.trim()) ||
      product.category.toLowerCase().includes(keyword.trim())
    );
  });
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-10 px-4">
      {" "}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#243B7B]  hidden sm:block">
            Products
          </h1>
          <div className="my-6 flex justify-center">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-96 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#243B7B]"
            />
          </div>
          <Link to="/admin/add-product">
            <button className="bg-[#243B7B] hover:bg-[#1d3269] text-white px-5 py-2 rounded-lg">
              <span className=" sm:hidden"> Add</span>
              <span className="hidden sm:block"> + Add Product</span>
            </button>
          </Link>
        </div>

        {/* No Products */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-600">
              No matching products found
            </h2>
            <p className="text-gray-500 mt-2">
              Try searching with another keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-xl shadow hover:shadow-xl transition duration-300 p-5 flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() =>
                      setMenuOpen(menuOpen === product.id ? null : product.id)
                    }
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <BsThreeDotsVertical size={18} />
                  </button>

                  {menuOpen === product.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                      <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <FiEdit2 />
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        <MdDeleteOutline />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
                <div className="h-40 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {product.product_image ? (
                    <img
                      src={`https://testing1122.onrender.com/assets/${product.product_image.id}`}
                      alt={product.productName}
                      className="w-full h-full  object-contain p-3"
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
                  <button className="mt-5 w-full bg-[#243B7B] hover:bg-green-800 text-white py-2 rounded-lg">
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
