import './ItemDetail.css'
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';



const ItemDetail = ({ item }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="contenedorDetail">
            <hr></hr>
            <img className="imageDetail" src={item.img} alt={item.name} />
            <h3 className="nombreDetail">{item.name}</h3>
            <p className="descriptionDetail">{item.description}</p>
            <Button variant="outlined" className="buttonVolver" onClick={handleVolver} >VOLVER</Button>
        </div>

    )
}

export default ItemDetail