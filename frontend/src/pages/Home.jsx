import { Link } from "react-router-dom";
import MarketSlider from "../components/MarketSlider";
function Home() {
  return (
    <div className=" ">
      {/* Hero */}
      <section className="bg-white shadow-sm min-h-[70vh] flex items-center">
        {" "}
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          {" "}
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#243B7B] leading-tight">
              Product Management
              <br />
              System
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              Manage your products efficiently with a modern dashboard built
              using React and Directus CMS. Easily add products, upload images,
              and organize your inventory.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/products">
                <button className="  cursor-pointer bg-[#243B7B]  hover:bg-green-800 text-white px-7 py-3 rounded-lg font-medium">
                  View Products
                </button>
              </Link>

              <Link to="/admin/add-product">
                <button className=" cursor-pointer border-2 border-[#243B7B] text-[#243B7B] hover:bg-green-800 hover:text-white px-7 py-3 rounded-lg font-medium transition">
                  Add Product
                </button>
              </Link>
            </div>
          </div>
          {/* Right */}
          <div className="flex justify-center ">
            <img
              src="https://www.ti.com/content/dam/ticom/images/identities/third-party/d-f/e-con-systems-logo.png"
              alt="Camera"
              className="w-full max-w-xl mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <MarketSlider />

      {/* Footer */}
      <footer className="bg-[#111827] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              Product Management System
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Built with React & Directus
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-300">© 2026 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
