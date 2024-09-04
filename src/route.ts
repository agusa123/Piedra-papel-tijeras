import { initWelcomePage } from "./page/welcome";
import { initInicioPage } from "./page/Inicio";
import { initPlayPage } from "./page/play";
import { initResultadoPage } from "./page/resultado";

const BASE_PATH = "/Piedra-papel-tijeras";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(contenedor: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRouter(completePath);
  }

  function handleRouter(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    const routes = [
      {
        path: /\/welcome/,
        component: initWelcomePage,
      },
      {
        path: /\/inicio/,
        component: initInicioPage,
      },
      {
        path: /\/play/,
        component: initPlayPage,
      },
      {
        path: /\/resultado/,
        component: initResultadoPage,
      },
    ];

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });
        if (contenedor.firstChild) {
          contenedor.firstChild.remove();
        }
        contenedor.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else if (location.pathname == "/inicio" || location.pathname == "/play") {
    handleRouter(location.pathname);
  } else {
    goTo("/welcome");
  }

  window.onpopstate = function (event) {
    handleRouter(location.pathname);
  };
}
