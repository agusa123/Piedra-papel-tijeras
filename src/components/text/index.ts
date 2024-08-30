class Texted extends HTMLElement {
  shadow: ShadowRoot;
  tagName: string;
  tags: string[] = ["h1", "p"];
  tag: string = "p";
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const atributo: string = this.getAttribute("tag") || "p";

    if (this.tags.includes(atributo)) {
      this.tag = atributo;
    }

    this.render();
  }
  render() {
    const rootEl = document.createElement(this.tag);
    rootEl.textContent = this.textContent;
    this.shadow.appendChild(rootEl);
  }
}
customElements.define("my-text", Texted);
