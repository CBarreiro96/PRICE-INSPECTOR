import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Logo from '../images/Logo.png';
import Screenshot from '../images/Screenshot.png'
import { Link } from 'react-router-dom';


const Feature = () => {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
			<div class="mx-auto relative bg-gradient-to-b from-blue-100 to-blue-300">
				{/* Feature 1 */}
				<div id="Feature" data-aos="fade-down"class="md:flex flex-row flex-wrap items-center mx-5 pt-8">
						<img src={Logo} class="sm:w-1/4 w-1/2 py-2 mx-auto " alt=""/>
					<div class="w-full mx-auto md:w-1/2 ">
						<div class="mb-10">
							<h1 class="font-bold text-2xl py-5">Price Inspector... Is for you!</h1>
							<p class="text-lg ">
								The financial market is a fairly complex world to enter without much prior knowledge, due to the complexity of information management, the number of existing strategies and the risks involved in investing.
								Surely if you have tried you know what we are talking about, there are so many strategies and they work so differently that you can go crazy!
								But don't worry, Price Inspector is here to help you!
								We have many strategies for you to choose from, test how they work, know how reliable they are, reviewing their behavior in the past and decide which one you prefer ...
								Now, if you just want to know if it's time to buy or it's time to sell shares, we can also help you, we have a recommender for you ...
								Price Inspector is all you need!
							</p>
						</div>
					</div>
					<Link className="mx-5 font-medium text-2xl text-white px-2 py-4 shadow-2xl rounded-3xl bg-gradient-to-b from-gray-700 to-gray-900 hover:opacity-50" to="/SignUp">REGISTER NOW!</Link>
				</div>
				{/* Feature 2 */}
				<div data-aos="fade-down" class="md:flex pt-5 flex-row flex-wrap items-center text-blue-300 bg-gray-900">
					<div class="w-full mx-auto md:w-1/2 ">
						<div class="mb-10">
							<h1 class="font-bold text-2xl mb-5">Backtesting? ... We do the work for you </h1>
							<p class="text-lg ">
								The financial market is a fairly complex world to enter without much prior knowledge, due to the complexity of information management, the number of existing strategies and the risks involved in investing.
								Surely if you have tried you know what we are talking about, there are so many strategies and they work so differently that you can go crazy!
								But don't worry, Price Inspector is here to help you!
								We have many strategies for you to choose from, test how they work, know how reliable they are, reviewing their behavior in the past and decide which one you prefer ...
								Now, if you just want to know if it's time to buy or it's time to sell shares, we can also help you, we have a recommender for you ...
								Price Inspector is all you need!
							</p>
						</div>
					</div>
					<img src={Logo} class="sm:w-1/4 w-1/2 py-2 mx-auto " alt=""/>
				</div>
				{/* Feature 3 */}
				<div data-aos="fade-down"class=" pt-5 md:flex flex-row flex-wrap items-center mx-5">
						<img src={Screenshot} class="sm:w-1/3 w-1/2 py-2 mx-auto rounded-3xl shadow-2xl " alt=""/>
					<div class="w-full mx-auto md:w-1/2 ">
						<div class="mb-10">
							<h1 class="font-bold text-2xl mb-5">We have recommendations for you...</h1>
							<p class="text-lg ">
								The financial market is a fairly complex world to enter without much prior knowledge, due to the complexity of information management, the number of existing strategies and the risks involved in investing.
								Surely if you have tried you know what we are talking about, there are so many strategies and they work so differently that you can go crazy!
								But don't worry, Price Inspector is here to help you!
								We have many strategies for you to choose from, test how they work, know how reliable they are, reviewing their behavior in the past and decide which one you prefer ...
								Now, if you just want to know if it's time to buy or it's time to sell shares, we can also help you, we have a recommender for you ...
								Price Inspector is all you need!
							</p>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Feature;