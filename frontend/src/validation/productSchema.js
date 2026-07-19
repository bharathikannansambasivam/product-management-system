import * as Yup from "yup";

const productSchema = Yup.object({
  productName: Yup.string()
    .trim()
    .required("Product name is required")
    .min(3, "Minimum 3 characters")
    .max(100, "Maximum 100 characters"),

  description: Yup.string()
    .trim()
    .required("Description is required")
    .min(10, "Minimum 10 characters")
    .max(1000, "Maximum 1000 characters"),

  category: Yup.string().required("Please select a category"),

  brand: Yup.string().trim().required("Brand is required"),

  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be greater than 0"),

  status: Yup.string().required("Please select status"),

  product_image: Yup.mixed().required("Please upload an image"),
});

export default productSchema;
