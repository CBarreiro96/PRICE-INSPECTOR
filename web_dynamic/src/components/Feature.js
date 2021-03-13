import React from 'react';
import Logo from '../images/Logo.png';
import { Link } from 'react-router-dom';


const Feature = () => {

	return (
			<div class="mx-auto relative md:text-left bg-nianza">
				<h1 id="Feature" className="text-5xl py-16 text-center font-medium">FEATURE</h1>
				<div class="md:flex flex-row flex-wrap items-center mx-5">
						<img src={Logo} class="sm:w-1/4 w-1/2 py-2 mx-auto " alt=""/>

					<div class="w-full mx-auto md:w-1/2 ">
						<div class="mb-10">
							<h1 class="font-bold uppercase text-2xl mb-5">What is price inspector?</h1>
							<p class="text-lg text-justify">
								Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...
								Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis..
								Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis..
								Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis..
								</p>
						</div>
					</div>
					<Link className="mx-5 font-medium text-2xl px-2 py-4 shadow-2xl rounded-3xl bg-flickr_pink hover:bg-flickr_pink-light" to="/SignUp">REGISTER NOW!</Link>
				</div>
			</div>
	);
};

export default Feature;