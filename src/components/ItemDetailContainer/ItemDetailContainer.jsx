import { useState, useEffect } from "react"
import { getProductById, getProductsByCategory } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response =>{
                setProduct(response)
            })
    }, [itemId])

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <ItemDetail {...product}/>
            
        </div>
    )
}

export default ItemDetailContainer