import { state } from "../../state";
import { initResultadoPage } from "../resultado/index.ts";
export function initPlayPage(params) {
  const imgFondo = require("url:../../components/image/fondo.png");
  const imgPapel = require("url:../../components/image/papel.svg");
  const imgPiedra = require("url:../../components/image/piedra.svg");
  const imgTijera = require("url:../../components/image/tijera.svg");
  const div = document.createElement("div");
  div.className = "play";
  const style = document.createElement("style");

  //Incerto estilos y etiquetas al div creado anteriormente

  style.innerHTML = `
    .play {
      background-image: url(${imgFondo});
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .eleccion-pc{
      height: 33.33%;
    }
    @media(min-width: 460px){
     .contenedor-imagenes{
        display: flex;
        align-items: flex-start;
      }
     .eleccion-pc{
        display: flex;
        align-items: flex-end;
      }
    }
    .contador-container {
      position: relative;
      width: 200px;
      height: 33.33%;
    }
   
    .contador {
      font-size: 5rem;
      font-family: 'Odibee Sans', cursive;
      color: #333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .spinner {
      width: 200px;
      height: 200px;
      border: 10px solid #f3f3f3;
      border-top: 10px solid black;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .contenedor-imagenes{
        height: 33.33%;
        align-content: end;
    }
    .img{
        margin-top:0px;
        width: 100px;
        height: 185px;
        opacity: 0.5;
        margin: 10px 10px;
    }
    .img-piedra{
        margin-top: 0px;
    }
    .img-papel{
        margin-top: 0px;
    }
    .img-tijera{
        margin-top: 0px;
    }

    @media (max-width: 460px) {
        .img {
        width: 80px;
        height: 150px;
        }
    }
  `;
  div.innerHTML = `
    <div class="eleccion-pc"></div>
    <div class="contador-container">
      <div class="spinner"></div>
      <div class="contador">3</div>
    </div>
     <div class="contenedor-imagenes">
        <img class="img img-piedra" src=${imgPiedra}>
        <img class="img img-papel" src=${imgPapel}>
        <img class="img img-tijera" src=${imgTijera}>
    </div>
  `;

  div.appendChild(style);

  let tiempo = 3;
  let seleccionRealizada = false;
  let tiempoExpirado = false;

  //Esta funcion se encarga de mostrar el contador de 3,2,1, ya que se ejecuta cada segundo

  const intervalo = setInterval(() => {
    tiempo--;
    if (tiempo > 0) {
      div.querySelector(".contador")!.textContent = tiempo.toString();
    } else {
      clearInterval(intervalo);
      div.querySelector(".contador")!.textContent = "¡Ya!";
      div.querySelector(".spinner")!.remove();
      tiempoExpirado = true;
      desactivarClicks();
    }
  }, 1000);

  //Esta funcion se encarga de desactivar los clicks de las imagenes
  //Se ejecuta cuando el tiempo del contador termina o cuando ya se ha realizado una seleccion

  const desactivarClicks = () => {
    ["piedra", "papel", "tijera"].forEach((item) => {
      div
        .querySelector(`.img-${item}`)
        ?.removeEventListener("click", () => manejarClick(item));
    });
  };

  //Esta funcion se encarga de manejar el click de las imagenes
  //Se ejecuta cuando se clickea una imagen y se verifica si ya se ha realizado una seleccion o si el tiempo del contador ha terminado
  //Si se ha realizado una seleccion, no se ejecuta la funcion

  const manejarClick = (elemento: string) => {
    if (seleccionRealizada || tiempoExpirado) return;

    seleccionRealizada = true;
    const imgSeleccionada = div.querySelector(
      `.img-${elemento}`
    ) as HTMLElement;
    imgSeleccionada.style.transition = "transform 0.3s ease-out";
    imgSeleccionada.style.transform = "translateY(-30px)";
    imgSeleccionada.style.opacity = "1";
    imgSeleccionada.style.height = "213.3px";
    imgSeleccionada.style.width = "auto";
    desactivarClicks();
  };

  //Esta parte del codigo se ocupa de la seleccion del usuario
  //Necesita la funcion manejarClick para que se bloqueen las otras imagenes al seleccionar una

  let eleccionUsuario: string = "";
  div.querySelector(".img-piedra")?.addEventListener("click", () => {
    manejarClick("piedra");
    eleccionUsuario = "piedra";
  });
  div.querySelector(".img-papel")?.addEventListener("click", () => {
    manejarClick("papel");
    eleccionUsuario = "papel";
  });
  div.querySelector(".img-tijera")?.addEventListener("click", () => {
    manejarClick("tijera");
    eleccionUsuario = "tijera";
  });

  //Esta funcion se ocupa de generar un numero al azar para asi realizar la eleccion de la computadora
  //Dependiendo del numero generado, se inserta una imagen en el contenedor(div) de la eleccion de la computadora
  var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
  const mostrarEleccionPc = () => {
    if (numeroAleatorio == 1) {
      div.querySelector(
        ".eleccion-pc"
      )!.innerHTML = `<img class="img" src=${imgPiedra} style="transform: rotate(180deg); opacity:1; height: 213px; width:auto">`;
    } else if (numeroAleatorio == 2) {
      div.querySelector(
        ".eleccion-pc"
      )!.innerHTML = `<img class="img" src=${imgPapel} style="transform: rotate(180deg); opacity:1; height: 213px; width:auto">`;
    } else {
      div.querySelector(
        ".eleccion-pc"
      )!.innerHTML = `<img class="img" src=${imgTijera} style="transform: rotate(180deg); opacity:1; height: 213px; width:auto">`;
    }
  };

  //Esta parte del codigo se ejecuta despues de 3 segundos y se encarga de:
  //1. Remplazar el numero generado al azar con la palbra correspondiente a la eleccion de la computadora
  //2. Llama a la funciona resultado para determinar el ganador de la partida
  //3. Realiza un getState para obtener el estado actual del juego
  //4. Crea un objeto con los resultados de la partida actual

  var eleccionPc = "";
  setTimeout(() => {
    mostrarEleccionPc();
    if (numeroAleatorio == 1) {
      eleccionPc = "piedra";
    } else if (numeroAleatorio == 2) {
      eleccionPc = "papel";
    } else {
      eleccionPc = "tijera";
    }
    const ganadorDeLaPartida = ganador(eleccionPc, eleccionUsuario);
    let puntajePc: number;
    let puntajeUsuario: number;
    if (ganadorDeLaPartida == "pc") {
      puntajePc = 1;
      puntajeUsuario = 0;
    } else if (ganadorDeLaPartida == "usuario") {
      puntajePc = 0;
      puntajeUsuario = 1;
    } else {
      puntajePc = 0;
      puntajeUsuario = 0;
    }
    const currentState = state.getState();
    const idMayor = currentState.reduce((maxObj, currentObj) => {
      return currentObj.id > maxObj.id ? currentObj : maxObj;
    }, currentState[0]);

    const obj = {
      id: idMayor.id + 1,
      eleccionPc: eleccionPc,
      eleccionUsuario: eleccionUsuario,
      puntajePc: puntajePc,
      puntajeUsuario: puntajeUsuario,
    };
    currentState.push(obj);
    state.setState(currentState);
  }, 3000);
  setTimeout(() => {
    params.goTo("/resultado");
  }, 4000);

  return div;
}

//Esta funcion se encarga de determinar el ganador de la partida

export function ganador(eleccionPc: string, eleccionUsuario: string) {
  switch (eleccionPc) {
    case "piedra":
      if (eleccionUsuario == "tijera") {
        return "pc";
      } else if (eleccionUsuario == "papel") {
        return "usuario";
      } else if (eleccionUsuario == "piedra") {
        return "empate";
      } else {
        return "pc";
      }
    case "papel":
      if (eleccionUsuario == "tijera") {
        return "usuario";
      } else if (eleccionUsuario == "papel") {
        return "empate";
      } else if (eleccionUsuario == "piedra") {
        return "pc";
      } else {
        return "pc";
      }
    case "tijera":
      if (eleccionUsuario == "tijera") {
        return "empate";
      } else if (eleccionUsuario == "papel") {
        return "pc";
      } else if (eleccionUsuario == "piedra") {
        return "usuario";
      } else {
        return "pc";
      }
  }
}
