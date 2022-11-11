
import React from "react";
import './style.css'
import { useState } from "react";

const  Botao = (props) => {

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
            <button className="botao" onClick={props.evento} style={{width: `${props.largura}`}}>
                <h2> {props.nome} {change}</h2>
            </button>
        </div>
    )

}

export default Botao;