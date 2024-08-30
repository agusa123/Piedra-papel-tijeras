import { state } from "./state.ts";
import { initRouter } from "./route.ts";
import "./components/text/index.ts";
import "./components/botton/index.ts";

(function () {
  const path = location.pathname;
  initRouter(document.querySelector(".root")!);
  //state.initState();
})();
console.log("Hello World");
