import { useAsync } from '../hooks/useAsync'

import ItemList from "../ItemList/ItemList"

import { getProducts } from '../../services/firebase/firestore/products'

import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) =>{
    const { categoryId } = useParams()
    
    const asyncFuntion = () => getProducts ( categoryId )

    const { data: products, loading, error } = useAsync (asyncFuntion, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos...</h1>
    }

    if(products.lenght === 0) {
        return <h1>No existen productos para esta categoría</h1>
    }

    return (
        <>
            <h1>{!categoryId ? greeting : (greeting + categoryId)}</h1>
            <ItemList products={products}/>
            
        </>
    )
}

export default ItemListContainer