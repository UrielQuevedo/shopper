export const calculateDiscount = (
  price: number,
  discountAmount: number,
): number => price - price * (discountAmount * 0.01);

export const getCurrentDate = (): string => {
  const currentDate = new Date();
  const day = addLeadingZero(currentDate.getDate());
  const month = addLeadingZero(currentDate.getMonth() + 1);
  const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
}

const addLeadingZero = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
}