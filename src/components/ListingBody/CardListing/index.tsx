import './styles.css';
import * as productService from '../../../services/product-service';
import CardProduct from '../../CardProduct';

export default function CardListing() {

    return(
        <section>
            <div className="dsf-container dsf-cardlisting-container dsf-mb20">
                {
                    productService.findByPrice(0, Number.MAX_VALUE).map(product => <CardProduct key={product.id} product={product} />)
                }
            </div>
        </section>
    )
}