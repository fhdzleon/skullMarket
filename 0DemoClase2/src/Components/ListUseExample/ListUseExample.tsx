//vendor
import React from 'react';
// components
import ItemList from '../ItemList/ItemList';
 
//utils 
import { orders, orderRenderer } from './utils';


const ListUseExample: React.FC = () => {
    return (
        <div>
            <ItemList items={orders} renderCallback={orderRenderer} />
        </div>
    );
}

 

export default ListUseExample;
