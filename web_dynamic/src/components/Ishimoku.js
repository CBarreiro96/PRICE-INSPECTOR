import React from "react";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Ishimoku from '../images/Ishimoku.jpeg'

const IshimokuStrategy = () => {

	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/*YOUR_FRONT_CCOMPONENT*/}
				<div className="h-screen pt-1 sm:pt-3">
					<div className="h-2/3 w-1/2 mx-auto pt-2 sm:pt-10 flex-grow bg-steal_teal rounded-3xl shadow-2xl items-center text-center">
						<img className="h-4/5 mx-auto rounded-3xl" src={Ishimoku} alt="Ishimoku" onClick={handleClick}/>
          	<button className="text-xl sm:text-3xl font-medium my-2 sm:my-5 hover:underline" onClick={handleClick}>ISHIMOKU</button>
					</div>
				</div>

        {/*YOUR_BACK_COMPONENT*/}
				<div className="h-screen">
					<div className="h-2/3 w-1/2 mx-auto pt-2 sm:pt-5 overflow-auto flex-grow bg-steal_teal rounded-3xl shadow-2xl items-center text-center">
          	<button className="text-xl font-medium sm:text-3xl my-2 sm:my-5 hover:underline" onClick={handleClick}>ISHIMOKU</button>
						<p className="px-2 sm:px-14 sm:text-lg text-sm" onClick={handleClick}>
							Ichimoku Kinko Hyo, or Ichimoku, is a technical analysis indicator and created by a Japanese journalist, Goichi Hosoda, in the late 1960s.
							The Ichimoku Kinko Hyo indicator generates a variety of signals about market behavior based on the interaction of the price chart lines with the Kumo as well as the interaction of the Ichimoku lines with each other. Many traders consider the Ichimoku to be a very powerful tool for technical analysis.
							If you want to know more test
							<a className="text-navy_blue underline" target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Ichimoku_Kink%C5%8D_Hy%C5%8D"> Ichimoku Kinkō Hyō</a>
						</p>
					</div>
				</div>
      </ReactCardFlip>
	);
}

export default IshimokuStrategy;