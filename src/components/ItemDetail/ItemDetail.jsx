import classes from './ItemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, price, stock, description }) => {

    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {       
        const productToAdd = {
            id, img, name, price, quantity
        }

        addItem(productToAdd)
    }

    return (
        <div className={classes.detail}>
            <section>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
                <h2>${price}</h2>
                <p>Descripción: {description}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer className={classes.footer}>
                {
                    isInCart(id) ? (
                    <Link to='/cart'>Ver la Cesta de Compras</Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    ) 
                }
            </footer>
        </div>
        
    )
}

export default ItemDetail