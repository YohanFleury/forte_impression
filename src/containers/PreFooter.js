import React from 'react'
import clients from 'assets/partenaires.png'
import 'styles/Prefooter.css'


const PreFooter = () => {
    return (
        <div className="container">
            <div className=""> 
                <div className="">
                    <h1> Ils nous ont fait confiance ! </h1>
                </div>
                <div className="">
                    <img src={clients} alt="clients" className="img-clients" />
                </div> 
            </div>
        </div>
    )
}
export default PreFooter