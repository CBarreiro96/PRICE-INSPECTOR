import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TopTickers from '../components/TopTickers'

const Inspector_choices = () => {
    return (
        <div className="h-screen justify-center items-center">
            <Header />
            <TopTickers />
            <Footer />
        </div>
    )
}

export default Inspector_choices;