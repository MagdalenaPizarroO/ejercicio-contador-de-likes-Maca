import React from "react";

// Variables de estado:
//son una forma de trabajar con variables que me permitan ir de forma sincronizada con los valores que se modifiquen y con lo que se ve representado en el componente
//se hace con useState
//React-Hooks => se utilizan para trabajar con el ciclo de vida del componente. **min 9:20;

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
