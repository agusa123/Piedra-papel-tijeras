export function initWelcomePage(params) {
  const div = document.createElement("div");
  div.className = "root";
  const style = document.createElement("style");
  const imgPapel = require("url:../../components/image/papel.svg");
  const imgPiedra = require("url:../../components/image/piedra.svg");
  const imgTijera = require("url:../../components/image/tijera.svg");
  style.innerHTML = `
  .root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .title{
    font-size: 2rem;
    font-family: 'Odibee Sans', cursive;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
  }
  @media (max-width: 460px) {
    .title {
      font-size: 1.5rem;
    }
  }
  .contenedor-imagenes{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
  }
  .img{
    width: 100px;
    height: 100px;
  }
  @media (max-width: 460px) {
    .img {
      width: 80px;
      height: 80px;
    }
  }
  `;
  div.innerHTML = `
  <my-text tag="h1" class="title">Bienvenido a la aventura</my-text>
  <my-text tag="h1" class="title">Piedra, Papel ó Tijera</my-text>
  <button-component>Empezar</button-component>
  <div class="contenedor-imagenes">
    <img class="img" src=${imgPiedra}>
    <img class="img" src=${imgPapel}>
    <img class="img" src=${imgTijera}>
  </div>
  `;
  div.querySelector("button-component")?.addEventListener("click", () => {
    params.goTo("/inicio");
  });
  div.appendChild(style);
  return div;
}
