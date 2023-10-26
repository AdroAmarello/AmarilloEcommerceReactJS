import classes from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to='/' className={classes.nombreLogo}>Tienda Online Trigo Limpio</NavLink>
            <div>
                <NavLink to='/category/hierbas'>Hierbas</NavLink>
                <NavLink to='/category/cereales'>Cereales</NavLink>
                <NavLink to='/category/legumbres'>Legumbres</NavLink>
                <CartWidget />
            </div>

        </nav>
    )
}

export default NavBar