 import { ItemListprops } from './types';


function ItemList<Item>({items, renderCallback}: ItemListprops<Item>) {
    return (
        <>
            <ul>
                { items.map((item,index) => {
                    return <li key={`${index}`} >{renderCallback(item)}</li>
                })}
            </ul>
        </>
    )
} 
export default ItemList;
