"use client";
import { useEffect, useState } from "react";
import DefaultInput from "@/components/atoms/DefaultInput";
import { InputProps, LIST_SHOPPER_INPUTS } from "@/utils/inputs";
import DefaultNavbarButton from "@/components/atoms/DefaultNavbarButton";
import ListShopper from "@/services/firebase/entities/ListShopper";
import Styles from "./_style.module.scss";
import { getCurrentDate } from "@/utils/functions";

type ListShopperKeys = keyof ListShopper;

interface ListShopperProps {
  buttonName: string;
  onSubmit: any;
  defaultListShopper?: ListShopper | null | undefined;
}

const ListShopperForm = ({
  buttonName,
  onSubmit,
  defaultListShopper,
}: ListShopperProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [listShopper, setListShopper] = useState<ListShopper>(
    defaultListShopper || {
      title: "",
      discountAmount: 0,
      date: getCurrentDate(),
      userId: "",
    },
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setListShopper((prevListShopper) => ({
      ...prevListShopper,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await onSubmit(listShopper);
  };

  useEffect(() => {
    if (defaultListShopper) setListShopper(defaultListShopper);
  }, [defaultListShopper]);

  return (
    <form onSubmit={handleSubmit}>
      {LIST_SHOPPER_INPUTS.map(({ ...inputsOptions }: InputProps, i) => (
        <DefaultInput
          key={i}
          value={
            listShopper[inputsOptions.name as ListShopperKeys]
              ? listShopper[inputsOptions.name as ListShopperKeys]
              : ""
          }
          {...inputsOptions}
          onChange={handleInputChange}
        />
      ))}
      <div className={Styles.navbar}>
        <div className={Styles.buttonContainer}>
          <DefaultNavbarButton name={buttonName} isLoading={isLoading} />
        </div>
      </div>
    </form>
  );
};

export default ListShopperForm;