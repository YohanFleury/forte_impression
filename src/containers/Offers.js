import React from 'react'
import 'styles/Offers.css'
import facade from 'assets/facade.png'

const Offers = () => {
    return (
        <main>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h2 className="display-4">Ce que nous vous proposons</h2>
                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>                
                </div>
            </div>
            <div className="container offers-section">
                <div className="d-flex justify-content-center">
                    <div className="col-4">
                        <img src={facade} alt="façade" className="img-fluid img-size" />
                    </div>
                    <div className="col-5 mt-3">
                        <h1>Habillage vitrine</h1>
                        <ul className="police-list ml-2">
                            <li> Communiquez grâce à un habillage ciblé</li>
                            <li> Véhiculez votre image</li>
                            <li> Mettez en avant vos produits</li>
                            <li> Attirez l'oeil sur des actions éphémères </li>
                            <li> Offrez vous une jolie décoration </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Offers