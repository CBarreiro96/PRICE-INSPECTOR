import React from 'react'
import Gabriel_Cifuentes from '../images/Gabriel_Cifuentes.jpg'
import Angie_Perez from '../images/Angie_Perez.jpg'


const Team = () => {

	return (
		<div className="relative  bg-nianza ">
			<h1 id="Our_Team" className="text-5xl text-center font-medium pt-16 pb-10">OUR TEAM</h1>
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
						<a href="https://github.com/CBarreiro96" className="px-4 py-2  bg-lime_green hover:underline rounded-full" target="_blanck">More</a>
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
						<a href="https://github.com/gcifuentess" className="px-4 py-2 bg-lime_green hover:underline rounded-full" target="_blanck">More</a>
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
						<a href="https://github.com/dlscoccia" className="px-4 py-2  bg-lime_green hover:underline rounded-full" target="_blanck">More</a>
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
						<a href="https://github.com/xioperez01" className="px-4 py-2  bg-lime_green hover:underline rounded-full" target="_blanck">More</a>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Team;