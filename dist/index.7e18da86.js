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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"2Lm9i":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "db691efb7e18da86";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hZqzL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _fetchData = require("./src/js/fetchData");
var _fetchDataDefault = parcelHelpers.interopDefault(_fetchData);
window.addEventListener("load", ()=>{
    _fetchDataDefault.default();
});

},{"./src/js/fetchData":"PvCwG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"PvCwG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderPlanet = require("./renderPlanet");
var _renderPlanetDefault = parcelHelpers.interopDefault(_renderPlanet);
var _dataJson = require("../../data.json");
var _dataJsonDefault = parcelHelpers.interopDefault(_dataJson);
/* const url =
  "https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/data.json"; */ const planetIndex = document.getElementsByName("radio");
const fetchData = async ()=>{
    fetch(_dataJsonDefault.default).then((response)=>response.json()
    ).then((data)=>{
        const planets = data;
        const initial = planets[2];
        planetIndex[2].checked = true;
        _renderPlanetDefault.default(initial);
        planetIndex.forEach((planet1)=>{
            planet1.addEventListener("change", (e)=>{
                const index = e.target.value;
                const planet = planets[index];
                _renderPlanetDefault.default(planet);
            });
        });
    }).catch((error)=>console.log(error)
    );
};
exports.default = fetchData;

},{"./renderPlanet":"ir1gG","../../data.json":"vRbhQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ir1gG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "radioGroup", ()=>radioGroup
);
var _innerPlanet = require("./innerPlanet");
const radioGroup = document.getElementsByName("info-button");
const renderPlanet = (planet)=>{
    const { name: planetName , overview: { content: overviewContent , source: overviewSource  } , structure: { content: structureContent , source: structureSource  } , geology: { content: geologyContent , source: geologySource  } , rotation: planetRotation , revolution: planetRevolution , radius: planetRadius , temperature: planetTemperature , images: { planet: planetImage , internal: internalImage , geology: geologylImage ,  } ,  } = planet;
    _innerPlanet.innerPlanet(planetName, overviewContent, overviewSource, structureContent, structureSource, geologyContent, geologySource, planetRotation, planetRevolution, planetRadius, planetTemperature, planetImage, internalImage, geologylImage);
};
exports.default = renderPlanet;

},{"./innerPlanet":"gvAcR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gvAcR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "innerPlanet", ()=>innerPlanet
);
var _utils = require("./utils");
const htmlPlanetName = document.querySelector(".js-name");
const htmlInitialImage = document.querySelector(".js-image--initial");
const htmlInternalImage = document.querySelector(".js-image--internal");
const htmlGeologyImage = document.querySelector(".js-image--geology");
const htmlContent = document.querySelector(".js-content");
const htmlSource = document.querySelector(".js-link");
const htmlContentOptions = document.getElementsByName("info-button");
const htmlRotationTime = document.querySelector(".js-rotation");
const htmlRevolutionTime = document.querySelector(".js-revolution");
const htmlRadius = document.querySelector(".js-radius");
const htmlAverageTemp = document.querySelector(".js-temperature");
const innerPlanet = (planetName, overviewContent, overviewSource, structureContent, structureSource, geologyContent, geologySource, planetRotation, planetRevolution, planetRadius, planetTemperature, imageInitial, imageInternal, imageGeology)=>{
    htmlPlanetName.innerHTML = planetName;
    _utils.setAttributes(htmlInitialImage, {
        src: `${imageInitial}`,
        alt: planetName
    });
    htmlContent.innerHTML = overviewContent;
    htmlRotationTime.innerHTML = planetRotation;
    htmlRevolutionTime.innerHTML = planetRevolution;
    htmlRadius.innerHTML = planetRadius;
    htmlAverageTemp.innerHTML = planetTemperature;
    htmlContentOptions[0].checked = true;
    for(let i = 0; i < htmlContentOptions.length; i++)htmlContentOptions[i].addEventListener("change", (event)=>{
        const index = event.target.value;
        switch(index){
            case "overview":
                htmlContent.innerHTML = overviewContent;
                _utils.setAttributes(htmlSource, {
                    href: overviewSource,
                    target: "_blank"
                });
                imageGeology.classList.remove("image-active");
                imageInternal.classList.remove("image-active");
                htmlContentOptions[i].checked = true;
                break;
            case "structure":
                htmlContent.innerHTML = structureContent;
                _utils.setAttributes(htmlSource, {
                    href: structureSource,
                    target: "_blank"
                });
                /* imageGeology.classList.remove("image-active");
          imageInternal.classList.add("image-active"); */ htmlContentOptions[i].checked = true;
                break;
            case "geology":
                htmlContent.innerHTML = geologyContent;
                _utils.setAttributes(htmlSource, {
                    href: geologySource,
                    target: "_blank"
                });
                imageGeology.classList.add("image-active");
                imageInternal.classList.remove("image-active");
                htmlContentOptions[i].checked = true;
                break;
        }
    });
};

},{"./utils":"fIYUT","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fIYUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setAttributes", ()=>setAttributes
);
const setAttributes = (el, attrs)=>{
    for(const key in attrs)el.setAttribute(key, attrs[key]);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"vRbhQ":[function(require,module,exports) {
module.exports = JSON.parse("[{\"name\":\"Mercury\",\"overview\":{\"content\":\"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.\",\"source\":\"https://en.wikipedia.org/wiki/Mercury_(planet)\"},\"structure\":{\"content\":\"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.\",\"source\":\"https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure\"},\"geology\":{\"content\":\"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.\",\"source\":\"https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology\"},\"rotation\":\"58.6 Days\",\"revolution\":\"87.97 Days\",\"radius\":\"2,439.7 KM\",\"temperature\":\"430°c\",\"images\":{\"planet\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-mercury.svg\",\"internal\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-mercury-internal.svg\",\"geology\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/geology-mercury.png\"}},{\"name\":\"Venus\",\"overview\":{\"content\":\"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.\",\"source\":\"https://en.wikipedia.org/wiki/Venus\"},\"structure\":{\"content\":\"The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.\",\"source\":\"https://en.wikipedia.org/wiki/Venus#Internal_structure\"},\"geology\":{\"content\":\"Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.\",\"source\":\"https://en.wikipedia.org/wiki/Venus#Surface_geology\"},\"rotation\":\"243 Days\",\"revolution\":\"224.7 Days\",\"radius\":\"6,051.8 KM\",\"temperature\":\"471°c\",\"images\":{\"planet\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-venus.svg\",\"internal\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-venus-internal.svg\",\"geology\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/geology-venus.png\"}},{\"name\":\"Earth\",\"overview\":{\"content\":\"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.\",\"source\":\"https://en.wikipedia.org/wiki/Earth\"},\"structure\":{\"content\":\"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.\",\"source\":\"https://en.wikipedia.org/wiki/Earth#Internal_structure\"},\"geology\":{\"content\":\"The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.\",\"source\":\"https://en.wikipedia.org/wiki/Earth#Surface\"},\"rotation\":\"0.99 Days\",\"revolution\":\"365.26 Days\",\"radius\":\"6,371 KM\",\"temperature\":\"16°c\",\"images\":{\"planet\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-earth.svg\",\"internal\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-earth-internal.svg\",\"geology\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/geology-earth.png\"}},{\"name\":\"Mars\",\"overview\":{\"content\":\"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \\\"Red Planet\\\".\",\"source\":\"https://en.wikipedia.org/wiki/Mars\"},\"structure\":{\"content\":\"Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.\",\"source\":\"https://en.wikipedia.org/wiki/Mars#Internal_structure\"},\"geology\":{\"content\":\"Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.\",\"source\":\"https://en.wikipedia.org/wiki/Mars#Surface_geology\"},\"rotation\":\"1.03 Days\",\"revolution\":\"1.88 Years\",\"radius\":\"3,389.5 KM\",\"temperature\":\"-28°c\",\"images\":{\"planet\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-mars.svg\",\"internal\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-mars-internal.svg\",\"geology\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/geology-mars.png\"}},{\"name\":\"Jupiter\",\"overview\":{\"content\":\"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.\",\"source\":\"https://en.wikipedia.org/wiki/Jupiter\"},\"structure\":{\"content\":\"When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.\",\"source\":\"https://en.wikipedia.org/wiki/Jupiter#Internal_structure\"},\"geology\":{\"content\":\"The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.\",\"source\":\"https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices\"},\"rotation\":\"9.93 Hours\",\"revolution\":\"11.86 Years\",\"radius\":\"69,911 KM\",\"temperature\":\"-108°c\",\"images\":{\"planet\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-jupiter.svg\",\"internal\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-jupiter-internal.svg\",\"geology\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/geology-jupiter.png\"}},{\"name\":\"Saturn\",\"overview\":{\"content\":\"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.\",\"source\":\"https://en.wikipedia.org/wiki/Saturn\"},\"structure\":{\"content\":\"Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.\",\"source\":\"https://en.wikipedia.org/wiki/Saturn#Internal_structure\"},\"geology\":{\"content\":\"The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.\",\"source\":\"https://en.wikipedia.org/wiki/Saturn#Atmosphere\"},\"rotation\":\"10.8 Hours\",\"revolution\":\"29.46 Years\",\"radius\":\"58,232 KM\",\"temperature\":\"-138°c\",\"images\":{\"planet\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-saturn.svg\",\"internal\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-saturn-internal.svg\",\"geology\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/geology-saturn.png\"}},{\"name\":\"Uranus\",\"overview\":{\"content\":\"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.\",\"source\":\"https://en.wikipedia.org/wiki/Uranus\"},\"structure\":{\"content\":\"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.\",\"source\":\"https://en.wikipedia.org/wiki/Uranus#Internal_structure\"},\"geology\":{\"content\":\"The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.\",\"source\":\"https://en.wikipedia.org/wiki/Uranus#Atmosphere\"},\"rotation\":\"17.2 Hours\",\"revolution\":\"84 Years\",\"radius\":\"25,362 KM\",\"temperature\":\"-195°c\",\"images\":{\"planet\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-uranus.svg\",\"internal\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-uranus-internal.svg\",\"geology\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/geology-uranus.png\"}},{\"name\":\"Neptune\",\"overview\":{\"content\":\"Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.\",\"source\":\"https://en.wikipedia.org/wiki/Neptune\"},\"structure\":{\"content\":\"Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.\",\"source\":\"https://en.wikipedia.org/wiki/Neptune#Internal_structure\"},\"geology\":{\"content\":\"Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.\",\"source\":\"https://en.wikipedia.org/wiki/Neptune#Atmosphere\"},\"rotation\":\"16.08 Hours\",\"revolution\":\"164.79 Years\",\"radius\":\"24,622 KM\",\"temperature\":\"-201°c\",\"images\":{\"planet\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-neptune.svg\",\"internal\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/planet-neptune-internal.svg\",\"geology\":\"https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/assets/geology-neptune.png\"}}]");

},{}]},["2Lm9i","hZqzL"], "hZqzL", "parcelRequire0c67")

//# sourceMappingURL=index.7e18da86.js.map
