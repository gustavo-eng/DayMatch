import React from "react";
import { Link } from "react-router-dom";

const SignIn = (props) => {
    return (
        <div className="container">Estou dentro de SignIn.js 
            <li>
                <Link to="/calender" >Vai para calender </Link>
            </li>
        </div>
    )
}

export default SignIn