import { useState } from "react";
import videos from "../data/videos.json";
import toast from "react-hot-toast";
function ProductAccordion({ product }) {
  const [open, setOpen] = useState("overview");

  return (
    <div className="space-y-3 mt-8">
      {/* Overview */}
      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => setOpen(open === "overview" ? "" : "overview")}
          className={`w-full flex justify-between items-center px-5 py-4 font-semibold transition ${
            open === "overview" ? "bg-[#6DBE45] text-white" : "bg-gray-100"
          }`}
        >
          <span>Overview</span>
          <span>{open === "overview" ? "−" : "+"}</span>
        </button>

        {open === "overview" && (
          <div className="p-6 bg-white">
            <p className="text-gray-700 leading-8">{product.description}</p>

            <p className="mt-5 text-gray-600">
              This product is designed for industrial and commercial
              applications with reliable performance and durability.
            </p>
          </div>
        )}
      </div>

      {/* Specifications */}

      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() =>
            setOpen(open === "specifications" ? "" : "specifications")
          }
          className={`w-full flex justify-between items-center px-5 py-4 font-semibold transition ${
            open === "specifications"
              ? "bg-[#6DBE45] text-white"
              : "bg-gray-100"
          }`}
        >
          <span>Specifications</span>
          <span>{open === "specifications" ? "−" : "+"}</span>
        </button>

        {open === "specifications" && (
          <div className="bg-white">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="bg-gray-50 p-4 font-semibold">Product</td>

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
      </div>

      {/* Documents */}

      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => setOpen(open === "documents" ? "" : "documents")}
          className={`w-full flex justify-between items-center px-5 py-4 font-semibold transition ${
            open === "documents" ? "bg-[#6DBE45] text-white" : "bg-gray-100"
          }`}
        >
          <span>Documents</span>
          <span>{open === "documents" ? "−" : "+"}</span>
        </button>

        {open === "documents" && (
          <div className="bg-white p-5 space-y-4">
            <div className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Product Datasheet</h3>

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
                Download
              </button>
            </div>

            <div className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">User Manual</h3>

                <p className="text-sm text-gray-500">PDF Document</p>
              </div>

              <button className="bg-[#6DBE45] text-white px-5 py-2 rounded">
                Download
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Videos */}

      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => setOpen(open === "videos" ? "" : "videos")}
          className={`w-full flex justify-between items-center px-5 py-4 font-semibold transition ${
            open === "videos" ? "bg-[#6DBE45] text-white" : "bg-gray-100"
          }`}
        >
          <span>Videos</span>
          <span>{open === "videos" ? "−" : "+"}</span>
        </button>

        {open === "videos" && (
          <div className="bg-white p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group border rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition">
                        ▶
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold">{video.title}</h3>

                    <p className="text-sm text-gray-500 mt-2">
                      Watch on YouTube
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductAccordion;
