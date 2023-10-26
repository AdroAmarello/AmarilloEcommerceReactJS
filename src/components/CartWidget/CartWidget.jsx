import classes from './CartWidget.module.css';
import cestaIcon from '../../assets/basket-shopping-solid.svg';

const CartWidget = () =>{
    return (
        <>
            <button className={`${classes.cestaIcon}`}>
                <img src={cestaIcon}  alt="Cesta" /> 0
            </button>
        </>
    )
}

export default CartWidget