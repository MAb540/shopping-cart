import React from "react";
import { productForCart } from "../types/ProductTypes";

interface IProps {
  productsInCart: productForCart[];
}

function getTotalPrice(products: IProps["productsInCart"]) {
  let totalPrice: number = 0;
  let eachProdPrice: number = 0;

  if (products.length === 0) {
    return undefined;
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

const CartSummary: React.FC<IProps> = (props) => {
  console.count("cart summary rerendered");

  const totalPrice = getTotalPrice(props.productsInCart);

  return totalPrice === undefined ? null : (
    <div className="card w-100">
      <div className="card-body p-2">
        <h3 className="p-2">Cart Summary</h3>
        <h6 className="card-title text-center">PROMO CODE</h6>
        <div className="p-2">
          <div className="row">
            <div className="col-9 ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Coupon Code"
              />
            </div>
            <div className="col-2 ">
              <button className="btn btn-light">Apply</button>
            </div>
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
