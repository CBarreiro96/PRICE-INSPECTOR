import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';


const Headerlanding = () => {
    //Change navbar with scroll
    const [navbar, setNavbar] = useState(false);
    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbar);

    // Responsive
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <div>
    <nav className={navbar ? 'nav_2' : 'nav_1'} >
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded" onClick={() => toggleExpansion(!isExpanded)}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
        <div className={`${isExpanded ? `block` : `hidden`} px-10 w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div className="text-md lg:flex-grow">
                <Link className="links" to="#feature">Feature</Link>
                <Link className="links" to="#How_it_works">How it works</Link>
                <Link className="links" to="#Our_Team">Our Team</Link>
            </div>
            <div>
                <Link className="inline-block text-md px-4 py-2 leading-none border rounded  hover:tebg-gradient-to-r from-rich_black to-navy_blue-DEFAUL hover:bg-nianza mt-4 lg:mt-0" to="/login">Log in</Link>
            </div>
        </div>
    </nav>
    <div className="bg-gradient-to-t from-navy_blue via-rich_black to-navy_blue w-screen h-screen">
    /*<div className="md:pt-40 sm:pt-20">
        <img src={Logo} alt="Logo" className=" z-0 xs:h20 xs:h=20 sm:h-40 sm:w-40 md:h-80 md:w-80 mx-auto"/>
    </div>
</div>
</div>

)
}

export default Headerlanding;