
import React from "react";
import './botao.css'
import { useState } from "react";
function Botao(props) {

    const [change, setChange] = useState(0)

    const mudar = () => {
        console.log('dentro de mudar')
        setChange(change + 1)
        if (change == 8) {
            setChange(0)
        }
    }

    return (
        <div className="container">
            <button className="main" onClick={mudar}>
                <h2>Dentro do componente botao {props.nome} {change}</h2>
            </button>
            <button className="main" onClick={mudar}>
                <h2>Dentro do componente botao {change}</h2>
            </button>
        </div>
    )

}

export default Botao;