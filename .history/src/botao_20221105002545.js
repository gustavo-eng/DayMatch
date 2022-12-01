
import React from "react";
import './botao.css'
import { Touch } from "react";

function Botao(props) {
    return (
        <button className="main">
            <h2>Dentro do componente botao </h2>
            <Touch>ala </Touch>
        </button>
    )

}

export default Botao;