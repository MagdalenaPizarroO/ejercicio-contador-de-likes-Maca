import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let likes = 0;
	return (
		<div className="text-center">
			<h1>{likes}</h1>
			<button
				onClick={()=>{
					likes+=1
					console.log(likes)
				}}
			>+1</button>
		</div>
	);
};

export default Home;
