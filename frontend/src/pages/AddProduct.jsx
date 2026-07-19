import { useFormik } from "formik";
import productSchema from "../validation/productSchema";
import api from "../services/api";
import toast from "react-hot-toast";
import { useRef } from "react";
import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AddProduct() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      category: "",
      brand: "",
      price: "",
      status: "",
      product_image: null,
    },

    validationSchema: productSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const slug = values.productName
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-");

        // Check duplicate product
        const check = await api.get(
          `/items/products?filter[slug][_eq]=${slug}`
        );

        if (check.data.data.length > 0) {
          toast.error("Product already exists");
          return;
        }
        let imageId = null;

        if (values.product_image) {
          const formData = new FormData();

          formData.append("file", values.product_image);

          const upload = await api.post("/files", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          imageId = upload.data.data.id;
        }
        // Add product
        await api.post("/items/products", {
          productName: values.productName.trim(),
          slug,
          description: values.description.trim(),
          category: values.category,
          brand: values.brand.trim(),
          price: Number(values.price),
          status: values.status,
          product_image: imageId,
        });
        resetForm();
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        toast.success("Product Added Successfully");

        navigate("/products");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });

  return (
    <>
      <Navbar />{" "}
      <div className="min-h-[calc(100vh-64px)] bg-gray-100 py-5 px-4">
        {" "}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
          {/* Header */}
          <div className="border-b px-6 py-4 ">
            <h2 className="text-2xl font-bold text-[#243B7B]">Add Product</h2>
          </div>

          <ProductForm
            formik={formik}
            onSubmit={formik.handleSubmit}
            fileInputRef={fileInputRef}
            buttonText="Add Product"
          ></ProductForm>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
