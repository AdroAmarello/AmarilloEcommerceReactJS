import classes from './ItemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, img, price, stock, description }) => {
    return (
        <div className={classes.detail}>
            <h2>{name}</h2>
            <img src={img}/>
            <h2>${price}</h2>
            <p>Descripción: {description}</p>
            <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log('cantidad agregada: '+ quantity)}/>
        </div>
        
    )
}

export default ItemDetail