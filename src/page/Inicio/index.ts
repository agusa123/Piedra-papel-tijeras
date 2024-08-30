export function initInicioPage(params) {
  const imgPapel = require("url:../../components/image/papel.svg");
  const imgPiedra = require("url:../../components/image/piedra.svg");
  const imgTijera = require("url:../../components/image/tijera.svg");
  const div = document.createElement("div");
  div.className = "root";
  const style = document.createElement("style");
  style.innerHTML = `
   .title{
    max-width: 400px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
   }
  .root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
.img{
    margin-top: 20px;
    width: 100px;
    height: 100px;
  }
@media (max-width: 460px) {
    .img {
      width: 80px;
      height: 80px;
    }
  }
  .img-piedra {
    animation: flotar1 2s ease-in-out infinite;
  }
  .img-papel {
    animation: flotar2 2s ease-in-out infinite;
  }
  .img-tijera {
    animation: flotar3 2s ease-in-out infinite;
  }
 
  @keyframes flotar1 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @keyframes flotar2 {
    0%, 100% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(0);
    }
  }
  @keyframes flotar3 {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  `;
  div.innerHTML = `
    <div class="title">
        <my-text tag="h1" >Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
    </div>
    <button-component>Jugar</button-component>
    <div class="contenedor-imagenes">
        <img class="img img-piedra" src=${imgPiedra}>
        <img class="img img-papel" src=${imgPapel}>
        <img class="img img-tijera" src=${imgTijera}>
    </div>
    `;
  div.querySelector("button-component")?.addEventListener("click", () => {
    params.goTo("/play");
  });
  div.appendChild(style);

  return div;
}
