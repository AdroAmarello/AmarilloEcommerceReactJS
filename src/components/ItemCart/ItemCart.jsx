import classes from './ItemCart.module.css';
import { useCart } from '../../context/CartContext';

const ItemCart = ({id, img, name, quantity, price}) => {

    const { removeItem } = useCart()

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(id)    
    }

    return (
        <div className={classes.itemCart}>
            <p>{name}</p>
            <img src={img}/>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${price}</p>
            <p>Subtotal: ${quantity * price}</p>
            <button onClick={handleRemoveItem}>Eliminar de la cesta</button>
        </div>
    )

}

export default ItemCart
