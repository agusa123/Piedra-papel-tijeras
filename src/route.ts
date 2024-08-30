import { initWelcomePage } from "./page/welcome";
import { initInicioPage } from "./page/Inicio";
import { initPlayPage } from "./page/play";

export function initRouter(contenedor: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRouter(path);
  }

  function handleRouter(route) {
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
    ];

    for (const r of routes) {
      if (r.path.test(route)) {
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
