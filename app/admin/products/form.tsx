"use client";

import React, { useState } from "react";
import { Formik, Form, FieldArray, FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  createProduct,
  updateProduct,
} from "@/lib/features/product/productThunk";
import { IImage, IProduct } from "@/lib/features/product/type";
import { AppDispatch, RootState } from "@/lib/store";
import { Files } from "@/components/inputs/uploadFile";
import { UploadChangeParam, UploadFile } from "antd/es/upload/interface";
import * as Yup from "yup";
import Input from "@/components/textInput";
import { CirclePlus, CircleX } from "lucide-react";
import Button from "@/components/button";

interface ProductFormProps {
  product: IProduct | null;
  selectedProductId: string | null;
  onDismiss: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  selectedProductId,
  onDismiss,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [files, setFiles] = useState<UploadFile<any>[]>([]);
  const { loading } = useSelector((state: RootState) => state.product);

  const handleProductImage = (e: UploadChangeParam<UploadFile<any>>) => {
    setFiles(e.fileList);
    console.log("Files Updated:", e.fileList);
  };

  const item = product;

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .min(0, "Price must be a positive value"),
    category: Yup.string().required("Category is required"),
    tag: Yup.string().required("Tag is required"),
    stock: Yup.number()
      .required("Stock quantity is required")
      .min(0, "Stock must be a positive value"),
    specifications: Yup.array().of(
      Yup.object().shape({
        key: Yup.string().required("Specification key is required"),
        value: Yup.string().required("Specification value is required"),
      })
    ),
  });

  const initialValues = {
    name: item?.name || "",
    description: item?.description || "",
    price: item?.price || 0,
    category: item?.category || "",
    tag: item?.tag || "",
    stock: item?.stock || 0,
    specifications: item?.specifications || [{ key: "", value: "" }],
  };

  const handleSubmit = async (values: IProduct) => {
    try {
      const productData = {
        ...values,
        images: files
          ?.map((f: UploadFile<any>) => ({
            url: f?.thumbUrl || "",
            type: f?.type || "",
            name: f?.name || "",
          }))
          .filter((file) => file.url),
      };
        await dispatch(createProduct(productData));
        onDismiss();
        console.log("Product added successfully");
      
    } catch (error) {
      console.error("Error adding or updating product:", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800">
        {selectedProductId ? "Edit Product" : "Add Product"}
      </h1>
      <Formik
        key={selectedProductId}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Product Name"
                name="name"
                type="text"
                placeholder="Enter product name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name ? errors.name : ""}
              />
              <Input
                label="Price"
                name="price"
                type="number"
                placeholder="Enter price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.price && errors.price ? errors.price : ""}
              />
              <Input
                label="Category"
                name="category"
                type="text"
                placeholder="Enter category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.category && errors.category ? errors.category : ""
                }
              />
              <Input
                label="Tag"
                name="tag"
                type="text"
                placeholder="Enter tag"
                value={values.tag}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.tag && errors.tag ? errors.tag : ""}
              />
              <Input
                label="Stock"
                name="stock"
                type="number"
                placeholder="Enter stock quantity"
                value={values.stock}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.stock && errors.stock ? errors.stock : ""}
              />
            </div>

            <Input
              label="Description"
              name="description"
              type="textarea"
              isTextarea={true}
              placeholder="Enter product description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.description && errors.description
                  ? errors.description
                  : ""
              }
            />

            <FieldArray name="specifications">
              {({ push, remove }) => (
                <div>
                  <h3 className="text-lg font-medium">Specifications</h3>
                  {values.specifications.map(
                    (spec: { key: string; value: string }, index: number) => (
                      <div key={index} className="flex items-center gap-4 my-2">
                        <Input
                          label="Key"
                          name={`specifications[${index}].key`}
                          type="text"
                          placeholder="e.g., Weight"
                          value={spec.key}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.specifications?.[index]?.key &&
                            typeof errors.specifications?.[index] ===
                              "object" &&
                            errors.specifications?.[index]?.key
                              ? (
                                  errors.specifications as FormikErrors<{
                                    key: string;
                                    value: string;
                                  }>[]
                                )?.[index]?.key
                              : ""
                          }
                        />
                        <Input
                          label="Value"
                          name={`specifications[${index}].value`}
                          type="text"
                          placeholder="e.g., 1.5kg"
                          value={spec.value}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.specifications?.[index]?.value &&
                            typeof errors.specifications?.[index] ===
                              "object" &&
                            errors.specifications?.[index]?.value
                              ? (
                                  errors.specifications as FormikErrors<{
                                    key: string;
                                    value: string;
                                  }>[]
                                )?.[index]?.value
                              : ""
                          }
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500"
                        >
                          <span>
                            <CircleX />
                          </span>
                        </button>
                      </div>
                    )
                  )}
                  <button
                    type="button"
                    onClick={() => push({ key: "", value: "" })}
                    className="mt-2 text-blue-500 border-2 p-2 flex gap-2 items-center"
                  >
                    <CirclePlus /> <span>Add Specification</span>
                  </button>
                </div>
              )}
            </FieldArray>

            <div className="my-4">
              <Files fileList={files} handleChange={handleProductImage} />
            </div>

            {item?.images && item.images.length > 0 && (
              <div>
                {item.images.map((img: IImage, index: number) => (
                  <div key={index}>
                    <Image
                      src={img.url}
                      width={100}
                      height={40}
                      alt="Product"
                    />
                  </div>
                ))}
              </div>
            )}

            <Button type="submit" loading={loading}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
