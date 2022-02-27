import React, { useEffect, useState } from "react";
import useDiscount from "../../hooks/useDiscount";
import {
  getPercentageOfNumber,
  getPercentFromDiscountCode,
  getTotalPrice,
} from "../../Utils/generalUtils";
import { productForCart } from "../types/ProductTypes";
import CartInput from "./CartInput";

interface IProps {
  productsInCart: productForCart[];
}

const CartSummary: React.FC<IProps> = (props) => {
  console.count("cart summary rerendered");

  const { productsInCart } = props;
  const { discountCodes } = useDiscount();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const totalPriceCalculated = getTotalPrice(productsInCart);
    setTotalPrice(totalPriceCalculated);
  }, [productsInCart]);

  const handleSubmit = (discountCodeInput: string) => {
    const percentageFromDiscountCode = getPercentFromDiscountCode(
      discountCodeInput,
      discountCodes
    );
    let totalPrice = getTotalPrice(productsInCart);

    if (percentageFromDiscountCode !== undefined) {
      totalPrice =
        totalPrice -
        getPercentageOfNumber(totalPrice, percentageFromDiscountCode);
    }

    setTotalPrice(totalPrice);
  };

  return productsInCart.length === 0 ? null : (
    <div className="card w-100">
      <div className="card-body p-2">
        <h3 className="p-2">Cart Summary</h3>
        <h6 className="card-title text-center">PROMO CODE</h6>
        <div className="p-2">
          <div className="row">
            <CartInput handleSubmit={handleSubmit} />
          </div>

          <div className="row mt-2">
            <div className="col-9">
              <p>Subtotal: </p>
            </div>
            <div className="col-3">
              <p>{totalPrice}$</p>
            </div>
          </div>

          <div className="row">
            <div className="col-9">
              <p>Shipping: </p>
            </div>
            <div className="col-3">
              <p>Free</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center px-4">
          <button className="btn btn-light">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
