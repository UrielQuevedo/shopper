import { GLOBAL_DISCOUNT } from "./constants";

export const calculateDiscount = (
  price: number,
): number => price - price * GLOBAL_DISCOUNT;
