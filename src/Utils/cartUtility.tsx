import { product, productForCart } from "../components/types/ProductTypes";

export function productCartMapper(cartProduct: product) {
  let newProductInCart: productForCart = {
    "Product ID": cartProduct["Product ID"],
    Name: cartProduct["Name"],
    "Product URL": cartProduct["Product URL"],
    Price: cartProduct["Price"],
    Description: cartProduct["Description"],
    Color: cartProduct["Color"],
    Quantity: 1,
  };
  return newProductInCart;
}
