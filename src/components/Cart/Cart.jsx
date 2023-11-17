import classes from './Cart.module.css';
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { count } from 'firebase/firestore';

import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart , clearCart , total} = useCart()

    const handleClearCart = (e) => {
        e.stopPropagation()
        clearCart()
    }    

    return (
        <div className={classes.cart}>
            <h1>Cesta</h1>
            <div>
                {
                    cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
                }
            </div>
            <footer className={classes.footer}>
                {
                    cart.length !== 0 ? 
                    <div>
                        <h2>Importe total: ${total}</h2>
                        <Link to='/checkout'>Finalizar Compra</Link>
                        <button onClick={handleClearCart}>Vaciar cesta</button>
                    </div> :
                    <>
                        <h2>Su cesta de compras se encuentra vacía</h2>
                        <h3>Eche un vistazo a nuestros productos</h3>
                        <Link to='/'>Volver a la tienda</Link>
                    </>
                }
            </footer>
        </div>
    )
}

export default Cart