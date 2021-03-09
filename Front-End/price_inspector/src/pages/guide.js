import React from 'react'
import Header from '../components/Header'
import IshimokuStrategy from '../components/Ishimoku';


const Guide = () => {

    return (
        <>
        <Header/>
        <div className="text-center text-6xl py-5">Strategies</div>
        <IshimokuStrategy/>
        </>
    )
}

export default Guide
