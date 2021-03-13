import React from 'react'
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Whatsapp from "../images/whatsapp.svg"

const Footer = () => {
    return (
        <div className="bg-gray-900 text-center">
            <div className="flex justify-evenly items-center p-4">
                <img src={Whatsapp} alt="facebook" className="w-12 h-12"/>
                <img src={Facebook} alt="facebook" className="w-12 h-12"/>
                <img src={Instagram} alt="facebook" className="w-12 h-12"/>
            </div>
            <p className="font-mono text-gray-50">© 2021 Price Inspector. All rights reserved</p>
        </div>
    )
}

export default Footer
