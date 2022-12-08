
import React from "react";
import './style.css'
import { useState } from "react";

const  Botao = (props) => {
    return (
        <div className="container">
            <button className="botao" onClick={props.evento} 
                style={{width: `${props.largura}`,height: `${props.altura}`, margin: `${props.margem}`}} 
            >
                <h2> {props.nome}</h2>
            </button>
        </div>
    )

}

export default Botao;