import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


const Header = ({toggle}) => {
    return (
    <nav className="flex justify-between items-center h-20 bg-white text-black relative shadow-sm font-mono" role="navigation">
        <Link to="/"><img src={logo} className="h-16 w-auto ml-12" /></Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
        <div className="pr-8 md:block hidden">
            <Link className="px-4 hover:underline" to="/backtesting">Backtesting</Link>
            <Link className="px-4 hover:underline" to="/inspector_choices">Inspector Choices</Link>
            <Link className="px-4 hover:underline" to="/guide">Guide</Link>
            <Link className="px-4 hover:underline" to="/account">Your Account</Link>
        </div>
    </nav>)
}

export default Header;