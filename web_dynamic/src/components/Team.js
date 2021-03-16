import React from 'react'
import Gabriel_Cifuentes from '../images/Gabriel_Cifuentes.jpg'
import Angie_Perez from '../images/Angie_Perez.jpg'
import Logo_name from '../images/Logo_name.png'


const Team = () => {

	return (
		<div className="relative  bg-nianza ">
			<h1 id="Our_Team" className="text-5xl text-center font-medium pt-16 pb-10">ABOUT</h1>
			<div class="m-auto max-w-6xl p-12">
				<div class="flex flex-col md:flex-row">
					<div class="md:w-1/2 max-w-md flex flex-col justify-center">
						<div class="md:text-5xl text-2xl uppercase font-black">Why Price Inspector</div>
						<div class="text-xl mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
						<div class="my-5 h-16">
							<div class="shadow-md font-medium py-2 px-4 text-yellow-100cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">
								Join us now
							</div>
						</div>
					</div>
					<div class="flex md:justify-end w-full md:w-1/2 -mt-5">
						<div class="bg-dots">
							<div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
								<img alt="card img" class="rounded-t" src={Logo_name}/>
								<div class="text-2xl p-10 bg-white">
									<img alt="quote" class="float-left mr-1" src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"/>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
								</div>
							</div>
         		</div>
      		</div>
   			</div>
			</div>
		<div className="w-4/5 mx-auto">
			<div className="flex flex-col sm:flex-row">
				{/* Card 1 */}
				<div className="sm:w-1/4 w-4/5 p-2">
					<div className="bg-flickr_pink px-6 py-4 rounded-lg shadow-lg text-center">
						<div className="mb-3">
							<img className="w-auto mx-auto rounded-full" src="https://ca.slack-edge.com/E01BXJ5C1PT-U01MW3VQFFC-26cca7c2a79b-512" alt="Camilo Barreiro"/>
						</div>
						<h2 className="text-2xl font-medium italic ">Camilo Barreiro</h2>
						<span className="block mb-5">Back End Developer</span>
						<a href="https://www.linkedin.com/in/camilo-barreiro-herrera-909352123/" className="px-4 py-2" target="_blanck"><i class="fab fa-linkedin"></i></a>
						<a href="https://github.com/CBarreiro96" className="px-4 py-2" target="_blanck"><i class="fab fa-github"></i></a>
						<a href="https://twitter.com/CamiloBarreiro4" className="px-4 py-2" target="_blanck"><i class="fab fa-twitter"></i></a>
					</div>
				</div>
				{/* Card 2 */}
				<div className="sm:w-1/4 w-4/5 p-2">
					<div className="bg-flickr_pink px-6 py-4 rounded-lg shadow-lg text-center">
						<div className="mb-3">
							<img className="w-auto mx-auto rounded-full" src={Gabriel_Cifuentes} alt="Gabriel Cifuentes"/>
						</div>
						<h2 className="text-2xl font-medium italic">Gabriel Cifuentes</h2>
						<span className="block mb-5">Back End Developer</span>
						<a href="https://www.linkedin.com/in/gabriel-cifuentes-santander/" className="px-4 py-2" target="_blanck"><i class="fab fa-linkedin"></i></a>
						<a href="https://github.com/gcifuentess" className="px-4 py-2" target="_blanck"><i class="fab fa-github"></i></a>
						<a href="https://twitter.com/_gcifuentess_" className="px-4 py-2" target="_blanck"><i class="fab fa-twitter"></i></a>
					</div>
				</div>
				{/* Card 3 */}
				<div className="sm:w-1/4 w-4/5 p-2">
					<div className="bg-flickr_pink px-6 py-4 rounded-lg shadow-lg text-center">
						<div className="mb-3">
							<img className="w-auto mx-auto rounded-full" src="https://ca.slack-edge.com/E01BXJ5C1PT-U01MWA1DPSP-76110bf48fb1-512" alt="Daniel Lorenzo"/>
						</div>
						<h2 className="text-2xl font-medium italic">Daniel Lorenzo</h2>
						<span className="block mb-5">Front End Developer</span>
						<a href="https://www.linkedin.com/in/daniel-lorenzo-scoccia/" className="px-4 py-2" target="_blanck"><i class="fab fa-linkedin"></i></a>
						<a href="https://github.com/dlscoccia" className="px-4 py-2" target="_blanck"><i class="fab fa-github"></i></a>
						<a href="https://twitter.com/dlscoccia" className="px-4 py-2" target="_blanck"><i class="fab fa-twitter"></i></a>
					</div>
				</div>
				{/* Card 4 */}
				<div className="sm:w-1/4 w-4/5 p-2">
					<div className="bg-flickr_pink px-6 py-4 rounded-lg shadow-lg text-center">
						 <div className="mb-3">
							 <img className="w-auto mx-auto rounded-full" src={Angie_Perez} alt="Angie Perez"/>
							</div>
						<h2 className="text-2xl font-medium italic">Angie Pérez</h2>
						<span className="block mb-5">Front End Developer</span>
						<a href="https://www.linkedin.com/in/angie-xiomara-perez-munoz/" className="px-4 py-2" target="_blanck"><i class="fab fa-linkedin"></i></a>
						<a href="https://github.com/xioperez01" className="px-4 py-2" target="_blanck"><i class="fab fa-github"></i></a>
						<a href="https://twitter.com/xiommyperez" className="px-4 py-2" target="_blanck"><i class="fab fa-twitter"></i></a>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Team;