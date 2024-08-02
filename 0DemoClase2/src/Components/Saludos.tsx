import React from "react";

const Saludos: React.FC <{ children:React.ReactElement, name:string}> = ( {name, children} ):React.ReactElement => {
    return (
        <>
            <h1>Bienvenido {name}</h1>
            { children }
        </>
    );
}

export default Saludos;
