import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo_name from '../images/Logo_name.png'


const Header = ({toggle}) => {

    // Responsive
    const [isExpanded, toggleExpansion] = useState(false);


    return (
    <nav className="flex justify-between items-center h-16 bg-rich_black text-black relative shadow-sm font-mono" role="navigation">
        <Link to="/"><img src={Logo_name} className="h-14 w-auto ml-12" alt="Logo name"/></Link>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded" onClick={() => toggleExpansion(!isExpanded)}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
        <div className={`${isExpanded ? `block` : `hidden`} pr-8 md:block text-nianza`}>
            <Link className="px-4 hover:underline" to="/backtesting">Backtesting</Link>
            <Link className="px-4 hover:underline" to="/inspector_choices">Inspector Choices</Link>
            <Link className="px-4 hover:underline" to="/guide">Guide</Link>
            <Link className="px-4 hover:underline" to="/account">Your Account</Link>
        </div>
    </nav>)
}

export default Header;