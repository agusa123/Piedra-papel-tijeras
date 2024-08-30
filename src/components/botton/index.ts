class Button extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const style = document.createElement("style");
    style.innerHTML = `
    
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px;
        }
        .my-button{
            font-family: 'Odibee Sans', cursive;
            font-size: 40px;
            background-color: #4FB3E8; /* Celeste más intenso */
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
            background-color: #3D8CBF; /* Un tono más oscuro */
            transform: scale(0.95);
        }
        @media (max-width: 460px) {
            .my-button {
                font-size: 30px;
                max-width: 250px;
                height: 60px;
            }
        }
    `;
    this.render();
    this.shadow.appendChild(style);
  }
  render() {
    this.shadow.innerHTML = `
        <div class="container">
            <button class="my-button">${this.textContent}</button>
        </div>
    `;
  }
}
customElements.define("button-component", Button);
