import { useState } from "react";
import videos from "../data/videos.json";
import toast from "react-hot-toast";
function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-white rounded-xl shadow-md mt-10 overflow-hidden">
      {/* Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b">
        <button
          onClick={() => setActiveTab("overview")}
          className={`py-4 font-semibold transition ${
            activeTab === "overview"
              ? "border-b-4 border-[#6DBE45] bg-gray-50 text-black"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab("specifications")}
          className={`py-4 font-semibold transition ${
            activeTab === "specifications"
              ? "border-b-4 border-[#6DBE45] bg-gray-50 text-black"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Specifications
        </button>

        <button
          onClick={() => setActiveTab("documents")}
          className={`py-4 font-semibold transition ${
            activeTab === "documents"
              ? "border-b-4 border-[#6DBE45] bg-gray-50 text-black"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Documents
        </button>

        <button
          onClick={() => setActiveTab("video")}
          className={`py-4 font-semibold transition ${
            activeTab === "video"
              ? "border-b-4 border-[#6DBE45] bg-gray-50 text-black"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Videos
        </button>
      </div>

      <div className="p-6">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-5 leading-8 text-gray-700">
            <p>{product.description}</p>

            <p>
              This product is ideal for industrial automation, embedded vision,
              robotics, and commercial applications. It delivers high
              performance, reliable operation, and long-term durability.
            </p>

            <p>
              It is designed for seamless integration into existing systems and
              complies with professional engineering standards.
            </p>
          </div>
        )}

        {/* Specifications */}
        {activeTab === "specifications" && (
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="bg-gray-50 p-4 font-semibold w-52">Product</td>
                  <td className="p-4">{product.productName}</td>
                </tr>

                <tr className="border-b">
                  <td className="bg-gray-50 p-4 font-semibold">Brand</td>
                  <td className="p-4">{product.brand}</td>
                </tr>

                <tr className="border-b">
                  <td className="bg-gray-50 p-4 font-semibold">Category</td>
                  <td className="p-4">{product.category}</td>
                </tr>

                <tr className="border-b">
                  <td className="bg-gray-50 p-4 font-semibold">Status</td>
                  <td className="p-4">{product.status}</td>
                </tr>

                <tr>
                  <td className="bg-gray-50 p-4 font-semibold">Price</td>
                  <td className="p-4 font-bold text-[#243B7B]">
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Documents */}
        {activeTab === "documents" && (
          <div className="space-y-5">
            <div className="border rounded-lg p-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="font-semibold text-lg">Product Datasheet</h3>

                <p className="text-sm text-gray-500">PDF Document</p>
              </div>

              <button
                onClick={() =>
                  toast("Download feature is coming soon!", {
                    icon: "🚧",
                  })
                }
                className="bg-[#6DBE45] hover:bg-[#5ca33d] text-white px-6 py-2 rounded-lg"
              >
                Download
              </button>
            </div>

            <div className="border rounded-lg p-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="font-semibold text-lg">User Manual</h3>

                <p className="text-sm text-gray-500">PDF Document</p>
              </div>

              <button
                onClick={() =>
                  toast("Download feature is coming soon!", {
                    icon: "🚧",
                  })
                }
                className="bg-[#6DBE45] text-white px-5 py-2 rounded"
              >
                {" "}
                Download
              </button>
            </div>
          </div>
        )}

        {/* Videos */}
        {activeTab === "video" && (
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="border rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">{video.title}</h3>

                  <p className="text-sm text-gray-500 mt-2">Watch on YouTube</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductTabs;
