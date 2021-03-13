import React from 'react'
import BacktestingContent from '../components/BacktestingContent'
import Header from '../components/Header'
import Footer from '../components/Footer';
import BacktestResults from '../components/BacktestResults';
import Graph from '../components/AdvancedOptions';

const Backtesting = () => {
    return (
        <>
        <div className="h-screen justify-center items-center">
            <Header />
            <BacktestingContent />
            <Graph />
            <BacktestResults />
            <Footer />
        </div>
        </>
    )
}

export default Backtesting
