import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Trading from '../images/Trading.mp4'



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
        <div className="flex-grow">
            <nav className={navbar ? 'nav_2' : 'nav_1'}>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded" onClick={() => toggleExpansion(!isExpanded)}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`${isExpanded ? `block` : `hidden`} px-10 w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-md lg:flex-grow font-medium">
                        <a className="links" href="#Feature">Feature</a>
                        <a className="links" href="#About">About</a>
                    </div>
                <div>
                    <Link className="inline-block text-md px-4 py-2 leading-none border rounded hover:text-rich_black hover:bg-nianza mt-4 lg:mt-0" to="/login">
                        Log in
                    </Link>
                </div>
                </div>
            </nav>
            <div className="flex h-screen mx-auto p-0 m-0 ">
            <div className="absolute h-full">
                <video autoPlay loop muted>
                    <source src={Trading}/>
                </video>
            </div>
            <div className="absolute h-screen w-full p-0 m-0">
                <div className=" w-full my-28 md:my-60 mx-auto text-center bg-black opacity-80">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl py-2 font-bold italic font-mono text-white">BACKTEST YOUR INVESMENT STRATEGY</h1>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Headerlanding;