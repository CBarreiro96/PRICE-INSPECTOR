import React from "react";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Coming_Soon from '../images/Coming_Soon.jpg'

const MoreStrategies = () => {

	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/*YOUR_FRONT_CCOMPONENT*/}
				<div className="h-screen pt-1 sm:pt-3">
					<div className="h-2/3 w-1/2 mx-auto pt-2 sm:pt-10 flex-grow bg-steal_teal rounded-3xl shadow-2xl items-center text-center">
						<img className="h-4/5 mx-auto rounded-3xl" src={Coming_Soon} alt="Ishimoku"/>
          	<button className="text-xl sm:text-3xl my-2 sm:my-5 hover:underline" onClick={handleClick}>MORE STRATEGIES</button>
					</div>
				</div>

        {/*YOUR_BACK_COMPONENT*/}
				<div>
					<div className="h-2/3 w-1/2 mx-auto pt-2 sm:pt-5 overflow-auto flex-grow bg-steal_teal rounded-3xl shadow-2xl items-center text-center">
          	<button className="text-xl sm:text-3xl my-2 sm:my-5 hover:underline" onClick={handleClick}>COMING SOON</button>
						<p className="px-2 pt-10 sm:px-16 sm:text-2xl text-sm">
							Here you will soon find more strategies that you can try!!
						</p>
					</div>
				</div>
      </ReactCardFlip>
	);
}

export default MoreStrategies;