import React from "react";
import { Link } from "react-router-dom";

const SignIn = (props) => {
    return (
        <div className="container">Estou dentro de SignIn.js 
            <button> vai para calender
              <Link to="/calender"></Link>
            </button>
        </div>
    )
}

export default SignIn