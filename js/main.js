"use strict";

//QUERY
const selectRace = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const resultPlay = document.querySelector(".js-textResult");
const pointPlayer = document.querySelector(".js-player");
const pointPc = document.querySelector(".js-pc");

//VARIABLES GLOBALES
let playerPoints = 0; //Contador ptos.jugador
let computerPoints = 0; //Contador ptos.ordenador
let games = 0; // Contador partidas jugadas
//FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}//Función para crear y retornar números aleatorios de 0 a 5

function userPlayerRace() {
  return parseInt(selectRace.value);
}// Función que retorna recoge el valor de la raza buena y lo convierte en dato numérico

function getCompuRace() {
  const randomNumber = getRandomNumber(5);
  let result = 0;
  if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
    result = 2;
  } else if (randomNumber === 4) {
    result = 3;
  } else {
    result = 5;
  }

  return result;
}//Función que crea una constante en la que se guarda el nº aleatorio generado
// Crea una variable con valor 0 en la que se irán guardando los resultados de las condiciones
//Condicionales que indican la igualdad entre el nºaleatorio y los valores de las fuerzas de las razas malas
//Retorna el valor de result tras la comparación

function compare(userPlayerRace, getCompuRace) {
  if (userPlayerRace > getCompuRace) {
    resultPlay.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
    playerPoints++;
  } else if (userPlayerRace < getCompuRace) {
    resultPlay.innerHTML =
      "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
      computerPoints++;
  } else {
    resultPlay.innerHTML = "Empate.";
  }
}//Función para comparar los valores que pasa como parámetros (Func.valor raza buena, Func.valor raza mala)
//Comparaciones si raza buena es mayor, menor o igual a raza mala
//Indicamos que se escriba un mensaje diferente en cada caso en el HTML 
//Incrementamos contadores de raza buena o mala según cada caso de la comparación

function renderPoints() {
    pointPlayer.innerHTML = `Jugador: ${playerPoints}`;
    pointPc.innerHTML = `Computadora: ${computerPoints}`;
}// Función para pintar marcadores en el HTML

function handleFunction(event) {
  event.preventDefault();
  games++;
  const strength = userPlayerRace();
  const compuRace = getCompuRace();
  compare(strength, compuRace);
  renderPoints();
}//Función manejadora donde se llaman a las acciones(funciones) que tiene que hacer la web cuando el usuario hace click en el botón de "batalla":
//Incrementa contador de pulsaciones
//Llama y guarda valor raza buena
//Llama y guarda valor raza mala
//Llama a la función de comparar con los parámetros a comparar: constante en la que he guardado el valor de razas buenas y constante con valor de razas malas

//EVENT

//CÓDIGO QUE SE EJECUTE AL CARGAR LA PÁGINA

btn.addEventListener("click", handleFunction);
//Evento de escucha al botón batalla
//De tipo click
//Ejecuta la función manejadora
