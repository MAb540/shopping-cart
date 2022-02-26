import { product } from "./types/ProductTypes";

interface productProps {
  products: product[];
  handleCart(product: product): void;
}

function Products(props: productProps) {
  const { products, handleCart } = props;

  console.count("product component rerendered");

  const productItem: JSX.Element[] = products.map((product: product) => {
    return (
      <div key={product["Product ID"]} className="col p-2">
        <div className="card  m-2 p-2" style={{ width: "16rem" }}>
          <img
            src={product["Product URL"]}
            className="card-img-top"
            alt="..."
            height={"250px"}
          />
          <div className="card-body">
            <h5 className="card-title">{product["Name"]}</h5>
            <p className="card-text">{product["Description"]}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Color: {product["Color"]}</li>
            <li className="list-group-item">Rating: {product["Rating Avg"]}</li>
            <li className="list-group-item">
              InSrock: {product["Inventory Count"]}
            </li>
            <li className="list-group-item">Price: {product["Price"]}</li>
          </ul>
          <div className="card-body row justify-content-center">
            <button
              className="btn btn-primary"
              onClick={() => handleCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row  row-cols-1 row-cols-md-3 g-4 ">{productItem}</div>
  );
}

export default Products;
