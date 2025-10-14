import { useState } from "react";
import { pedirDatos } from "../Helpers/pedirDatos.jsx";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()


    useEffect(() => {
        pedirDatos()
            .then((response) => {
                if (!categoryId)
                    setProductos(response)
                else
                    setProductos(response.filter((prod) => prod.category === categoryId))
            })
            .catch(() => {
                console.log(Error);

            })
    }, [categoryId])

    return (
        <div className="contenedor">

            <ItemList items={productos}></ItemList>
        </div>


    )
}

export default ItemListContainer