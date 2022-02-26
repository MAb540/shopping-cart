import { useState } from "react";
import { product, productForCart } from "../components/types/ProductTypes";
import { productCartMapper } from "../Utils/cartUtility";

interface IState {
  productsInCart: productForCart[];
}

function useCart() {
  const [productsInCart, setProductsInCart] = useState<
    IState["productsInCart"]
  >([]);

  const increaseQuantity = (id: number): void => {
    const newProductsInCart = [...productsInCart].map((product) => {
      if (product["Product ID"] === id) {
        product.Quantity += 1;
        return product;
      }
      return product;
    });
    setProductsInCart(newProductsInCart);
  };

  const decreaseQuantity = (id: number): void => {
    const newProdsInCart = productsInCart.filter(
      (product) => product["Product ID"] === id
    )[0];

    if (newProdsInCart.Quantity > 1) {
      newProdsInCart.Quantity -= 1;
      setProductsInCart((prev) => {
        const newState = prev.filter((product) => product["Product ID"] !== id);
        return [...newState, newProdsInCart];
      });
    } else {
      setProductsInCart((prev) => {
        const newState = prev.filter((prod) => prod["Product ID"] !== id);
        return [...newState];
      });
    }
  };

  const removeFromCart = (id: number): void => {
    setProductsInCart((prev) => {
      const newState = prev.filter((product) => product["Product ID"] !== id);
      return [...newState];
    });
  };

  const handleCart = (product: product): void => {
    const newProdsInCart = productCartMapper(product);
    let isFound = false;
    const newProductsInCart = [...productsInCart].map((product) => {
      if (product["Product ID"] === newProdsInCart["Product ID"]) {
        isFound = true;
        product.Quantity += 1;
        return product;
      }
      return product;
    });
    setProductsInCart(newProductsInCart);
    if (!isFound) {
      setProductsInCart((prev) => [...prev, newProdsInCart]);
    }
    // setProductsInCart((prevState) => {
    //   let productAlreadyExists: productForCart | undefined = prevState.find(
    //     (product) => product["Product ID"] === newProdsInCart["Product ID"]
    //   );
    //   if (productAlreadyExists !== undefined) {
    //     productAlreadyExists.Quantity += 1;
    //     return [...prevState];
    //   } else {
    //     return [...prevState, newProdsInCart];
    //   }
    // });
    // let productAlreadyExists: productForCart | undefined = productsInCart.find(
    //   (product) => product["Product ID"] === newProdsInCart["Product ID"]
    // );
    // if (productAlreadyExists !== undefined) {
    //   productAlreadyExists.Quantity += 1;
    // } else {
    //   setProductsInCart((prev) => [...prev, newProdsInCart]);
    // }
    // const cartProduct = JSON.parse(
    //   JSON.stringify(products.find((product) => product["Product ID"] === id))
    // );
    // let newProdsInCart: any = productsInCart.find(
    //   (product) => product["Product ID"] === cartProduct["Product ID"]
    // );
    // if (newProdsInCart !== undefined) {
    //   newProdsInCart = JSON.parse(JSON.stringify(newProdsInCart));
    //   newProdsInCart.Quantity += 1;
    //   let newProducts = productsInCart.filter(
    //     (product: { [x: string]: any }) =>
    //       product["Product ID"] !== newProdsInCart["Product ID"]
    //   );
    //   newProducts.push(newProdsInCart);
    //   setProductsInCart(newProducts);
    // } else {
    //   const newProdsInCart = productCartMapper(cartProduct);
    //   setProductsInCart((prev) => [...prev, newProdsInCart]);
    // }
  };

  return {
    productsInCart,
    handleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  };
}

export default useCart;
