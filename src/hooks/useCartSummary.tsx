import { useEffect, useState } from "react";
import {
  getPercentageOfNumber,
  getPercentFromDiscountCode,
} from "../Utils/generalUtils";
import useCart from "./useCart";
import useDiscount from "./useDiscount";

function useCartSummary() {
  const { cartList, totalCartProductsPriceCalculated } = useCart();

  const [totalPrice, setTotalPrice] = useState<number>(
    totalCartProductsPriceCalculated
  );

  useEffect(() => {
    if (cartList.length === 0) {
      setTotalPrice(0);
    }

    setTotalPrice(totalCartProductsPriceCalculated);
  }, [cartList, totalCartProductsPriceCalculated]);

  const { discountCodes } = useDiscount();
  const handleSubmit = (discountCodeInput: string) => {
    const percentageFromDiscountCode = getPercentFromDiscountCode(
      discountCodeInput,
      discountCodes
    );
    let totalPriceAfterDiscount: number;
    if (percentageFromDiscountCode !== undefined) {
      totalPriceAfterDiscount =
        totalCartProductsPriceCalculated -
        getPercentageOfNumber(totalPrice, percentageFromDiscountCode);

      setTotalPrice(totalPriceAfterDiscount);
    }
  };
  return { totalPrice, handleSubmit };
}

export default useCartSummary;
