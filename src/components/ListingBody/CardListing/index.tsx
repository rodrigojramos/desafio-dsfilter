import "./styles.css";
import { ProductDTO } from "../../../models/product";

type Props = {
  product?: ProductDTO;
};

export default function CardListing({ product }: Props) {
  return (
    <div className="dsf-product-description">
      <p>{product?.name}</p>
      <h3>R$ {product?.price.toFixed(2)}</h3>
    </div>
  );
}
