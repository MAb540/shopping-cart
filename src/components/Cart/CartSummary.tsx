import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useCartSummary from "../../hooks/useCartSummary";
import useSideBar from "../../hooks/useSideBar";

import CartInput from "./CartInput";

const CartSummary: React.FC = () => {
  const { totalPrice, handleSubmit } = useCartSummary();
  const { toggleDrawer } = useSideBar();
  if (totalPrice === 0) {
    return null;
  }

  return (
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
          <Button variant="text" onClick={() => toggleDrawer()}>
            <Link to="checkout" style={{ textDecoration: "none" }}>
              {" "}
              Proceed to Checkout{" "}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
