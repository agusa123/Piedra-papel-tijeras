// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _stateTs = require("./state.ts");
var _routeTs = require("./route.ts");
var _indexTs = require("./components/text/index.ts");
var _indexTs1 = require("./components/botton/index.ts");
(function() {
    const path = location.pathname;
    (0, _routeTs.initRouter)(document.querySelector(".root"));
    (0, _stateTs.state).initState();
})(); // console.log("Hello World");

},{"./components/text/index.ts":"6Xncd","./components/botton/index.ts":"cWJqA","./route.ts":"jqJ1j","./state.ts":"1Yeju"}],"6Xncd":[function(require,module,exports) {
class Texted extends HTMLElement {
    constructor(){
        super();
        this.tags = [
            "h1",
            "p"
        ];
        this.tag = "p";
        this.shadow = this.attachShadow({
            mode: "open"
        });
        const atributo = this.getAttribute("tag") || "p";
        if (this.tags.includes(atributo)) this.tag = atributo;
        this.render();
    }
    render() {
        const rootEl = document.createElement(this.tag);
        rootEl.textContent = this.textContent;
        this.shadow.appendChild(rootEl);
    }
}
customElements.define("my-text", Texted);

},{}],"cWJqA":[function(require,module,exports) {
class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
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

},{}],"jqJ1j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./page/welcome");
var _inicio = require("./page/Inicio");
var _play = require("./page/play");
const BASE_PATH = "/piedra-papel-tijera";
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(contenedor) {
    function goTo(path) {
        /* history.pushState({}, "", path);
    handleRouter(path); */ const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRouter(completePath);
    }
    function handleRouter(route) {
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        const routes = [
            {
                path: /\/welcome/,
                component: (0, _welcome.initWelcomePage)
            },
            {
                path: /\/inicio/,
                component: (0, _inicio.initInicioPage)
            },
            {
                path: /\/play/,
                component: (0, _play.initPlayPage)
            }
        ];
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            if (contenedor.firstChild) contenedor.firstChild.remove();
            contenedor.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else if (location.pathname == "/inicio" || location.pathname == "/play") handleRouter(location.pathname);
    else goTo("/welcome");
    window.onpopstate = function(event) {
        handleRouter(location.pathname);
    };
}

},{"./page/welcome":"1TmYT","./page/Inicio":"WbKdY","./page/play":"li9BO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TmYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage);
function initWelcomePage(params) {
    const div = document.createElement("div");
    div.className = "root";
    const style = document.createElement("style");
    const imgPapel = require("d0a496d2ec4129d7");
    const imgPiedra = require("3962121c35f59c07");
    const imgTijera = require("6726d1b70fb89408");
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
  <my-text tag="h1" class="title">Piedra, Papel \xf3 Tijera</my-text>
  <button-component>Empezar</button-component>
  <div class="contenedor-imagenes">
    <img class="img" src=${imgPiedra}>
    <img class="img" src=${imgPapel}>
    <img class="img" src=${imgTijera}>
  </div>
  `;
    div.querySelector("button-component")?.addEventListener("click", ()=>{
        params.goTo("/inicio");
    });
    div.appendChild(style);
    return div;
}

},{"d0a496d2ec4129d7":"4QZzx","3962121c35f59c07":"fGZON","6726d1b70fb89408":"igYSj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QZzx":[function(require,module,exports) {
module.exports = require("5150ef752d1022b8").getBundleURL("7UhFu") + "papel.765b85ac.svg" + "?" + Date.now();

},{"5150ef752d1022b8":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fGZON":[function(require,module,exports) {
module.exports = require("9db1f8545ca6b36c").getBundleURL("7UhFu") + "piedra.af68e151.svg" + "?" + Date.now();

},{"9db1f8545ca6b36c":"lgJ39"}],"igYSj":[function(require,module,exports) {
module.exports = require("9ac9ed1b5e146ad0").getBundleURL("7UhFu") + "tijera.03d071d8.svg" + "?" + Date.now();

},{"9ac9ed1b5e146ad0":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"WbKdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInicioPage", ()=>initInicioPage);
function initInicioPage(params) {
    const imgPapel = require("db56c33ff59367b9");
    const imgPiedra = require("41a9b91c0b0bd2fe");
    const imgTijera = require("83499e533a6d96e4");
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
        <my-text tag="h1" >Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
    </div>
    <button-component>Jugar</button-component>
    <div class="contenedor-imagenes">
        <img class="img img-piedra" src=${imgPiedra}>
        <img class="img img-papel" src=${imgPapel}>
        <img class="img img-tijera" src=${imgTijera}>
    </div>
    `;
    div.querySelector("button-component")?.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    div.appendChild(style);
    return div;
}

},{"db56c33ff59367b9":"4QZzx","41a9b91c0b0bd2fe":"fGZON","83499e533a6d96e4":"igYSj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"li9BO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlayPage", ()=>initPlayPage);
var _state = require("../../state");
function initPlayPage(params) {
    const imgPapel = require("9e05e3844d7fe68b");
    const imgPiedra = require("5c29f08db41fa2b3");
    const imgTijera = require("58af06298ab2adad");
    const div = document.createElement("div");
    div.className = "root";
    const style = document.createElement("style");
    //Incerto estilos y etiquetas al div creado anteriormente
    style.innerHTML = `
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
  `;
    div.innerHTML = `
    <div class="eleccion-pc"></div>
    <div class="contador-container">
      <div class="spinner"></div>
      <div class="contador">3</div>
    </div>
     <div class="contenedor-imagenes">
        <img class="img img-piedra" src=${imgPiedra}>
        <img class="img img-papel" src=${imgPapel}>
        <img class="img img-tijera" src=${imgTijera}>
    </div>
  `;
    div.appendChild(style);
    let tiempo = 3;
    let seleccionRealizada = false;
    let tiempoExpirado = false;
    //Esta funcion se encarga de mostrar el contador de 3,2,1, ya que se ejecuta cada segundo
    const intervalo = setInterval(()=>{
        tiempo--;
        if (tiempo > 0) div.querySelector(".contador").textContent = tiempo.toString();
        else {
            clearInterval(intervalo);
            div.querySelector(".contador").textContent = "\xa1Ya!";
            div.querySelector(".spinner").remove();
            tiempoExpirado = true;
            desactivarClicks();
        }
    }, 1000);
    //Esta funcion se encarga de desactivar los clicks de las imagenes
    //Se ejecuta cuando el tiempo del contador termina o cuando ya se ha realizado una seleccion
    const desactivarClicks = ()=>{
        [
            "piedra",
            "papel",
            "tijera"
        ].forEach((item)=>{
            div.querySelector(`.img-${item}`)?.removeEventListener("click", ()=>manejarClick(item));
        });
    };
    //Esta funcion se encarga de manejar el click de las imagenes
    //Se ejecuta cuando se clickea una imagen y se verifica si ya se ha realizado una seleccion o si el tiempo del contador ha terminado
    //Si se ha realizado una seleccion, no se ejecuta la funcion
    const manejarClick = (elemento)=>{
        if (seleccionRealizada || tiempoExpirado) return;
        seleccionRealizada = true;
        const imgSeleccionada = div.querySelector(`.img-${elemento}`);
        imgSeleccionada.style.transition = "transform 0.3s ease-out";
        imgSeleccionada.style.transform = "translateY(-30px)";
        imgSeleccionada.style.opacity = "1";
        imgSeleccionada.style.height = "150px";
        imgSeleccionada.style.width = "150px";
        desactivarClicks();
    };
    //Esta parte del codigo se ocupa de la seleccion del usuario
    //Necesita la funcion manejarClick para que se bloquen las otras imageses al seleccionar una
    let eleccionUsuario = "";
    div.querySelector(".img-piedra")?.addEventListener("click", ()=>{
        manejarClick("piedra");
        eleccionUsuario = "piedra";
    });
    div.querySelector(".img-papel")?.addEventListener("click", ()=>{
        manejarClick("papel");
        eleccionUsuario = "papel";
    });
    div.querySelector(".img-tijera")?.addEventListener("click", ()=>{
        manejarClick("tijera");
        eleccionUsuario = "tijera";
    });
    //Esta funcion se ocupa de generar un numero al azar para asi realizar la eleccion de la computadora
    //Dependiendo del numero generado, se inserta una imagen en el contenedor(div) de la eleccion de la computadora
    var numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    const mostrarEleccionPc = ()=>{
        if (numeroAleatorio == 1) div.querySelector(".eleccion-pc").innerHTML = `<img class="img" src=${imgPiedra} style="transform: rotate(180deg); opacity:1; width:150px; height:150px;">`;
        else if (numeroAleatorio == 2) div.querySelector(".eleccion-pc").innerHTML = `<img class="img" src=${imgPapel} style="transform: rotate(180deg); opacity:1; width:150px; height:150px;">`;
        else div.querySelector(".eleccion-pc").innerHTML = `<img class="img" src=${imgTijera} style="transform: rotate(180deg); opacity:1; width:150px; height:150px;">`;
    };
    //Esta parte del codigo se ejecuta despues de 3 segundos y se encarga de:
    //1. Remplazar el numero generado al azar con la palbra correspondiente a la eleccion de la computadora
    //2. Llama a la funciona resultado para determinar el ganador de la partida
    //3. Realiza un getState para obtener el estado actual del juego
    //4. Crea un objeto con los resultados de la partida actual
    var eleccionPc = "";
    setTimeout(()=>{
        mostrarEleccionPc();
        // console.log(numeroAleatorio);
        if (numeroAleatorio == 1) eleccionPc = "piedra";
        else if (numeroAleatorio == 2) eleccionPc = "papel";
        else eleccionPc = "tijera";
        const ganador = resultado(eleccionPc, eleccionUsuario);
        // console.log(ganador);
        let puntajePc;
        let puntajeUsuario;
        if (ganador == "pc") {
            puntajePc = 1;
            puntajeUsuario = 0;
        } else if (ganador == "usuario") {
            puntajePc = 0;
            puntajeUsuario = 1;
        } else {
            puntajePc = 0;
            puntajeUsuario = 0;
        }
        const currentState = (0, _state.state).getState();
        const objetoConMayorId = currentState.reduce((maxObj, currentObj)=>{
            return currentObj.id > maxObj.id ? currentObj : maxObj;
        }, currentState[0]);
        const obj = {
            id: objetoConMayorId.id + 1,
            eleccionPc: eleccionPc,
            eleccionUsuario: eleccionUsuario,
            puntajePc: puntajePc,
            puntajeUsuario: puntajeUsuario
        };
        currentState.push(obj);
        (0, _state.state).setState(currentState);
    }, 3000);
    return div;
}
//Esta funcion se encarga de determinar el ganador de la partida
function resultado(eleccionPc, eleccionUsuario) {
    switch(eleccionPc){
        case "piedra":
            if (eleccionUsuario == "tijera") return "pc";
            else if (eleccionUsuario == "papel") return "usuario";
            else if (eleccionUsuario == "piedra") return "empate";
            else return "pc";
        case "papel":
            if (eleccionUsuario == "tijera") return "usuario";
            else if (eleccionUsuario == "papel") return "empate";
            else if (eleccionUsuario == "piedra") return "pc";
            else return "pc";
        case "tijera":
            if (eleccionUsuario == "tijera") return "empate";
            else if (eleccionUsuario == "papel") return "pc";
            else if (eleccionUsuario == "piedra") return "usuario";
            else return "pc";
    }
}

},{"../../state":"1Yeju","9e05e3844d7fe68b":"4QZzx","5c29f08db41fa2b3":"fGZON","58af06298ab2adad":"igYSj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: [
        {
            id: 1,
            eleccionPc: "",
            eleccionUsuario: "",
            PuntajePc: 0,
            PuntajeUsuario: 0
        }
    ],
    listener: [],
    getState () {
        return this.data;
    },
    setState (newState) {
        // console.log("Soy el state, he cambiado", this.data);
        this.data = newState;
        for (const cb of this.listener)cb(newState);
        localStorage.setItem("save-state", JSON.stringify(newState));
    },
    subscribe (callback) {
        this.listener.push(callback);
    },
    initState () {
        const localData = localStorage.getItem("save-state") || "";
        this.setState(JSON.parse(localData));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequire7544")

//# sourceMappingURL=index.b71e74eb.js.map
