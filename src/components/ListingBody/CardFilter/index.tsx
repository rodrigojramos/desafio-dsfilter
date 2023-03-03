import { useState } from 'react';
import './styles.css';

type FormData = {
    min?: number;
    max?: number;
}

type Props = {
    onFilter: Function;
}

export default function CardFilter({ onFilter } : Props) {

    const [formData, setFormData] = useState<FormData>({})

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    function handleButtonClick(event: any) {
        event.preventDefault();
        const min = formData.min || 0;
        const max = formData.max || Number.MAX_VALUE;
        onFilter(min, max);
    }

    return(
        <section>
            <form>
                <div className="dsf-container dsf-cardfilter-container dsf-mb20">
                    <div className="dsf-input">
                        <input 
                            name="min"
                            value={formData.min || ""}
                            type="text" 
                            placeholder="Preço mínimo"
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className="dsf-input">
                        <input 
                            name="max"
                            value={formData.max || ""}
                            type="text" 
                            placeholder="Preço máximo"
                            onChange={handleInputChange} 
                            />
                    </div>
                    <div className="dsf-button">
                        <button onClick={handleButtonClick} type="submit">Filtrar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}