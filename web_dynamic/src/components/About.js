import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Gabriel_Cifuentes from '../images/Gabriel_Cifuentes.jpg';
import Angie_Perez from '../images/Angie_Perez.jpg';
import Logo_name from '../images/Logo_name.png';


const About = () => {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div className="bg-gray-900">
			<h1 id="About" className="text-5xl text-center font-medium pt-16 text-white">ABOUT</h1>
			<div class="w-11/12 py-4 px-8 bg-gray-900 shadow-2xl rounded-lg border-4 border-blue-300 mt-20 mb-10 mx-auto text-blue-300" data-aos="fade-up">
				<div class="flex justify-center md:justify-end -mt-16">
					<img  src={ Logo_name } alt="Logo name"/>
				</div>
				<div>
					<h2 class="text-3xl font-semibold">Why Price Inspector?</h2>
					<p class="mt-2 text-lg">
						Un día, después de muchos intentos no tan acertados y con algo de dinero perdido, Daniel y Gabriel, dos miembros de este equipo nos comentaron lo difícil que resultaba poder verificar si una estrategia,
						de las muchas que existen para hacer inversiones en la bolsa, realmente funciona y logra predecir el comportamiento de los precios, ya que cada una de estas estrategias funciona diferente, tiene muchos
						parámetros por manejar que no resultan muy sencillos y para ser honestos, Gabriel no es muy bueno en matemáticas.
						Entonces se nos ocurrió, porque no ayudar a Daniel, Gabriel y cientos de personas que tienen este mismo problema?
						Debe ser una herramienta sencilla, fácil de usar, pero principalmente que haga el trabajo duro por ti... y así nació Price Inspector.
						Prueba en el pasado la estrategia que quieras, solo debes elegir y dar click!
					</p>
				</div>
			</div>
			{/* OUR TEAM */}
			<div className="w-full mx-auto pb-8 bg-blue-300 pt-8 " data-aos="fade-up">
				<h1 className="font-medium text-4xl mb-8 text-center">Our Team</h1>
				<div className="flex flex-col sm:flex-row w-11/12 mx-auto">
					{/* Card 1 */}
					<div className="sm:w-1/4 w-4/5 p-2">
						<div className="px-6 py-4 rounded-3xl shadow-lg text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900">
							<div className="mb-3">
								<img className="w-auto mx-auto rounded-full" src="https://ca.slack-edge.com/E01BXJ5C1PT-U01MW3VQFFC-26cca7c2a79b-512" alt="Camilo Barreiro"/>
							</div>
							<h2 className="text-2xl font-medium italic text-blue-200 ">Camilo Barreiro</h2>
							<span className="block mb-5 text-blue-200">Back End Developer</span>
							<a href="https://www.linkedin.com/in/camilo-barreiro-herrera-909352123/" className="px-4 py-2" target="_blanck"><i className="fab fa-linkedin"></i></a>
							<a href="https://github.com/CBarreiro96" className="px-4 py-2" target="_blanck"><i className="fab fa-github"></i></a>
							<a href="https://twitter.com/CamiloBarreiro4" className="px-4 py-2" target="_blanck"><i className="fab fa-twitter"></i></a>
						</div>
					</div>
					{/* Card 2 */}
					<div className="sm:w-1/4 w-4/5 p-2">
						<div className="px-6 py-4 rounded-3xl shadow-lg text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900">
							<div className="mb-3">
								<img className="w-auto mx-auto rounded-full" src={Gabriel_Cifuentes} alt="Gabriel Cifuentes"/>
							</div>
							<h2 className="text-2xl font-medium italic">Gabriel Cifuentes</h2>
							<span className="block mb-5">Back End Developer</span>
							<a href="https://www.linkedin.com/in/gabriel-cifuentes-santander/" className="px-4 py-2" target="_blanck"><i className="fab fa-linkedin"></i></a>
							<a href="https://github.com/gcifuentess" className="px-4 py-2" target="_blanck"><i className="fab fa-github"></i></a>
							<a href="https://twitter.com/_gcifuentess_" className="px-4 py-2" target="_blanck"><i className="fab fa-twitter"></i></a>
						</div>
					</div>
					{/* Card 3 */}
					<div className="sm:w-1/4 w-4/5 p-2">
						<div className="px-6 py-4 rounded-3xl shadow-lg text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900">
							<div className="mb-3">
								<img className="w-auto mx-auto rounded-full" src="https://ca.slack-edge.com/E01BXJ5C1PT-U01MWA1DPSP-76110bf48fb1-512" alt="Daniel Lorenzo"/>
							</div>
							<h2 className="text-2xl font-medium italic">Daniel Lorenzo</h2>
							<span className="block mb-5">Front End Developer</span>
							<a href="https://www.linkedin.com/in/daniel-lorenzo-scoccia/" className="px-4 py-2" target="_blanck"><i className="fab fa-linkedin"></i></a>
							<a href="https://github.com/dlscoccia" className="px-4 py-2" target="_blanck"><i className="fab fa-github"></i></a>
							<a href="https://twitter.com/dlscoccia" className="px-4 py-2" target="_blanck"><i className="fab fa-twitter"></i></a>
						</div>
					</div>
					{/* Card 4 */}
					<div className="sm:w-1/4 w-4/5 p-2">
						<div className="px-6 py-4 rounded-3xl shadow-lg text-center bg-gradient-to-t from-gray-900 via-gray-700 to-gray-900">
							<div className="mb-3">
							 <img className="w-auto mx-auto rounded-full" src={Angie_Perez} alt="Angie Perez"/>
							</div>
							<h2 className="text-2xl font-medium italic">Angie Pérez</h2>
							<span className="block mb-5">Front End Developer</span>
							<a href="https://www.linkedin.com/in/angie-xiomara-perez-munoz/" className="px-4 py-2" target="_blanck"><i className="fab fa-linkedin"></i></a>
							<a href="https://github.com/xioperez01" className="px-4 py-2" target="_blanck"><i className="fab fa-github"></i></a>
							<a href="https://twitter.com/xiommyperez" className="px-4 py-2" target="_blanck"><i className="fab fa-twitter"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;