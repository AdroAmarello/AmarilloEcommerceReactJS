import classes from './Item.module.css';
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return (
        <div className={classes.item}>
            <h2>{name}</h2>
            <img src={img}/>
            <p>${price}</p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
        
    )
}

export default Item