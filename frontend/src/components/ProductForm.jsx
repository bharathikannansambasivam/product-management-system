function ProductForm({
  onSubmit,
  formik,
  fileInputRef,
  buttonText = "Submit",
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {/* Product Name */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-2">Product Name</label>

        <input
          type="text"
          name="productName"
          placeholder="Enter product name"
          value={formik.values.productName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5
          focus:border-[#243B7B] focus:ring-2 focus:ring-[#243B7B]/20 outline-none"
        />

        {formik.touched.productName && formik.errors.productName && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.productName}
          </p>
        )}
      </div>
      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5
          focus:border-[#243B7B] outline-none"
        >
          <option value="">Select</option>
          <option>Camera</option>
          <option>Embedded Vision</option>
          <option>Industrial Camera</option>
          <option>USB Camera</option>
          <option>MIPI Camera</option>
          <option>GigE Camera</option>
          <option>NVIDIA Camera</option>
          <option>Accessories</option>
          <option>Others</option>
        </select>{" "}
        {formik.touched.category && formik.errors.category && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.category}</p>
        )}
      </div>

      {/* Brand */}
      <div>
        <label className="block text-sm font-medium mb-2">Brand</label>
        <input
          type="text"
          name="brand"
          placeholder="e-con Systems"
          value={formik.values.brand}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5
          focus:border-[#243B7B] outline-none"
        />{" "}
        {formik.touched.brand && formik.errors.brand && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.brand}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-2">Price</label>

        <input
          type="number"
          name="price"
          placeholder="₹999"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5
          focus:border-[#243B7B] outline-none"
        />
        {formik.touched.price && formik.errors.price && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.price}</p>
        )}
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium mb-2">Status</label>

        <select
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5
          focus:border-[#243B7B] outline-none"
        >
          <option value="">Select</option>
          <option>Available</option>
          <option>Out Of Stock</option>
        </select>
        {formik.touched.status && formik.errors.status && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.status}</p>
        )}
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-2">Description</label>

        <textarea
          rows="5"
          name="description"
          placeholder="Enter product description..."
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5
          resize-none focus:border-[#243B7B] outline-none"
        />
        {formik.touched.description && formik.errors.description && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.description}
          </p>
        )}
      </div>

      {/* Image*/}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-2">Product Image</label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => {
            formik.setFieldValue("product_image", e.target.files[0]);
          }}
          className="w-full rounded-lg border border-gray-300 p-2"
        />
        {formik.touched.product_image && formik.errors.product_image && (
          <p className="text-red-500 text-xs mt-1">
            {formik.errors.product_image}
          </p>
        )}
        {formik.values.product_image && (
          <p className="mt-2 text-sm text-green-600">
            {formik.values.product_image.name}
          </p>
        )}
      </div>

      {/* Button */}
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-[#243B7B] transition-colors duration-200 hover:bg-green-800
    text-white px-8 py-2.5 rounded-lg font-medium
    disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formik.isSubmitting ? "Saving..." : buttonText}{" "}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
