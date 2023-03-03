import './styles.css';
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import CardFilter from "./CardFilter";
import CardListing from "./CardListing";
import * as productService  from '../../services/product-service';

type MinMax = {
    min: number;
    max: number;
}

export default function ListingBody() {

    const [product, setProduct] = useState<ProductDTO[]>([]);

    const [filterMinMax, setFilterMinMax] = useState<MinMax>({
        min: 0,
        max: Number.MAX_VALUE
      });

    useEffect(() => {
        setProduct(productService.findByPrice(filterMinMax.min, filterMinMax.max));
    }, [filterMinMax]);

    function handleMinMax(min: number, max: number) {
        setFilterMinMax({...filterMinMax, min: min, max: max});
    }

    return (
        <main>
            <CardFilter onFilter={handleMinMax} />
            <section>
                <div className="dsf-container dsf-cardlisting-container dsf-mb20">
                    {
                        product.map(product => ( 
                        <CardListing key={product.id} product={product}/>
                         ))
                    }
                </div>
            </section>
        </main>
    )
}