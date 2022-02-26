import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Cart from "./Cart";
import Products from "./Products";

function Container() {
  const { products } = useProducts();

  const {
    productsInCart,
    handleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  console.count("container rendered");

  return (
    <div className="container mt-4 p-4">
      <div className="row">
        <div className="col-md-8">
          <Products products={products} handleCart={handleCart} />
        </div>
        <div className="col-md-4  border border-primary ">
          <h3 className="mt-2 h3 text-center">Cart</h3>
          <Cart
            productsInCart={productsInCart}
            increaseQuantity={increaseQuantity}
            descreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
