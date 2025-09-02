import { useState } from "react";
import ProductInfo from "./ProductInfo";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: "13000" },
    { id: 2, name: "Phone", price: "6000" },
    { id: 3, name: "Headphone", price: "1200" },
  ]);

  // delete function
  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Products List</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (EGP)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <ProductInfo
              key={item.id}
              product={item}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      {products.length === 0 && <p>No products available</p>}
    </div>
  );
}

export default Products;
