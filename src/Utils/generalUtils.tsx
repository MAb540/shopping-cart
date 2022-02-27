// type Result<T,E> = OK<T, E> | Error<T, E>;

import { productForCart } from "../components/types/ProductTypes";

export const getData = async (url: string): Promise<[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    const errorMessage = `An error occured: ${res.status}. \n${res.statusText}`;
    throw new Error(errorMessage);
  }

  const data = res.json();
  return data;
};

export function getPercentageOfNumber(
  requiredNumber: number,
  percentage: number
) {
  return Math.floor((requiredNumber / 100) * percentage);
}

export function getTotalPrice(products: productForCart[]) {
  let totalPrice: number = 0;
  let eachProdPrice: number = 0;

  if (products.length === 0) {
    return 0;
  }
  products.forEach((product) => {
    if (product.Quantity > 1) {
      eachProdPrice = product.Price;
      eachProdPrice = eachProdPrice * product.Quantity;
    } else {
      eachProdPrice = product.Price;
    }

    totalPrice += eachProdPrice;
    eachProdPrice = 0;
  });

  return totalPrice;
}

type discountCodeType = {
  code: string;
  value: number;
};

export function getPercentFromDiscountCode(
  userInputCode: string,
  arrayOfDiscountCodes: discountCodeType[]
): number | undefined {
  let percentValue = arrayOfDiscountCodes.find(
    (discountCode) => discountCode.code === userInputCode
  )?.value;
  return percentValue;
}
