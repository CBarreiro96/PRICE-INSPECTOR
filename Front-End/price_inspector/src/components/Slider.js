import React from "react";
import { useState } from "react";
import "../Slider.css";
import IshimokuStrategy from "../components/Ishimoku";
import MoreStrategies from "../components/More_Strategies";

const Slider = () => {

	const	sliderArr =[<IshimokuStrategy/>, <MoreStrategies/>]

	const [x,setX] =useState(0)

	const goLeft=()=> {
		x === 0 ? setX(-100*(sliderArr.length-1)) : setX(x + 100)
	}

	const goRight=()=> {
		(x === -100 * (sliderArr.length-1)) ? setX(0) : setX(x - 100)
	}

	return (
		<div>
			<h1 className="text-center text-4xl sm:text-6xl py-5">
				Strategies
			</h1>
			<div className="slider">
				{
					sliderArr.map((item,index)=> {
						return (
							<div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
								{item}
							</div>
						)
					})
				}
				<button id="goLeft" onClick={goLeft}>
					<i class="fas fa-angle-left"></i>
				</button>
				<button id="goRight" onClick={goRight}>
					<i class="fas fa-angle-right"></i>
				</button>
			</div>
		</div>
	)
}

export default Slider;
