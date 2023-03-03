import './styles.css';

export default function CardFilter() {

    return(
        <section>
            <form>
                <div className="dsf-container dsf-cardfilter-container dsf-mb20">
                    <div className="dsf-input">
                        <input 
                            type="text" 
                            placeholder="Preço mínimo" />
                    </div>
                    <div className="dsf-input">
                        <input 
                            type="text" 
                            placeholder="Preço máximo" />
                    </div>
                    <div className="dsf-button">
                        <button type="submit">Filtrar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}