import React, {useState} from "react";

// Variables de estado:
//son una forma de trabajar con variables que me permitan ir de forma sincronizada con los valores que se modifiquen y con lo que se ve representado en el componente
//se hace con useState
//React-Hooks => se utilizan para trabajar con el ciclo de vida del componente. 
//Ciclo de vida de un componente: 1) cuando se renderiza; 2) cuando sufre modificaciones; 3) cuando se desmonta;
//los State trabajan cuando se renderiza (cuando se monta) o cuando sufre modificaciones (cuando se actualiza).

//useState
//me permite crear un tipo de variable (estado) que cuando modifique su valor (en la consola), también lo veo reflejado en el componente.
//IMPORTANTE: se debe importar (línea 1)

const Home = () => {
	const[count, setCount] = useState(0); // en el arreglo tengo una variable (state) y una función (setState), y a esto le defino un valor inicial: setState; se puede usar CUALQUIER NOMBRE
	
	const [time, updateTime] = useState(new Date());
	const intervalo = setInterval(()=>{
		updateTime(new Date)
	},1000)
	
	return (
		<div className="text-center">  
			<h2>{count} likes</h2>
			<span onClick={()=> setCount(count + 1)} style = {{ fontSize : "50px"}}>👍</span>
			<span onClick={()=> (count === 0 ? 0 : setCount(count - 1))} style = {{ fontSize : "50px"}}>👎</span>
		<hr/>
			<div className="row text-center">
				<div className="col">Clock:</div>
				<div className="col">{time.getHours()}</div>
				<div className="col">{time.getMinutes()}</div>
				<div className="col">{time.getSeconds()}</div>
			</div>
		</div>
			

	);
};

export default Home;
