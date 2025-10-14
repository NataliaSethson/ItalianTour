import Item from "../Item/Item.jsx";
import "./ItemList.css";

const ItemList = ({ items }) => {
   return (
      <div className="contenedorItems">
         {items.map((el) => (
            <Item key={el.id} item={el} />
         ))}
      </div>
   );
};

export default ItemList;
