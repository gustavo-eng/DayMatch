
import React from "react";
import './botao.css'
import { Touch } from "react";
import { useState, useEffect } from "react";
function Botao(props) {

    const [change, setChange] = useState('nothing')

    const mudar = () => {
        console.log('dentro de mudar')
        setChange('alterado!')
    }

    return (
        <button className="main" onClick={!mudar}>
            <h2>Dentro do componente botao {change}</h2>
        </button>
    )

}

export default Botao;