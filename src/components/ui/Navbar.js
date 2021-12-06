import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"  height="50px" width="70px"/>
                </Link>

                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                    <Link to ="/search" className="nav-link" >
                        <a className="nav-link" href="javascript:void(0)">Search</a>
                    </Link>
                    </ul>
                </div>
                </div>
            </nav>
      </>
    )
}
