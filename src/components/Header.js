import React from 'react'
import 'styles/Header.css'
import logo from 'assets/logo-officiel.png'

const Header = () => {
    return (
        <div className="semi-header text-white">
            <div className="container">
                <div className="d-flex row justify-content-center align-items-center">
                    <img src={logo} alt="logo" className="img-fluid logo-size mt-3" />
                    <p className="police mt-3"> Votre Partenaire qui vous accompagne dans vos projets de création d'aménagement et de réaménagement sur mesure. </p>
                    <button className="btn btn-size mt-4 mb-4"> Découvrez nos créations </button>     
                </div>
            </div>
        </div>
    )
}
export default Header