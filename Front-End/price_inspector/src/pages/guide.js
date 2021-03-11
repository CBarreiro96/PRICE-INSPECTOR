import React from 'react'
import Graph from '../components/AdvancedOptions'
import SearchBar from '../components/SearchBar'

const Guide = () => {
    return (
        <div className="h-screen bg-yellow-300 flex justify-center items-center" >
            <h1 className="text-7xl">I'm your guide!</h1>
            <Graph />
        </div>
    )
}

export default Guide
