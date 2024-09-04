var e=globalThis,t={},i={},a=e.parcelRequire7544;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequire7544=a);var r=a.register;r("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,a=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)a.set(t[i],{baseUrl:e,path:t[i+1]})}}),r("a4fux",function(e,t){e.exports=new URL("papel.5f79bbf0.svg",import.meta.url).toString()}),r("1zyhr",function(e,t){e.exports=new URL("piedra.c88f7ccf.svg",import.meta.url).toString()}),r("fa3UX",function(e,t){e.exports=new URL("tijera.6a2fdda1.svg",import.meta.url).toString()}),r("7iVbZ",function(e,t){e.exports=new URL("fondo.947931b6.png",import.meta.url).toString()}),r("l8TFH",function(e,t){e.exports=new URL("resultadoGanaste.a5669fde.svg",import.meta.url).toString()}),r("jNGhT",function(e,t){e.exports=new URL("resultadoPerdiste.9846907e.svg",import.meta.url).toString()}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["1LzKV","index.61ffbd45.js","471gE","papel.5f79bbf0.svg","9uo5g","piedra.c88f7ccf.svg","5h4nD","tijera.6a2fdda1.svg","gUR41","fondo.947931b6.png","2b8d2","resultadoGanaste.a5669fde.svg","c6iw9","resultadoPerdiste.9846907e.svg"]'));const n={data:[{id:1,eleccionPc:"piedra",eleccionUsuario:"papel",PuntajePc:0,PuntajeUsuario:1}],listener:[],getState(){return this.data},setState(e){for(let t of(this.data=e,this.listener))t(e);localStorage.setItem("save-state",JSON.stringify(e))},subscribe(e){this.listener.push(e)},initState(){let e=localStorage.getItem("save-state")||"";this.setState(JSON.parse(e))}};function o(e){let t=a("7iVbZ"),i=document.createElement("div");i.className="root";let r=document.createElement("style"),n=a("a4fux"),o=a("1zyhr"),s=a("fa3UX");return r.innerHTML=`
  .root{
    background-image: url(${t});
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
    height: 185px;
    margin: 10px;
  }
  
  @media (max-width: 460px) {
    .img {
      width: 80px;
      height: auto;
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
  `,i.innerHTML=`
  <my-text tag="h1" class="title">Bienvenido a la aventura</my-text>
  <my-text tag="h1" class="title">Piedra, Papel \xf3 Tijera</my-text>
  <button-component>Empezar</button-component>
  <div class="contenedor-imagenes">
    <img class="img img-piedra" src=${o}>
    <img class="img img-papel" src=${n}>
    <img class="img img-tijera" src=${s}>
  </div>
  `,i.querySelector("button-component")?.addEventListener("click",()=>{e.goTo("/inicio")}),i.appendChild(r),i}function s(e){let t=a("7iVbZ"),i=a("a4fux"),r=a("1zyhr"),n=a("fa3UX"),o=document.createElement("div");o.className="root";let s=document.createElement("style");return s.innerHTML=`
   .title{
    max-width: 400px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
   }
  .root{
    background-image: url(${t});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .img{
    margin-top: 20px;
    width: 100px;
    height: 185px;
    margin: 10px;
  }
  .contenedor-imagenes{
    margin-top: 30px;
    }
  button-component{
    margin-bottom: 30px;
  }
@media (max-width: 460px) {
    .img {
      width: 80px;
      height: auto;
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
  `,o.innerHTML=`
    <div class="title">
        <my-text tag="h1" >Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
    </div>
    <button-component>Jugar</button-component>
    <div class="contenedor-imagenes">
        <img class="img img-piedra" src=${r}>
        <img class="img img-papel" src=${i}>
        <img class="img img-tijera" src=${n}>
    </div>
    `,o.querySelector("button-component")?.addEventListener("click",()=>{e.goTo("/play")}),o.appendChild(s),o}function c(e){let t=a("7iVbZ"),i=a("a4fux"),r=a("1zyhr"),o=a("fa3UX"),s=document.createElement("div");s.className="play";let c=document.createElement("style");c.innerHTML=`
    .play {
      background-image: url(${t});
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
  `,s.innerHTML=`
    <div class="eleccion-pc"></div>
    <div class="contador-container">
      <div class="spinner"></div>
      <div class="contador">3</div>
    </div>
     <div class="contenedor-imagenes">
        <img class="img img-piedra" src=${r}>
        <img class="img img-papel" src=${i}>
        <img class="img img-tijera" src=${o}>
    </div>
  `,s.appendChild(c);let m=3,d=!1,p=!1,u=setInterval(()=>{--m>0?s.querySelector(".contador").textContent=m.toString():(clearInterval(u),s.querySelector(".contador").textContent="¡Ya!",s.querySelector(".spinner").remove(),p=!0,g())},1e3),g=()=>{["piedra","papel","tijera"].forEach(e=>{s.querySelector(`.img-${e}`)?.removeEventListener("click",()=>f(e))})},f=e=>{if(d||p)return;d=!0;let t=s.querySelector(`.img-${e}`);t.style.transition="transform 0.3s ease-out",t.style.transform="translateY(-30px)",t.style.opacity="1",t.style.height="213.3px",t.style.width="auto",g()},h="";s.querySelector(".img-piedra")?.addEventListener("click",()=>{f("piedra"),h="piedra"}),s.querySelector(".img-papel")?.addEventListener("click",()=>{f("papel"),h="papel"}),s.querySelector(".img-tijera")?.addEventListener("click",()=>{f("tijera"),h="tijera"});var x=Math.floor(3*Math.random())+1;let y=()=>{1==x?s.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${r} style="transform: rotate(180deg); opacity:1; height: 213px; width:auto">`:2==x?s.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${i} style="transform: rotate(180deg); opacity:1; height: 213px; width:auto">`:s.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${o} style="transform: rotate(180deg); opacity:1; height: 213px; width:auto">`};var v="";return setTimeout(()=>{let e,t;y();let i=l(v=1==x?"piedra":2==x?"papel":"tijera",h);"pc"==i?(e=1,t=0):"usuario"==i?(e=0,t=1):(e=0,t=0);let a=n.getState(),r={id:a.reduce((e,t)=>t.id>e.id?t:e,a[0]).id+1,eleccionPc:v,eleccionUsuario:h,puntajePc:e,puntajeUsuario:t};a.push(r),n.setState(a)},3e3),setTimeout(()=>{e.goTo("/resultado")},4e3),s}function l(e,t){switch(e){case"piedra":if("tijera"==t)return"pc";if("papel"==t)return"usuario";if("piedra"==t)return"empate";return"pc";case"papel":if("tijera"==t)return"usuario";if("papel"==t)return"empate";if("piedra"==t);return"pc";case"tijera":if("tijera"==t)return"empate";if("papel"==t)return"pc";if("piedra"==t)return"usuario";return"pc"}}function m(e){var t,i;let r=a("l8TFH"),o=a("jNGhT"),s=a("a4fux"),c=a("1zyhr"),m=a("fa3UX"),d=n.getState(),p=d.reduce((e,t)=>t.id>e.id?t:e,d[0]),u=document.createElement("div"),g=document.createElement("style"),f=document.createElement("div");u.className="resultado",f.className="resultado-imagen",g.innerHTML=`
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
  `,u.innerHTML=`
  <div class="eleccion-pc"></div> 
  <div class="eleccion-usuario"></div>
  `,u.appendChild(g);let h=l(p.eleccionPc,p.eleccionUsuario),x=()=>d.reduce((e,t)=>e+(t.puntajeUsuario||0),0),y=()=>d.reduce((e,t)=>e+(t.puntajePc||0),0);"pc"==h?(u.classList.add("perdedor"),f.innerHTML=`
    <img class="img" src=${o} alt="Perdiste">
    <div class="score">
      <my-text tag="h1">Puntaje</my-text>
      <my-text class="score-usuario" tag="h1">Vos: ${x()}</my-text>
      <my-text class="score-pc" tag="h1">PC: ${y()}</my-text>
    </div>
    <button-component class="volver-a-jugar">Volver a jugar</button-component>
    <button-component class="guardar-y-salir">Guardar y salir</button-component>`):"usuario"==h?(u.classList.add("ganador"),f.innerHTML=`
    <img class="img" src=${r} alt="Ganaste">
    <div class="score">
      <my-text tag="h1">Puntaje</my-text>
      <my-text class="score-usuario" tag="h1">Vos: ${x()}</my-text>
      <my-text class="score-pc" tag="h1">PC: ${y()}</my-text>
    </div>
    <button-component class="volver-a-jugar">Volver a jugar</button-component>
    <button-component class="guardar-y-salir">Guardar y salir</button-component>
    `):(u.classList.add("empate"),f.innerHTML=`
    <div class="score">
      <my-text tag="h1">Puntaje</my-text>
      <my-text class="score-usuario" tag="h1">Vos: ${x()}</my-text>
      <my-text class="score-pc" tag="h1">PC: ${y()}</my-text>
    </div>
    <button-component class="volver-a-jugar">Volver a jugar</button-component>
    <button-component class="guardar-y-salir">Guardar y salir</button-component>
    `),"piedra"==(t=p.eleccionPc)?u.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${c} style="transform: rotate(180deg);">`:"papel"==t?u.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${s} style="transform: rotate(180deg);">`:u.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${m} style="transform: rotate(180deg);">`,"piedra"==(i=p.eleccionUsuario)?u.querySelector(".eleccion-usuario").innerHTML=`<img class="img" src=${c} >`:"papel"==i?u.querySelector(".eleccion-usuario").innerHTML=`<img class="img" src=${s} >`:"tijera"==i?u.querySelector(".eleccion-usuario").innerHTML=`<img class="img" src=${m} >`:u.querySelector(".eleccion-usuario").innerHTML="";let v=document.querySelector(".root");return v.appendChild(u),v.appendChild(f),f.querySelector(".volver-a-jugar")?.addEventListener("click",()=>{u.remove(),f.remove(),e.goTo("/play")}),f.querySelector(".guardar-y-salir")?.addEventListener("click",()=>{u.remove(),f.remove(),e.goTo("/welcome")}),u}const d="/Piedra-papel-tijeras";function p(){return location.host.includes("github.io")}class u extends HTMLElement{constructor(){super(),this.tags=["h1","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"});let e=this.getAttribute("tag")||"p";this.tags.includes(e)&&(this.tag=e),this.render()}render(){let e=document.createElement(this.tag);e.textContent=this.textContent,this.shadow.appendChild(e)}}customElements.define("my-text",u);class g extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
    
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px;
        }
        .my-button{
            font-family: 'Odibee Sans', cursive;
            font-size: 40px;
            background-color: #4FB3E8; /* Celeste m\xe1s intenso */
            color: #fff;
            border: 4px solid #0000FF; /* Azul */
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            width: 322px;
            height: 80px;
            transition: all 0.3s ease;
        }
        .my-button:active {
            background-color: #3D8CBF; /* Un tono m\xe1s oscuro */
            transform: scale(0.95);
        }
        @media (max-width: 460px) {
            .my-button {
                font-size: 30px;
                max-width: 250px;
                height: 60px;
            }
        }
    `,this.render(),this.shadow.appendChild(e)}render(){this.shadow.innerHTML=`
        <div class="container">
            <button class="my-button">${this.textContent}</button>
        </div>
    `}}customElements.define("button-component",g),location.pathname,function(e){function t(e){let t=p()?d+e:e;history.pushState({},"",t),i(t)}function i(i){let a=p()?i.replace(d,""):i;for(let i of[{path:/\/welcome/,component:o},{path:/\/inicio/,component:s},{path:/\/play/,component:c},{path:/\/resultado/,component:m}])if(i.path.test(a)){let a=i.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(a)}}"/"==location.pathname?t("/welcome"):"/inicio"==location.pathname||"/play"==location.pathname?i(location.pathname):t("/welcome"),window.onpopstate=function(e){i(location.pathname)}}(document.querySelector(".root")),n.initState();
//# sourceMappingURL=index.61ffbd45.js.map
