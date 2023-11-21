import classes from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect, useState } from 'react'
import { createAdaptedCategories } from '../../adapters/createAdaptedCategories';


// import { getCategories } from '../../services/firebase/firestore/categories';
// import { useAsync } from '../../hooks/useAsync';

const NavBar = () => {
    const [categories, setCategories] = useState([])
    // const { categoryId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    return createAdaptedCategories(doc)
                    // const fields = doc.data()
                    // return { id: doc.id, ...fields}
                })

                setCategories(categoriesAdapted)
            })
            
    }, [])

    // const asyncFunction = () => getCategories()
    // console.log(getCategories)
    // const { data } = useAsync(asyncFunction, [])
    // console.log(data)

    return (
        <nav className={classes.nav}>
            <h1 onClick={() => navigate('/')} className={classes.nombreLogo}>Tienda Online Trigo Limpio</h1>
            <div>
                {
                    categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? classes.active : ''}>{cat.name}</NavLink>
                )}
                <CartWidget/>
            </div>

            {/*<div>
                <NavLink to={`category/${categories.slug}`} className={({ isActive }) => isActive ? classes.active : ''}>{categories.name}</NavLink>
            </div> */}

            {/* <div>
                <NavLink to='/category/hierbas' className={({ isActive }) => isActive ? classes.active : ''}>Hierbas</NavLink>
                <NavLink to='/category/cereales' className={({ isActive }) => isActive ? classes.active : ''}>Cereales</NavLink>
                <NavLink to='/category/legumbres' className={({ isActive }) => isActive ? classes.active : ''}>Legumbres</NavLink>
                <CartWidget />
            </div> */}

                {/* {
                    data.map(cat => <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? classes.active : ''}>{cat.name}</NavLink>)
                }

                <CartWidget /> */}
            

        </nav>
    )
}

export default NavBar