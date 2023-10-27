import classes from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav className={classes.nav}>
            <h1 onClick={() => navigate('/')} className={classes.nombreLogo}>Tienda Online Trigo Limpio</h1>
            <div>
                <NavLink to='/category/hierbas' className={({ isActive }) => isActive ? classes.active : ''}>Hierbas</NavLink>
                <NavLink to='/category/cereales' className={({ isActive }) => isActive ? classes.active : ''}>Cereales</NavLink>
                <NavLink to='/category/legumbres' className={({ isActive }) => isActive ? classes.active : ''}>Legumbres</NavLink>
                <CartWidget />
            </div>

        </nav>
    )
}

export default NavBar