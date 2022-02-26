import CartItems from "./Cart/CartItems";
import CartSummary from "./Cart/CartSummary";
import { productForCart } from "./types/ProductTypes";

interface cartProps {
  productsInCart: productForCart[];
  increaseQuantity(id: number): void;
  descreaseQuantity(id: number): void;
  removeFromCart(id: number): void;
}

function Cart(props: cartProps) {
  const {
    productsInCart,
    increaseQuantity,
    descreaseQuantity,
    removeFromCart,
  } = props;

  return (
    <div className="container mt-3">
      <div style={{ height: "20rem", overflowY: "auto" }}>
        <CartItems
          productsInCart={productsInCart}
          increaseQuantity={increaseQuantity}
          descreaseQuantity={descreaseQuantity}
          removeFromCart={removeFromCart}
        />
      </div>

      <br />
      <hr />
      <CartSummary productsInCart={productsInCart} />
    </div>
  );
}

export default Cart;
