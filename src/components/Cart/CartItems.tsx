import useCart from "../../hooks/useCart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography/Typography";

function CartItems() {
  const { cartList, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  if (cartList.length === 0) {
    return (
      <Box>
        <Typography>Cart is Empty</Typography>
      </Box>
    );
  }
  const cartItemList = cartList.map((product) => {
    return (
      <div
        key={product["Product ID"] + Math.round(Math.random())}
        className="card w-80 my-2"
      >
        <div className="card-body">
          <div className="row ">
            <div className="col-11">
              <h5 className="card-title">{product["Name"]}</h5>
            </div>
            <div
              className="col-1 p-1"
              onClick={() => removeFromCart(product["Product ID"])}
            >
              <span style={{ cursor: "pointer" }}>X</span>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img width="80px" alt="show pic" src={product["Product URL"]} />
            </div>

            <div className="col-8">
              <p className="card-text">{product["Description"]}</p>
              <p className="lead">Price: {product["Price"]}$</p>
            </div>
          </div>

          <div className="container row mt-2 justify-content-end">
            <div className="col-2">
              <button
                className="btn btn-light"
                onClick={() => decreaseQuantity(product["Product ID"])}
              >
                -
              </button>
            </div>
            <div className="col-5">
              <p>Quantity: {product.Quantity}</p>
            </div>
            <div className="col-2">
              <button
                className="btn btn-light"
                onClick={() => increaseQuantity(product["Product ID"])}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{cartItemList}</>;
}

export default CartItems;
