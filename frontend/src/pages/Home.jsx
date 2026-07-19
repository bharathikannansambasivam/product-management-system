import { Link } from "react-router-dom";
import MarketSlider from "../components/MarketSlider";

function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Hero */}
      <section className="flex-1 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-blue-100 text-[#243B7B] px-4 py-1 rounded-full text-sm font-medium">
              React + Directus
            </span>

            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[#243B7B] leading-tight">
              Product
              <br />
              Management
              <br />
              System
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-lg">
              A modern product management dashboard to organize inventory,
              upload product images, and manage products efficiently with React,
              Directus CMS, and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto bg-[#243B7B] hover:bg-green-800
      text-white px-8 py-3 rounded-lg font-semibold
      transition duration-300 shadow-md"
                >
                  View Products
                </button>
              </Link>

              <Link to="/admin/add-product" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto border-2 border-[#243B7B]
      text-[#243B7B] hover:bg-green-800 hover:text-white
      px-8 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Add Product
                </button>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:flex justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <img
                src="https://www.ti.com/content/dam/ticom/images/identities/third-party/d-f/e-con-systems-logo.png"
                alt="E-con Systems"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className=" bg-white">
        <MarketSlider />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Product Management System
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Built with React, Directus CMS & Tailwind CSS
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm">© 2026 All Rights Reserved.</p>
            <p className="text-xs text-gray-500 mt-1">
              Designed & Developed by Bharathikannan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
