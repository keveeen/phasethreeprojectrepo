import React, {useState} from "react";
import ItemEdit from "./ItemEdit";

const Item = ({seasons, setSeasons, item, clickedItems, setClickedItems, deleteItem, editedItem, isDesigner}) => {

const [editMode, setEditMode] = useState(false)
const [selectedItem, setSelectedItem] = useState(item)

const {color, size, price, name, stock_quantity, id } = item

return (


<div >
        {editMode ? (<ItemEdit seasons={seasons} setSeasons={setSeasons} 
                               editedItem={editedItem} item={item} 
                               setEditMode={setEditMode} clickedItems={clickedItems} 
                               selectedItem={selectedItem} deleteItem={deleteItem} 
                               setClickedItems={setClickedItems} isDesigner={isDesigner} />)
        : 

        (<div className="item">

        <h5 className="itemText" style={{fontWeight: 500}} >{name}</h5>
        <h6 className="itemText">{color}</h6>
        <h6 className="itemText">{size}</h6>
        <h6 className="itemText">{price}</h6>
        <h6 className="itemText"> Stock {stock_quantity}</h6>
        <button className="editButton" onClick={() => setEditMode(true)}>EDIT</button>
        </div>)}
</div>
    
)}

export default Item