import { atom } from "recoil";
import { productForCart } from "../types/ProductTypes";

interface cartState {
  productsInCart: productForCart[];
}

export const cartListState = atom({
  key: "cartListState",
  default: [] as cartState["productsInCart"],
});
