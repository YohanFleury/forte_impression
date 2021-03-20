import React from 'react'
import 'styles/Header.css'
import logo from 'assets/logo-officiel.png'

const Header = () => {
    return (
        <div className="container-fluid semi-header text-white mt-0 parent">
            <div className="container text-center">
                <div className="d-flex flex-column align-items-center">
                    <img src={logo} alt="logo" className="img-fluid logo-size mt-2" />
                    <p className="police"> Votre Partenaire qui vous accompagne dans vos projets de création d'aménagement et de réaménagement sur mesure. </p>
                    <button className="btn btn-size mt-4"> Découvrez nos créations </button>
                </div>
            </div>
            
        </div>
    )
}
export default Header