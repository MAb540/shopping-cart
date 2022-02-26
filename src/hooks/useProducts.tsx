import React, { useEffect, useState } from "react";
import { product } from "../components/types/ProductTypes";

const getProductsData = async () => {
  const url = "http://localhost:4000/products";
  const res = await fetch(url);

  if (!res.ok) {
    const errorMessage = `An error occured: ${res.status}. \n${res.statusText}`;
    throw new Error(errorMessage);
  }

  const data = res.json();
  return data;
};

interface IState {
  products: product[];
}

function useProducts() {
  const [products, setProducts] = useState<IState["products"]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProductsData();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return { products };
}

export default useProducts;
