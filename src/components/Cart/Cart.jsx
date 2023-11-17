import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Cart = () => {
    const { cart } = useCart()

    return (
        <div>
            <h1>Cesta</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h3>{prod.name}</h3>
                            </div>
                        )
                    })
                }
            </div>

            <Link to='/checkout'>Finalizar Compra</Link>
        </div>
    )
}

export default Cart