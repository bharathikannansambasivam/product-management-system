import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { useFormik } from "formik";
import productSchema from "../validation/productSchema";
import ProductForm from "../components/ProductForm";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function EditProduct() {
  const { id } = useParams();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      productName: product?.productName || "",
      description: product?.description || "",
      category: product?.category || "",
      brand: product?.brand || "",
      price: product?.price || "",
      status: product?.status || "",
      product_image: null,
    },

    validationSchema: productSchema,

    onSubmit: async (values) => {
      try {
        let imageId = product?.product_image?.id;

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

        await api.patch(`/items/products/${id}`, {
          productName: values.productName.trim(),
          description: values.description.trim(),
          category: values.category,
          brand: values.brand.trim(),
          price: Number(values.price),
          status: values.status,
          product_image: imageId,
        });
        toast.success("Product Updated Successfully");
        navigate("/products");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });
  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    try {
      const res = await api.get(
        `/items/products/${id}?fields=*,product_image.*`
      );

      setProduct(res.data.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-5 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
          <div className="border-b px-6 py-4">
            <h2 className="text-2xl font-bold text-[#243B7B]">Edit Product</h2>
          </div>
          <ProductForm
            formik={formik}
            onSubmit={formik.handleSubmit}
            buttonText="Update Product"
            fileInputRef={fileInputRef}
          />
        </div>
      </div>
    </>
  );
}

export default EditProduct;
