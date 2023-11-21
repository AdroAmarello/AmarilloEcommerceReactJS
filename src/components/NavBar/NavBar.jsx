import classes from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { createAdaptedCategories } from '../../adapters/createAdaptedCategories';


const NavBar = () => {
    const [categories, setCategories] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    return createAdaptedCategories(doc)
                    
                })

                setCategories(categoriesAdapted)
            })
            
    }, [])
    
    return (
        <nav className={classes.nav}>
            <h1 onClick={() => navigate('/')} className={classes.nombreLogo}>Tienda Online Trigo Limpio</h1>
            <div>
                {
                    categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? classes.active : ''}>{cat.name}</NavLink>
                )}
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar