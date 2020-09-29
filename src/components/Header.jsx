import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
function Header()
{
    return (
        <>
            <div className="header navbar navbar-expand-lg navbar-dark bg-dark text-light">
                <img src={logo} alt="logo" height="60px" width="60px" />
                <Link className="navbar-brand" to="/"><h1>Google Keep</h1></Link>
            </div>
        </>
    )
}

export default Header
