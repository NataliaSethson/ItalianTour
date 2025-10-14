import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirProductosPorId } from "../Helpers/pedirDatos.jsx"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {

    setLoading(true)

    pedirProductosPorId(Number(itemId))
      .then((resp) =>
        setItem(resp)
      )
      .finally(() =>
        setLoading(false)
      )
  }, [itemId])

  return (

    <div>
      {
        loading
          ? <p>CARGANDO...</p>
          : <ItemDetail item={item} />
      }
    </div>

  )
}

export default ItemDetailContainer