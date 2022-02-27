import React, { useEffect, useState } from "react";
import { product } from "../components/types/ProductTypes";
import { getData } from "../Utils/generalUtils";

interface IState {
  products: product[];
}

function useProducts() {
  const [products, setProducts] = useState<IState["products"]>([]);

  useEffect(() => {
    (async () => {
      try {
        const url = "http://localhost:4000/products";
        const data = await getData(url);
        setProducts(data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return { products };
}

export default useProducts;
