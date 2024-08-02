import React from 'react';

interface Productprops {
    name: string;
    description: string;
    price: number;
    active?:boolean;
    images?: string[];
}

const Producto: React.FC<Productprops> = ( {name, description, price } ) => {
    return (
        <div>
            <p> {name} </p>
            <p> Description: {description} </p>
            <p> Precio: {price} </p>
        </div>
    );
}

export default Producto;
