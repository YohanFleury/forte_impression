import React from 'react'
import 'components/Navbar.css'

export const Navbar = () => {
    
    return (
        <div className="d-flex justify-content-around align-items-center flex-column flex-md-row p-3 border-bottom black text-white">
            <h4>
                <a href="/" className="text-decoration-none text-white"> Forte Impression</a>
            </h4>
            <nav>
                <a href="/" className="text-decoration-none text-white mr-3"> Accueil</a>
                <a href="/" className="text-decoration-none text-white mr-3"> Plus</a>
            </nav>
            <p> Created by Yohan </p>
        </div>
    )
}
