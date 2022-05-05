import React from "react";
import { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState(null);

	function ClickLights(colorlights) {
		if (color === colorlights) {
			setColor("");
		} else {
			setColor(colorlights);
		}
	}

	return (
		<div>
			<div id="line"></div>
			<div id="container">
				<div id="box">
					<div
						className={"red" + (color == "red" ? " lightred" : "")}
						onClick={() => ClickLights("red")}></div>
					<div
						onClick={() => ClickLights("yellow")}
						className={
							"yellow" + (color == "yellow" ? " lightyellow" : "")
						}></div>
					<div
						className={
							"green" + (color == "green" ? " lightgreen" : "")
						}
						onClick={() => ClickLights("green")}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
