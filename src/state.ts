const state = {
  data: [
    {
      id: 1,
      eleccionPc: "piedra",
      eleccionUsuario: "papel",
      PuntajePc: 0,
      PuntajeUsuario: 1,
    },
  ],
  listener: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listener) {
      cb(newState);
    }
    localStorage.setItem("save-state", JSON.stringify(newState));
  },
  subscribe(callback: (any) => any) {
    this.listener.push(callback);
  },
  initState() {
    const localData = localStorage.getItem("save-state") || "";
    this.setState(JSON.parse(localData));
  },
};

export { state };
