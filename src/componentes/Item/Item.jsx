import { Link } from 'react-router-dom'
import './Item.css'
import Button from '@mui/material/Button';



const Item = ({ item }) => {

    return (
        <div className="contenedorItem" key={item.id}>
            <img className="imageItem" src={item.img} alt={item.name} />
            <h3 className="nombreItem">{item.name}</h3>
            <Button variant="outlined" className="buttonVolver">
                <Link to={`/detail/${item.id}`} >VER MÁS</Link>
            </Button>
        </div>
    )
}

export default Item


