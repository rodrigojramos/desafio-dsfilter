import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
    product: ProductDTO;
  };

export default function CardProduct({ product }: Props) {
  return (
    <div className="dsf-product-description">
      <p>{product.name}</p>
      <h3>R$ {product.price}</h3>
    </div>
  );
}
