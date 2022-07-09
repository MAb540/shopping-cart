import React, { useState } from "react";

interface IState {
  discountCode: string;
}

interface IProps {
  handleSubmit(discountCodeInput: string): void;
}

function CartInput(props: IProps) {
  const [discountCode, setDiscountCode] = useState<IState["discountCode"]>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };
  const { handleSubmit } = props;

  return (
    <>
      <div className="col-9 ">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Coupon Code"
          value={discountCode}
          maxLength={10}
          minLength={3}
          onChange={handleChange}
        />
      </div>
      <div className="col-2 ">
        <button
          className="btn btn-light"
          onClick={() => {
            handleSubmit(discountCode);
            setDiscountCode("");
          }}
        >
          Apply
        </button>
      </div>
    </>
  );
}

export default CartInput;
