
import React from "react";
import './botao.css'
import { Touch } from "react";
import { useState, useEffect } from "react";
function Botao(props) {

    const [change, setChange] = useState(0)

    const mudar = () => {
        console.log('dentro de mudar')
        setChange(change + 1)
    }

    return (
        <button className="main" onClick={mudar}>
            <h2>Dentro do componente botao {change}</h2>
        </button>
    )

}

export default Botao;