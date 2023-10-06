import classes from './NavBar.module.css';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <h3 className={classes.nombreLogo}>Tienda Online Trigo Limpio</h3>
            <div>
                <Button label={'Hierbas'}/>
                <Button label={'Cereales'}/>
                <Button label={'Legumbres'}/>
                <CartWidget />
            </div>

        </nav>
    )
}

export default NavBar