function ProductInfo({ product, onDelete }) {
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </td>
      </tr>
    );
  }
  
  export default ProductInfo;
  