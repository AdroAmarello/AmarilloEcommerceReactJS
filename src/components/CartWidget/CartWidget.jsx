import Button from '../Button/Button';
import classes from './CartWidget.module.css';
import cestaIcon from '../../assets/basket-shopping-solid.svg';


const CartWidget = () =>{
    return (
        <>
            <button className={classes.cestaIcon}>
                <img src={cestaIcon}  alt="" />
                0
            </button>
        </>
    )
}

export default CartWidget