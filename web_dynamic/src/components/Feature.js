import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Logo from '../images/Logo.png';
import Screenshot from '../images/inspectorChoices.png'
import BacktesterDemo from '../images/BacktesterDemo.mp4'


const Feature = () => {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
			<div id="Feature" class="mx-auto relative bg-white">
				{/* Feature 1 */}
				<div data-aos="fade-down"class="md:flex flex-row flex-wrap items-center mx-5 pt-16">
						<img src={Logo} class="sm:w-1/4 w-1/2 py-2 mx-auto " alt=""/>
					<div class="w-full mx-auto md:w-1/2 ">
						<div class="mb-10 flex flex-col">
							<h1 class="font-bold text-2xl py-5 text-center">Price Inspector... Is for you!</h1>
							<p class=" text-lg text-center">
								The financial market is a fairly complex world to enter without much prior knowledge, due to the complexity of information management, the number of existing strategies and the risks involved in investing.
								Surely if you have tried you know what we are talking about, there are so many strategies and they work so differently that you can go crazy!
							</p>
							<p class=" text-lg text-center mt-3"	>But don't worry, <span className="text-2xl font-medium">Price Inspector</span> is here to help you!
								We have many strategies for you to choose from, test how they work, know how reliable they are, reviewing their behavior in the past and decide which one you prefer ...
								Now, if you just want to know if it's time to buy or it's time to sell shares, we can also help you, we have a recommender for you...
								</p>	<p className="text-2xl font-medium text-center">Price Inspector is all you need!</p>
						</div>
					</div>
					
				</div>
				{/* Feature 2 */}
				<div data-aos="fade-up" class="md:flex pt-5 flex-row flex-wrap items-center text-gray-200 bg-gray-900">
					<div class="w-full mx-auto md:w-1/2 p-3">
						<div class="mb-10 text-center">
							<h1 class="font-bold text-2xl mb-5">¿Backtesting?... We do the work for you!</h1>
							<p class="text-lg ">
							To verify that a strategy really works and is capable to predict the price of a stock, it is necessary to test it in the past and verify how many times
was able to profit. This is called Backtesting and it can be very laborious depending on the strategy you choose.
Chillout! You got into the right place.
							</p>
							<p  class="text-lg mt-3">Price Inspector takes care of the Backtesting for you, just select the company and the strategy you want to test with a few parameters, Relax, nothing strange... And after a click you will have the results and you can decide if this strategy fits what you expect or not... As simple as that!</p>
						</div>
					</div>
					<video src={BacktesterDemo} autoPlay loop muted class=" w-1/2 p-3 h-full py-2 mx-auto border-l-4 border-gray-50 " alt=""/>
				</div>
				{/* Feature 3 */}
				<div data-aos="fade-down"class="md:flex items-center pt-2">
						<img src={Screenshot} class="w-1/2 h-full p-2 mb-2 shadow-2xl rounded-3xl" alt=""/>
						<div class="h-full mx-auto md:w-1/2 border-l-4 border-gray-900 p-12">
						<div class="mb-10 text-center">
							<h1 class="font-bold text-2xl mb-5">We have recommendations for you...</h1>
							<p class="text-lg ">
							In our Inspector Choices section, we have recommendations  for you of the stocks you choose. You just have to pick a company and we will tell you the price of the day and if it is a good idea to Sell, Buy or Hold... <p className="mt-3">And if you want, at a glance, you will find the top 5 gainers and losers of the day.</p>
							</p>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Feature;