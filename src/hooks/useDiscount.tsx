import { useEffect, useState } from "react";
import { getData } from "../Utils/generalUtils";

type discountCodeType = {
  code: string;
  value: number;
};
interface IState {
  discountCodes: discountCodeType[];
}

function useDiscount() {
  const [discountCodes, setDiscountCodes] = useState<IState["discountCodes"]>(
    []
  );

  useEffect(() => {
    (async () => {
      try {
        const url = "http://localhost:4000/discount-codes";
        const data = await getData(url);
        setDiscountCodes(data);
      } catch (err) {
        throw err;
      }
    })();
    console.log("useEffect called");
  }, []);

  return { discountCodes };
}

export default useDiscount;
