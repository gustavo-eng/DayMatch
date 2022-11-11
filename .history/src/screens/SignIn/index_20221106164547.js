import React from "react";
import { Link } from "react-router-dom";

const SignIn = (props) => {
    return (
        <div className="container">Estou dentro de SignIn.js 
            <button> 
                <Link to={'/calender'}/>
            </button>
        </div>
    )
}

export default SignIn