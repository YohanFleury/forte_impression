import React from 'react'
import 'styles/Offers.css'
import facade from 'assets/facade.png'
import visitCard from 'assets/visit-card.png'
import stand from 'assets/pop-corn.jpeg'

const Offers = () => {
    return (
        <main>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h2 className="display-4">Ce que nous vous proposons</h2>
                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>                
                </div>
            </div>
            <div className="container offers-section mb-5">
                <div className="row justify-content-start align-items-center">
                    <div className="col-sm col-md">
                        <img src={facade} alt="façade" className="img-fluid img-bakery" />
                    </div>
                    <div className="col-sm col-md">
                        <h1 className="">Habillage vitrine</h1>
                        <p>
                            Votre vitrine vous offre la possibilité de communiquer grâce à un habillage ciblé. Elle véhicule votre image et met en avant vos produits. En plus d'être un bon vecteur de communication cette solution permet toout simplement de décorer la surface.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm">
                        <img src={visitCard} alt="façade" className="img-fluid img-visit-card" />
                    </div>
                    <div className="col-sm">
                        <h1>Edition (numérique & offset) </h1>
                        <p>Nous conçevons pour vous différentes éditions numériques et offset sur mesure, adaptés à vous besoins ! (carte de visite, catalogue, flyer...) </p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm">
                        <img src={stand} alt="façade" className="img-fluid img-visit-card" />
                    </div>
                    <div className="col-sm">
                        <h1>PLV et Display </h1>
                        <p>Aménagement de stand, showroom, rayonnage, Roll-up, xbanner, stand parrapluie </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Offers