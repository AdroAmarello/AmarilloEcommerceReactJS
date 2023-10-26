// import classes from './ItemCount.module.css';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div>
            <h2>{quantity}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(quantity)}>Agregar a la cesta</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount