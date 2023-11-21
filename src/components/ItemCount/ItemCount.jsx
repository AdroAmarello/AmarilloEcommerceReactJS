import { useCount } from '../../hooks/useCount';


const ItemCount = ({ onAdd, stock }) => {
    const {count, decrement, increment} = useCount((stock>0 ? 1 : 0), stock);
        
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar a la cesta</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount