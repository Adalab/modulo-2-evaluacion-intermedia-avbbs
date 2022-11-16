"use strict";

//QUERY
const selectRace = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const resultPlay = document.querySelector(".js-textResult");
const pointPlayer = document.querySelector(".js-player");
const pointPc = document.querySelector(".js-pc");
const btnReset = document.querySelector('.js-btnReset');
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

function countEnd(){
  games++;
  if (games === 10){
    btn.classList.add('hidden');
    btnReset.classList.remove('hidden');
    if(playerPoints > computerPoints){
      resultPlay.innerHTML = 'Has ganado el juego';
    } else if (playerPoints < computerPoints) {
      resultPlay.innerHTML = 'Has perdido el juego';
    } else{
      resultPlay.innerHTML = 'Has empatado';
    }
  }
}//Función para saber cuando llega a 10 el contador de partidas
//Incrementa contador de pulsaciones
//Condicional: Si el contador de las partidas  es igual a 10 añade clase hidden a botón batalla y borra clase hidden del botón reset
//Condicional: Compara si el número del contador del jugador es mayor o menor que el del ordenador y muestra texto en el HTML

function handleFunction(event) {
  event.preventDefault();
  const strength = userPlayerRace();
  const compuRace = getCompuRace();
  compare(strength, compuRace);
  renderPoints();
  countEnd();
  
}//Función manejadora donde se llaman a las acciones(funciones) que tiene que hacer la web cuando el usuario hace click en el botón de "batalla":
//Llama y guarda valor raza buena
//Llama y guarda valor raza mala
//Llama a la función de comparar con los parámetros a comparar: constante en la que he guardado el valor de razas buenas y constante con valor de razas malas
//Llama a que pinta marcadores en el HTML
//Llama a la función que determina cuándo llega a 10 el contador de partidas

function handleReset (event) {
  event.preventDefault();
  btnReset.classList.add('hidden');
  btn.classList.remove('hidden'); 
  playerPoints = 0;
  computerPoints = 0;  
  games = 0;
  renderPoints(); 
  resultPlay.innerHTML = '¡Comienza la batalla!';
}//Función manejadora donde se indican los movimientos de la web al pulsar el btn reset
//Añade clase hidden al botón de reset
//Elimina la clase hidden del botón inicial
//Ponemos los tres contadores a 0 para poder iniciar el juego
//Lama a la función que pinta los marcadores de nuevo con el valor que tengan (0)
//Se vuelve  a pintar el mismo texto inicial en el HTML


//EVENT//CÓDIGO QUE SE EJECUTE AL CARGAR LA PÁGINA

btn.addEventListener("click", handleFunction);
//Evento de escucha al botón batalla
//De tipo click
//Ejecuta la función manejadora
btnReset.addEventListener('click', handleReset);
//Evento de escucha al botón reset
//De tipo click
//Ejecuta la función manejadora reset