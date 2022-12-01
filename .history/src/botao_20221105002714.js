
import React from "react";
import './botao.css'
import { Touch } from "react";
import { useState, useEffect } from "react";
function Botao(props) {
    const mudar = () => {
        console.log('dentro de mudar')
    }

    return (
        <button className="main" onClick={mudar}>
            <h2>Dentro do componente botao </h2>
        </button>
    )

}

export default Botao;