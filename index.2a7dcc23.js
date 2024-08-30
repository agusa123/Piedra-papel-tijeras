var e=globalThis,t={},i={},n=e.parcelRequire7544;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequire7544=n);var a=n.register;function r(e){let t=document.createElement("div");t.className="root";let i=document.createElement("style"),a=n("a4fux"),r=n("1zyhr"),o=n("fa3UX");return i.innerHTML=`
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
  `,t.innerHTML=`
  <my-text tag="h1" class="title">Bienvenido a la aventura</my-text>
  <my-text tag="h1" class="title">Piedra, Papel \xf3 Tijera</my-text>
  <button-component>Empezar</button-component>
  <div class="contenedor-imagenes">
    <img class="img" src=${r}>
    <img class="img" src=${a}>
    <img class="img" src=${o}>
  </div>
  `,t.querySelector("button-component")?.addEventListener("click",()=>{e.goTo("/inicio")}),t.appendChild(i),t}function o(e){let t=n("a4fux"),i=n("1zyhr"),a=n("fa3UX"),r=document.createElement("div");r.className="root";let o=document.createElement("style");return o.innerHTML=`
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
  `,r.innerHTML=`
    <div class="title">
        <my-text tag="h1" >Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
    </div>
    <button-component>Jugar</button-component>
    <div class="contenedor-imagenes">
        <img class="img img-piedra" src=${i}>
        <img class="img img-papel" src=${t}>
        <img class="img img-tijera" src=${a}>
    </div>
    `,r.querySelector("button-component")?.addEventListener("click",()=>{e.goTo("/play")}),r.appendChild(o),r}a("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,n=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)n.set(t[i],{baseUrl:e,path:t[i+1]})}}),a("a4fux",function(e,t){e.exports=new URL("papel.5f79bbf0.svg",import.meta.url).toString()}),a("1zyhr",function(e,t){e.exports=new URL("piedra.c88f7ccf.svg",import.meta.url).toString()}),a("fa3UX",function(e,t){e.exports=new URL("tijera.6a2fdda1.svg",import.meta.url).toString()}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["1LzKV","index.2a7dcc23.js","471gE","papel.5f79bbf0.svg","9uo5g","piedra.c88f7ccf.svg","5h4nD","tijera.6a2fdda1.svg"]'));const s={data:[{id:1,eleccionPc:"",eleccionUsuario:"",PuntajePc:0,PuntajeUsuario:0}],listener:[],getState(){return this.data},setState(e){for(let t of(console.log("Soy el state, he cambiado",this.data),this.data=e,this.listener))t(e);localStorage.setItem("save-state",JSON.stringify(e))},subscribe(e){this.listener.push(e)},initState(){let e=localStorage.getItem("save-state")||"";this.setState(JSON.parse(e))}};function c(e){let t=n("a4fux"),i=n("1zyhr"),a=n("fa3UX"),r=document.createElement("div");r.className="root";let o=document.createElement("style");o.innerHTML=`
    .root {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .contador-container {
      position: relative;
      width: 200px;
      height: 200px;
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
        height: 250px;
        align-content: end;
    }
    .img{
        margin-top:0px;
        width: 100px;
        height: 100px;
        opacity: 0.5;
    }
    @media (max-width: 460px) {
        .img {
        width: 80px;
        height: 80px;
        }
    }
  `,r.innerHTML=`
    <div class="eleccion-pc"></div>
    <div class="contador-container">
      <div class="spinner"></div>
      <div class="contador">3</div>
    </div>
     <div class="contenedor-imagenes">
        <img class="img img-piedra" src=${i}>
        <img class="img img-papel" src=${t}>
        <img class="img img-tijera" src=${a}>
    </div>
  `,r.appendChild(o);let c=3,l=!1,p=!1,m=setInterval(()=>{--c>0?r.querySelector(".contador").textContent=c.toString():(clearInterval(m),r.querySelector(".contador").textContent="¡Ya!",r.querySelector(".spinner").remove(),p=!0,d())},1e3),d=()=>{["piedra","papel","tijera"].forEach(e=>{r.querySelector(`.img-${e}`)?.removeEventListener("click",()=>u(e))})},u=e=>{if(l||p)return;l=!0;let t=r.querySelector(`.img-${e}`);t.style.transition="transform 0.3s ease-out",t.style.transform="translateY(-30px)",t.style.opacity="1",t.style.height="150px",t.style.width="150px",d()},g="";r.querySelector(".img-piedra")?.addEventListener("click",()=>{u("piedra"),g="piedra"}),r.querySelector(".img-papel")?.addEventListener("click",()=>{u("papel"),g="papel"}),r.querySelector(".img-tijera")?.addEventListener("click",()=>{u("tijera"),g="tijera"});let h=()=>{let e=Math.floor(3*Math.random())+1;return 1==e?r.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${i} style="transform: rotate(180deg); opacity:1; width:150px; height:150px;">`:2==e?r.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${t} style="transform: rotate(180deg); opacity:1; width:150px; height:150px;">`:r.querySelector(".eleccion-pc").innerHTML=`<img class="img" src=${a} style="transform: rotate(180deg); opacity:1; width:150px; height:150px;">`,e};var f="";return setTimeout(()=>{let e,t;let i=function(e,t){switch(e){case"piedra":if("tijera"==t)return"pc";if("papel"==t)return"usuario";if("piedra"==t)return"empate";return"pc";case"papel":if("tijera"==t)return"usuario";if("papel"==t)return"empate";if("piedra"==t);return"pc";case"tijera":if("tijera"==t)return"empate";if("papel"==t)return"pc";if("piedra"==t)return"usuario";return"pc"}}(f=1==h()?"piedra":2==h()?"papel":"tijera",g);console.log(i),"pc"==i?(e=1,t=0):"usuario"==i?(e=0,t=1):(e=0,t=0);let n=s.getState(),a={id:n.reduce((e,t)=>t.id>e.id?t:e,n[0]).id+1,eleccionPc:f,eleccionUsuario:g,puntajePc:e,puntajeUsuario:t};n.push(a),s.setState(n)},3e3),r}class l extends HTMLElement{constructor(){super(),this.tags=["h1","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"});let e=this.getAttribute("tag")||"p";this.tags.includes(e)&&(this.tag=e),this.render()}render(){let e=document.createElement(this.tag);e.textContent=this.textContent,this.shadow.appendChild(e)}}customElements.define("my-text",l);class p extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
    
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
    `}}customElements.define("button-component",p),location.pathname,function(e){function t(e){history.pushState({},"",e),i(e)}function i(i){for(let n of[{path:/\/welcome/,component:r},{path:/\/inicio/,component:o},{path:/\/play/,component:c}])if(n.path.test(i)){let i=n.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(i)}}"/"==location.pathname?t("/welcome"):"/inicio"==location.pathname||"/play"==location.pathname?i(location.pathname):t("/welcome"),window.onpopstate=function(e){i(location.pathname)}}(document.querySelector(".root")),console.log("Hello World");
//# sourceMappingURL=index.2a7dcc23.js.map
