import React from 'react'
import './Navbar.css'


function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-dark bg-danger">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Top Netflix Shows</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Top Netflix Series</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="">Top Netflix Movies</a>
                            </li>
                        </ul>
                    
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar