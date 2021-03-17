import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Logo_name from '../images/Logo_name.png';
import {FaGithub} from 'react-icons/fa'


const About = () => {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div className="bg-gray-900">
			<h1 id="About" className="text-5xl text-center font-medium pt-16 text-white font-mono">ABOUT</h1>
			<div class="w-11/12 py-4 px-8 bg-gray-900 shadow-2xl rounded-lg border-4 border-blue-300 mt-20 mb-10 mx-auto text-blue-300" data-aos="fade-up">
				<div class="flex justify-center md:justify-end -mt-16">
					<img  src={ Logo_name } alt="Logo name"/>
				</div>
				<div>
					<h2 class="text-3xl font-semibold">Why Price Inspector?</h2>
					<p class="mt-3 text-lg text-center">
					One day, after many not so successful attempts and with some money lost in the stock market, Daniel and Gabriel, two members of this team told us how difficult it 
					was to verify if a strategy, of the many that exist, really works and it manages to predict the behavior of prices rollercoaster, 
					since each of these strategies works differently, they have many parameters to handle that are not very simple. </p>
					<p  class="mt-2 text-lg text-center">To be honest, Gabriel is not very good at math, so it occurred to us, why not help Daniel, Gabriel and hundreds of people who 
						have this same problem? It should be a simple tool, easy to use, but mainly that does the hard work for 
						you ... and thus Price Inspector was born. Try in the past the strategy you want, you just have to choose and click!
					</p>
					<p className="flex w-full justify-center items-center text-xl mt-5  animate-bounce"><a href="https://github.com/CBarreiro96/PRICE-INSPECTOR" className="ml-3 flex">Take a peek at the code <FaGithub className="ml-4 w-9 h-9"/></a></p>
				</div>
			</div>
			{/* OUR TEAM */}
			<div className="w-full mx-auto pb-8 bg-blue-300 pt-8 " data-aos="fade-up">
				<h1 className="font-medium text-5xl mb-8 text-center font-mono">OUR TEAM</h1>
				<div className="flex flex-col sm:flex-row w-11/12 mx-auto">
					{/* Card 1 */}
					<div className="sm:w-1/4 w-4/5 p-2">
						<div className="px-6 py-4 rounded-3xl shadow-lg text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900">
							<div className="mb-3">
								<img className="w-auto mx-auto rounded-full" src="https://ca.slack-edge.com/E01BXJ5C1PT-U01MW3VQFFC-26cca7c2a79b-512" alt="Camilo Barreiro"/>
							</div>
							<h2 className="text-2xl font-medium italic text-blue-200 ">Camilo Barreiro</h2>
							<span className="block mb-5 text-blue-200">Back End Developer</span>
							<a href="https://www.linkedin.com/in/camilo-barreiro-herrera-909352123/" className="px-4 py-2" target="_blanck"><i className="fab fa-linkedin fill-current text-indigo-200"></i></a>
							<a href="https://github.com/CBarreiro96" className="px-4 py-2" target="_blanck"><i className="fab fa-github fill-current text-indigo-200"></i></a>
							<a href="https://twitter.com/CamiloBarreiro4" className="px-4 py-2" target="_blanck"><i className="fab fa-twitter fill-current text-indigo-200"></i></a>
						</div>
					</div>
					{/* Card 2 */}
					<div className="sm:w-1/4 w-4/5 p-2">
						<div className="px-6 py-4 rounded-3xl shadow-lg text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900">
							<div className="mb-3">
								<img className="w-auto mx-auto rounded-full" src="https://ca.slack-edge.com/E01BXJ5C1PT-U01MPAE308N-49be5095930f-512" alt="Gabriel Cifuentes"/>
							</div>
							<h2 className="text-2xl font-medium italic text-blue-200">Gabriel Cifuentes</h2>
							<span className="block mb-5 text-blue-200">Back End Developer</span>
							<a href="https://www.linkedin.com/in/gabriel-cifuentes-santander/" className="px-4 py-2" target="_blanck"><i className="fab fa-linkedin fill-current text-indigo-200"></i></a>
							<a href="https://github.com/gcifuentess" className="px-4 py-2" target="_blanck"><i className="fab fa-github fill-current text-indigo-200"></i></a>
							<a href="https://twitter.com/_gcifuentess_" className="px-4 py-2" target="_blanck"><i className="fab fa-twitter fill-current text-indigo-200"></i></a>
						</div>
					</div>
					{/* Card 3 */}
					<div className="sm:w-1/4 w-4/5 p-2">
						<div className="px-6 py-4 rounded-3xl shadow-lg text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900">
							<div className="mb-3">
								<img className="w-auto mx-auto rounded-full" src="https://ca.slack-edge.com/E01BXJ5C1PT-U01MWA1DPSP-76110bf48fb1-512" alt="Daniel Lorenzo"/>
							</div>
							<h2 className="text-2xl font-medium italic text-blue-200">Daniel Lorenzo</h2>
							<span className="block mb-5 text-blue-200">Front End Developer</span>
							<a href="https://www.linkedin.com/in/daniel-lorenzo-scoccia/" className="px-4 py-2" target="_blanck"><i className="fab fa-linkedin fill-current text-indigo-200"></i></a>
							<a href="https://github.com/dlscoccia" className="px-4 py-2" target="_blanck"><i className="fab fa-github fill-current text-indigo-200"></i></a>
							<a href="https://twitter.com/dlscoccia" className="px-4 py-2" target="_blanck"><i className="fab fa-twitter fill-current text-indigo-200"></i></a>
						</div>
					</div>
					{/* Card 4 */}
					<div className="sm:w-1/4 w-4/5 p-2">
						<div className="px-6 py-4 rounded-3xl shadow-lg text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900">
							<div className="mb-3">
							 <img className="w-auto mx-auto rounded-full" src="https://ca.slack-edge.com/E01BXJ5C1PT-U01MPALDY9L-1aad2e5b6f9e-512" alt="Angie Perez"/>
							</div>
							<h2 className="text-2xl font-medium italic text-blue-200">Angie Pérez</h2>
							<span className="block mb-5 text-blue-200">Front End Developer</span>
							<a href="https://www.linkedin.com/in/angie-xiomara-perez-munoz/" className="px-4 py-2" target="_blanck"><i className="fab fa-linkedin fill-current text-indigo-200"></i></a>
							<a href="https://github.com/xioperez01" className="px-4 py-2" target="_blanck"><i className="fab fa-github fill-current text-indigo-200"></i></a>
							<a href="https://twitter.com/xiommyperez" className="px-4 py-2" target="_blanck"><i className="fab fa-twitter fill-current text-indigo-200"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;