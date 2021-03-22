import React from 'react'
import 'styles/PreFooter.css'
import clients from 'assets/partenaires.png'

const PreFooter = () => {
    return (
        <div className="container">
            <div className="d-flex row justify-content-center align-items-center mt-5">
                <h1> Ils nous ont fait confiance ...</h1>
                <img src={clients} alt="clients" />
            </div>
        </div>
    )
}
export default PreFooter