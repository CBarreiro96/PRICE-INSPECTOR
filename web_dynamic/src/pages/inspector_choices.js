import React from 'react'
import ChoicesBoard from '../components/ChoicesBoard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TopTickers from '../components/TopTickers'

const Inspector_choices = () => {
    return (
        <div className="h-screen flex-col">
            <Header />
            <TopTickers />
       
            <Footer />
        </div>
    )
}

export default Inspector_choices;