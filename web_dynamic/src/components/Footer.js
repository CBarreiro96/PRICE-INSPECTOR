import React from 'react'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
    return (
        <div className="bg-gray-800 text-center">
            <div className="flex justify-between items-center p-4">
            <p className="text-gray-400">"In investing, what is comfortable is rarely profitable." — Robert Arnott</p>
                <div className="flex w-1/5 justify-evenly">
                <a href="https://www.facebook.com/HolbertonSchoolColombia/"><FiFacebook className="w-5 h-5 fill-current text-gray-50"/></a>
                <a href="https://twitter.com/HolbertonCOL"><FiTwitter className="w-5 h-5 fill-current text-gray-50"/></a>
                </div>
            </div>
            <p className="font-mono text-gray-500">© 2021 Price Inspector. All rights reserved</p>
        </div>
    )
}

export default Footer
