import React, {useState} from "react";
import CuartoEjemplo from "./cuartoEjemplo.jsx";

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
	//primer ejemplo
	const[count, setCount] = useState(0); // en el arreglo tengo una variable (state) y una función (setState), y a esto le defino un valor inicial: setState; se puede usar CUALQUIER NOMBRE
	
	//segundo ejemplo
	const [time, updateTime] = useState(new Date());
	const intervalo = setInterval(()=>{
		updateTime(new Date)
	},1000)

	//tercer ejemplo
	const [currentValue, setValue] = useState(""); //valor inicial: vacío
	
	//cuarto ejemplo
	const [opened, setOpened] = useState(true)
	
	return (
		<div className="text-center"> 
			<h1>Primer ejemplo:</h1> 
			<h3>{count} likes</h3>
			<span onClick={()=> setCount(count + 1)} style = {{ fontSize : "50px"}}>👍</span>
			<span onClick={()=> (count === 0 ? 0 : setCount(count - 1))} style = {{ fontSize : "50px"}}>👎</span>
		<hr/>
			<h1>Segundo ejemplo:</h1>
			<div className="row text-center">
				<div className="col">Clock:</div>
				<div className="col">{time.getHours()}</div>
				<div className="col">{time.getMinutes()}</div>
				<div className="col">{time.getSeconds()}</div>
			</div>
		<hr/>
			<h1>Tercer ejemplo:</h1>
			<div className="row text-center">
				<h3>Your name is: {currentValue ? currentValue : "Not defined"}</h3>
				
				<input type="text" onChange={e => setValue(e.target.value)} value={currentValue} placeholder="Please type your name"/>
				{/* cuando ocurre un cambio (onChange), capturamos el evento (e); para saber qué fue lo que cambió, usamos setValue: evento.target(en qué etiqueta se ejecutó).value(qué valor tomó la etiqueta en particular) es decir, quéPasó.dóndePasó.quéValorTomó */}

				<h3>Tú: {currentValue>0 || currentValue<17 && "no puedes manejar"}
				{currentValue>=18 && "puedes manejar"}
				</h3> 
				{/* cuando quieres poner muchas condiciones, lo mejor es separarlo en distintos ternarios, en lugar de poner un ternario dentro de otro ternario...  */}

			<hr/>
			<h1>Cuarto ejemplo</h1>
			<CuartoEjemplo/>
			</div>
		</div>
	);


};

export default Home;
