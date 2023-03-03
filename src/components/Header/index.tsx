import { useContext } from 'react';
import { ContextProductsCount } from '../../utils/context-products';
import './styles.css';

export default function Header() {

    const {contextProductsCount} = useContext(ContextProductsCount);

    return(
        <header className="dsf-header-container dsf-mb20">
            <nav className="dsf-container dsf-navbar">
                <div>
                    <h1>DSFilter</h1>
                </div>
                <div>
                    <p>{contextProductsCount} produto(s)</p>
                </div>
            </nav>
        </header>
    )
}