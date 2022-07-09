import { useRecoilState } from "recoil";
import { cartListState } from "../components/recoilStateAtoms/cartAtom";
import { product } from "../components/types/ProductTypes";
import { productCartMapper } from "../Utils/cartUtility";
import { getTotalPrice } from "../Utils/generalUtils";
import useSideBar from "./useSideBar";

function useCart() {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const { toggleDrawer } = useSideBar();

  const increaseQuantity = (id: number): void => {
    const newCartList = cartList.map((p) => {
      if (p["Product ID"] === id) {
        return { ...p, Quantity: p.Quantity + 1 };
      }
      return p;
    });
    setCartList(newCartList);
  };

  const decreaseQuantity = (id: number): void => {
    const existingProductInCart = cartList.filter(
      (product) => product["Product ID"] === id
    )[0];

    if (existingProductInCart.Quantity > 1) {
      setCartList((oldCartList) => {
        const newCartList = oldCartList.map((p) => {
          if (p["Product ID"] === id) {
            return { ...p, Quantity: p.Quantity - 1 };
          }
          return p;
        });
        return newCartList;
      });
    } else {
      const newCartList = cartList.filter((prod) => prod["Product ID"] !== id);
      if (newCartList.length === 0) {
        toggleDrawer();
      }
      setCartList(newCartList);
    }
  };

  const removeFromCart = (id: number): void => {
    const newCartList = cartList.filter((prod) => prod["Product ID"] !== id);
    if (newCartList.length === 0) {
      toggleDrawer();
    }
    setCartList(newCartList);
  };

  const addToCart = (product: product): void => {
    const newProdsInCart = productCartMapper(product);

    setCartList((oldCartList) => {
      let isFound = false;
      const prodsAlreadyExists = oldCartList.map((p) => {
        if (p["Product ID"] === newProdsInCart["Product ID"]) {
          isFound = true;
          return { ...p, Quantity: p.Quantity + 1 };
        }
        return p;
      });

      if (!isFound) {
        return [...oldCartList, newProdsInCart];
      }
      return prodsAlreadyExists;
    });
  };

  const totalCartProductsPriceCalculated = getTotalPrice(cartList);

  return {
    cartList,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalCartProductsPriceCalculated,
  };
}

export default useCart;
