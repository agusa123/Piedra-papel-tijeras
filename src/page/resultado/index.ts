import { state } from "../../state";
import { ganador } from "../play/index.ts";
export function initResultadoPage(params) {
  const imgGanaste = require("url:../../components/image/resultadoGanaste.svg");
  const imgPerdiste = require("url:../../components/image/resultadoPerdiste.svg");
  const imgPapel = require("url:../../components/image/papel.svg");
  const imgPiedra = require("url:../../components/image/piedra.svg");
  const imgTijera = require("url:../../components/image/tijera.svg");

  const currentState = state.getState();

  const objIdMayor = currentState.reduce((maxObj, currentObj) => {
    return currentObj.id > maxObj.id ? currentObj : maxObj;
  }, currentState[0]);

  const div = document.createElement("div");
  const style = document.createElement("style");
  const resultadoImagen = document.createElement("div");

  div.className = "resultado";
  resultadoImagen.className = "resultado-imagen";
  style.innerHTML = `
  .resultado {
    opacity: 0.7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .resultado.ganador {
    background-color: #90EE90;
  }
  .resultado.perdedor {
    background-color: #800000;
    opacity: 0.7;
  }
  .resultado.empate {
    background-color: #FFFFE0;
  }
  .img { 
    height: 213px; 
    width: auto;
  }
  
  .eleccion-pc{
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
  .eleccion-usuario {
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
  }
  .resultado-imagen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  .score{
   min-width: 150px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    border-color: black;
    border-style: solid;
    border-width: 4px;
  }
  .score-usuario{
    
    text-align: right;
  }
  .score-pc{
    text-align: right;
  }
  `;
  div.innerHTML = `
  <div class="eleccion-pc"></div> 
  <div class="eleccion-usuario"></div>
  `;
  div.appendChild(style);

  const ganadorDeLaPartida = ganador(
    objIdMayor.eleccionPc,
    objIdMayor.eleccionUsuario
  );
  const calcularPuntajeUsuario = () => {
    return currentState.reduce((suma, partida) => {
      return suma + (partida.puntajeUsuario || 0);
    }, 0);
  };

  const calcularPuntajePc = () => {
    return currentState.reduce((suma, partida) => {
      return suma + (partida.puntajePc || 0);
    }, 0);
  };

  if (ganadorDeLaPartida == "pc") {
    div.classList.add("perdedor");
    resultadoImagen.innerHTML = `
    <img class="img" src=${imgPerdiste} alt="Perdiste">
    <div class="score">
      <my-text tag="h1">Puntaje</my-text>
      <my-text class="score-usuario" tag="h1">Vos: ${calcularPuntajeUsuario()}</my-text>
      <my-text class="score-pc" tag="h1">PC: ${calcularPuntajePc()}</my-text>
    </div>
    <button-component class="volver-a-jugar">Volver a jugar</button-component>
    <button-component class="guardar-y-salir">Guardar y salir</button-component>`;
  } else if (ganadorDeLaPartida == "usuario") {
    div.classList.add("ganador");
    resultadoImagen.innerHTML = `
    <img class="img" src=${imgGanaste} alt="Ganaste">
    <div class="score">
      <my-text tag="h1">Puntaje</my-text>
      <my-text class="score-usuario" tag="h1">Vos: ${calcularPuntajeUsuario()}</my-text>
      <my-text class="score-pc" tag="h1">PC: ${calcularPuntajePc()}</my-text>
    </div>
    <button-component class="volver-a-jugar">Volver a jugar</button-component>
    <button-component class="guardar-y-salir">Guardar y salir</button-component>
    `;
  } else {
    div.classList.add("empate");
    resultadoImagen.innerHTML = `
    <div class="score">
      <my-text tag="h1">Puntaje</my-text>
      <my-text class="score-usuario" tag="h1">Vos: ${calcularPuntajeUsuario()}</my-text>
      <my-text class="score-pc" tag="h1">PC: ${calcularPuntajePc()}</my-text>
    </div>
    <button-component class="volver-a-jugar">Volver a jugar</button-component>
    <button-component class="guardar-y-salir">Guardar y salir</button-component>
    `;
  }

  const mostrarEleccionPc = (paramsPc: string) => {
    if (paramsPc == "piedra") {
      div.querySelector(
        ".eleccion-pc"
      )!.innerHTML = `<img class="img" src=${imgPiedra} style="transform: rotate(180deg);">`;
    } else if (paramsPc == "papel") {
      div.querySelector(
        ".eleccion-pc"
      )!.innerHTML = `<img class="img" src=${imgPapel} style="transform: rotate(180deg);">`;
    } else {
      div.querySelector(
        ".eleccion-pc"
      )!.innerHTML = `<img class="img" src=${imgTijera} style="transform: rotate(180deg);">`;
    }
  };
  mostrarEleccionPc(objIdMayor.eleccionPc);

  const mostrarEleccionUsuario = (paramasUsers: string) => {
    if (paramasUsers == "piedra") {
      div.querySelector(
        ".eleccion-usuario"
      )!.innerHTML = `<img class="img" src=${imgPiedra} >`;
    } else if (paramasUsers == "papel") {
      div.querySelector(
        ".eleccion-usuario"
      )!.innerHTML = `<img class="img" src=${imgPapel} >`;
    } else if (paramasUsers == "tijera") {
      div.querySelector(
        ".eleccion-usuario"
      )!.innerHTML = `<img class="img" src=${imgTijera} >`;
    } else {
      div.querySelector(".eleccion-usuario")!.innerHTML = ``;
    }
  };
  mostrarEleccionUsuario(objIdMayor.eleccionUsuario);

  const contenedor = document.querySelector(".root");
  contenedor!.appendChild(div);
  contenedor!.appendChild(resultadoImagen);

  resultadoImagen
    .querySelector(".volver-a-jugar")
    ?.addEventListener("click", () => {
      div.remove();
      resultadoImagen.remove();
      params.goTo("/play");
    });
  resultadoImagen
    .querySelector(".guardar-y-salir")
    ?.addEventListener("click", () => {
      div.remove();
      resultadoImagen.remove();
      params.goTo("/welcome");
    });

  return div;
}
