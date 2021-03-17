import React from "react";
import Search_Dolar from "../images/Search_Dollar.svg"
import Eye from "../images/Eye.svg";
import Alert from "../images/Alert.svg";
import Balance_Scale from "../images/Balance_Scale.svg"
import Chart_line from "../images/Chart_line.svg";
import Percent from "../images/Percent.svg";

const BasicConcepts = () => {

	return (
		<div className="pt-16">
			{/* Title */}
			<h1 className="text-center text-4xl sm:text-6xl py-5 ">
				Basic Concepts
			</h1>
			<section className="flex flex-row flex-wrap mx-auto">
				{/* Tiker Card */}
				<div className="flex w-full px-4 py-5 md:w-1/2 lg:w-1/3">
					<div className="flex flex-col  pb-4 mb-6 bg-lime_green rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-500">
						<div className="">
							<img className="w-full h-20 sm:h-24 my-2" src={Search_Dolar} alt="Tiker"/>
      			</div>
						<div className="flex flex-wrap items-center flex-1 px-4 text-center mx-auto">
							<h2 className="text-2xl sm:text-3xl font-bold">
            		TICKER
          		</h2>
      			</div>
						<p className="flex flex-row flex-wrap w-full px-8 py-2 overflow-hidden text-base sm:text-lg text-center">
						It was named for the noise the typewriter made when typing letters.
						The specific and unique code is known as tiker, which serves to recognize a specific action within the financial market and may vary depending on that market.
						The ticker is usually the abbreviation of the corresponding company.<p className="italic mx-auto">Eg: Apple [AAPL]</p>
      			</p>
    			</div>
  			</div>
				{/* Backtesting Card */}
				<div className="flex w-full px-4 py-5 md:w-1/2 lg:w-1/3">
					<div className="flex flex-col  pb-4 mb-6 bg-flickr_pink rounded-3xl shadow-lg hover:shadow-2xl  border-2 border-gray-500">
						<div className="">
							<img className="w-full h-20 sm:h-24 my-2" src={Eye} alt="Alert"/>
      			</div>
						<div className="flex flex-wrap items-center flex-1 px-4 text-center mx-auto">
							<h2 className="text-2xl sm:text-3xl font-bold">
            		BACKTEST
          		</h2>
      			</div>
						<p className="flex flex-row flex-wrap w-full px-8 py-2 overflow-hidden text-base sm:text-lg text-center">
							Backtesting assesses the viability of a trading strategy or pricing model by discovering how it would have
							developed retrospectively using historical data. A positive backtest ensures that the strategy is sound and
							likely to pay off. On the contrary, a test with suboptimal results will prompt that the strategy should be modified or rejected.
      			</p>
    			</div>
  			</div>
				{/* Cost effectiveness Card */}
				<div className="flex w-full px-4 py-5 md:w-1/2 lg:w-1/3">
					<div className="flex flex-col  pb-4 mb-6 bg-lime_green rounded-3xl shadow-lg hover:shadow-2xl  border-2 border-gray-500">
						<div className="">
							<img className="w-full h-20 sm:h-24 my-2" src={Balance_Scale} alt="Tiker"/>
      			</div>
						<div className="flex flex-wrap items-center flex-1 px-4 text-center mx-auto">
							<h2 className="text-2xl sm:text-3xl font-bold">
            		COST EFFECTIVENESS
          		</h2>
      			</div>
						<p className="flex flex-row flex-wrap w-full px-8 py-2 overflow-hidden text-base sm:text-lg text-center">
						It was named for the noise the typewriter made when typing letters.
						The specific and unique code is known as tiker, which serves to recognize a specific action within the financial market and may vary depending on that market.
						The ticker is usually the abbreviation of the corresponding company, eg: Apple [AAPL]
      			</p>
    			</div>
  			</div>
				{/* Drawdown Card */}
				<div className="flex w-full px-4 py-5 md:w-1/2 lg:w-1/3">
					<div className="flex flex-col  pb-4 mb-6 bg-flickr_pink rounded-3xl shadow-lg hover:shadow-2xl  border-2 border-gray-500">
						<div className="">
							<img className="w-full h-20 sm:h-24 my-2" src={Chart_line} alt="Tiker"/>
      			</div>
						<div className="flex flex-wrap items-center flex-1 px-4 text-center mx-auto">
							<h2 className="text-2xl sm:text-3xl font-bold">
            		DRAWDOWN
          		</h2>
      			</div>
						<p className="flex flex-row flex-wrap w-full px-8 py-2 overflow-hidden text-base sm:text-lg text-center">
							The drawdown is a measure of downward volatility and refers to how much an investment or trading account
							has fallen from the peak before it recovers to the peak. Reductions help determine an investment's financial
							risk, compare fund performance, or monitor business performance
      			</p>
    			</div>
  			</div>
				{/* Effectiveness Card */}
				<div className="flex w-full px-4 py-5 md:w-1/2 lg:w-1/3">
					<div className="flex flex-col  pb-4 mb-6 bg-lime_green rounded-3xl shadow-lg hover:shadow-2xl  border-2 border-gray-500">
						<div className="">
							<img className="w-full h-20 sm:h-24 my-2" src={Percent} alt="Tiker"/>
      			</div>
						<div className="flex flex-wrap items-center flex-1 px-4 text-center mx-auto">
							<h2 className="text-2xl sm:text-3xl font-bold">
							EFFECTIVENESS
          		</h2>
      			</div>
						<p className="flex flex-row flex-wrap w-full px-8 py-2 overflow-hidden text-base sm:text-lg text-center">
						It was named for the noise the typewriter made when typing letters.
						The specific and unique code is known as tiker, which serves to recognize a specific action within the financial market and may vary depending on that market.
						The ticker is usually the abbreviation of the corresponding company, eg: Apple [AAPL]
      			</p>
    			</div>
  			</div>
				<div className="flex w-full px-4 py-5 md:w-1/2 lg:w-1/3">
					<div className="flex flex-col  pb-4 mb-6 bg-flickr_pink rounded-3xl shadow-lg hover:shadow-2xl  border-2 border-gray-500">
						<div className="">
							<img className="w-full h-20 sm:h-24 my-2" src={Alert} alt="Alert"/>
      			</div>
						<div className="flex flex-wrap items-center flex-1 px-4 text-center mx-auto">
							<h2 className="text-2xl sm:text-3xl font-bold">
            		STOP LOSS
          		</h2>
      			</div>
						<p className="flex flex-row flex-wrap w-full px-8 py-2 overflow-hidden text-base sm:text-lg text-center">
							A stop-loss order is essentially an automatic trade order. The trade executes once the price of the stock
							in question falls to a specified stop price. Such orders are designed to limit an investor’s loss on a possition.
							A stop-loss order can limit losses and lock in gains on stock.
      			</p>
    			</div>
  			</div>
			</section>
		</div>
	)
}

export default BasicConcepts;