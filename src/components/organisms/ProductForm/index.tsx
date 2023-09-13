"use client";
import { useEffect, useState } from "react";
import ProductService from "@/services/firebase/services/ProductService";
import Product from "@/services/firebase/entities/Product";
import NavbarButton from "@/components/layouts/NavbarButton";
import { useRouter } from "next/navigation";
import DefaultInput from "@/components/atoms/DefaultInput";
import { PRODUCT_INPUTS, ProductInput } from "@/utils/inputs";
import { calculateDiscount } from "@/utils/functions";

type ProductKeys = keyof Product;

interface ProductFormProps {
  backLink: string;
  buttonName: string;
  onSubmit: any;
  defaultProduct?: Product | null | undefined;
  inputs: ProductInput[];
}

const ProductForm = ({
  backLink,
  buttonName,
  onSubmit,
  defaultProduct,
  inputs,
}: ProductFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [product, setProduct] = useState<Product>(
    defaultProduct || {
      name: "",
      quantity: 0,
      price: 0,
    },
  );
  const { quantity, price } = product;

  const getTotalPrice = async () => {
    const totalPriceResponse = await ProductService.getTotalPrice();
    setTotalPrice(totalPriceResponse);
  };

  useEffect(() => {
    getTotalPrice();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(product);
    router.push(backLink);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(({ ...inputsOptions }: ProductInput, i) => (
        <DefaultInput
          key={i}
          value={
            product[inputsOptions.name as ProductKeys]
              ? product[inputsOptions.name as ProductKeys]
              : ""
          }
          {...inputsOptions}
          onChange={handleInputChange}
        />
      ))}
      <NavbarButton
        showPrice={price > 0 && quantity > 0}
        price={calculateDiscount(price * quantity) + totalPrice}
        isLoading={isLoading}
        name={buttonName}
      />
    </form>
  );
};

export default ProductForm;