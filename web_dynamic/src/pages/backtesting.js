import React from 'react'
import BacktestingContent from '../components/BacktestingContent'
import Header from '../components/Header'
import Footer from '../components/Footer';
import BacktestResults from '../components/BacktestResults';
import Appplot from '../components/SearchBar';

const Backtesting = () => {
    return (
        <>
        <div className="h-screen justify-center items-center">
            <Header />
            <BacktestingContent />
            <BacktestResults />
            <Appplot />
            <Footer />
        </div>
        </>
    )
}

export default Backtesting
