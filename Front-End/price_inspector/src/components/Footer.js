import React from 'react'
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Whatsapp from "../images/whatsapp.svg"

const Footer = () => {
    return (
        <div className="bg-gray-400 text-center">
            <div className="flex justify-evenly items-center p-4">
                <img src={Whatsapp} alt="facebook" className="w-6 h-6"/>
                <img src={Facebook} alt="facebook" className="w-5 h-5"/>
                <img src={Instagram} alt="facebook" className="w-6 h-6"/>
            </div>
            <p>© 2021 Price Inspector. All rights reserved</p>
        </div>
    )
}

export default Footer
