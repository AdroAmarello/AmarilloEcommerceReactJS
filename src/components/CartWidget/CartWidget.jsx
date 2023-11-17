import classes from './CartWidget.module.css';
import cestaIcon from '../../assets/basket-shopping-solid.svg';
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';

const CartWidget = () =>{
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <>
            <button className={`${classes.cestaIcon}`} onClick={() => navigate('/cart')}>
                <img src={cestaIcon}  alt="Cesta" /> 
                {totalQuantity}
            </button>
        </>
    )
}

export default CartWidget