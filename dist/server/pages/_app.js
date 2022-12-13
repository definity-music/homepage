"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":".//_next/static/media/defnity_w_ohnekreis.e50cb9e8.png","height":780,"width":2246,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPElEQVR42gXAoQmAQBQA0N8FuwZBkzOIQTcwG13i0AGEK5dv2scRBqfJozM7RPgV2Sd5VSmMFqve5nLbGxJ0Hr/qacWOAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 7203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Utils.tsx
var Utils = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/@fontsource/rubik/index.css
var rubik = __webpack_require__(2114);
// EXTERNAL MODULE: ./node_modules/@fontsource/rubik/700.css
var _700 = __webpack_require__(6991);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Footer.tsx



const FooterWrapper = external_styled_components_default().footer.withConfig({
    componentId: "sc-6c91d8c6-0"
})`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
`;
const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Utils/* Link */.rU, {
                href: "/imprint",
                children: "Imprint"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Utils/* Link */.rU, {
                href: "/privacy-policy",
                children: "Privacy Policy"
            })
        ]
    });

;// CONCATENATED MODULE: external "tsparticles-preset-stars"
const external_tsparticles_preset_stars_namespaceObject = require("tsparticles-preset-stars");
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/assets/defnity_w_ohnekreis.png
var defnity_w_ohnekreis = __webpack_require__(7288);
// EXTERNAL MODULE: ./playlistUrls.ts
var playlistUrls = __webpack_require__(3770);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: ./utils/hooks/useMediaQuery.ts

const useMediaQuery = (width)=>{
    const [targetReached, setTargetReached] = (0,external_react_.useState)(false);
    const updateTarget = (0,external_react_.useCallback)((e)=>{
        if (e.matches) setTargetReached(true);
        else setTargetReached(false);
    }, []);
    (0,external_react_.useEffect)(()=>{
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener("change", updateTarget);
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) setTargetReached(true);
        return ()=>media.removeEventListener("change", updateTarget);
    }, []);
    return targetReached;
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.tsx










const Wrapper = external_styled_components_default().header.withConfig({
    componentId: "sc-47a8a2e0-0"
})`
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  width: 100%;
  z-index: 100;
  justify-content: space-between;
`;
const Padding = external_styled_components_default().div.withConfig({
    componentId: "sc-47a8a2e0-1"
})`
  padding: 0 2rem;
  display: flex;
  width: 100%;
`;
const DesktopMenu = external_styled_components_default().div.withConfig({
    componentId: "sc-47a8a2e0-2"
})`
  flex: 1;
  justify-content: flex-end;
  gap: 25px;
  display: ${({ isHidden  })=>isHidden ? "none" : "flex"};
`;
const MobileLinkWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-47a8a2e0-3"
})`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  top: 80%;
  background-color: #252525;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #000;
  padding: 1.5em;
`;
const MobileMenuWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-47a8a2e0-4"
})`
  display: ${({ isHidden  })=>isHidden ? "none" : "flex"};
  flex: 1;
  justify-content: flex-end;

  svg {
    width: 24px;
    height: 24px;
  }
`;
const Logo = external_styled_components_default()((image_default())).withConfig({
    componentId: "sc-47a8a2e0-5"
})`
  cursor: pointer;
`;
const MenuIcon = external_styled_components_default().div.withConfig({
    componentId: "sc-47a8a2e0-6"
})``;
const URLs = ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: playlistUrls/* playlistUrls.map */.l.map((playlist, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(Utils/* Link */.rU, {
                href: playlist.url,
                target: "_blank",
                children: playlist.name
            }, playlist.name + idx))
    });
const MobileMenu = ({ isHidden  })=>{
    const [isNavExpanded, setIsNavExpanded] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MobileMenuWrapper, {
        isHidden: isHidden,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MenuIcon, {
                onClick: ()=>setIsNavExpanded(!isNavExpanded),
                children: isNavExpanded ? /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdClose, {}) : /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdMenu, {})
            }),
            isNavExpanded && /*#__PURE__*/ jsx_runtime_.jsx(MobileLinkWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(URLs, {})
            })
        ]
    });
};
const Header = ()=>{
    const isMobile = useMediaQuery(768);
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Padding, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                        width: 100,
                        src: defnity_w_ohnekreis/* default */.Z,
                        alt: "definity logo"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {
                    isHidden: !isMobile
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(DesktopMenu, {
                    isHidden: isMobile,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(URLs, {})
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./utils/helpers/browserWrapper.ts
function assertTrue(value) {
    if (!value) {
        throw new Error("Value not true");
    }
}
const browserWrapper =  true ? {
    isServer: true,
    isBrowser: false,
    window: undefined,
    document: undefined,
    DOMParser: undefined
} : 0;

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./pages/_app.tsx













const TRACKING_ID = "G-8DMLZVERLT"; // OUR_TRACKING_ID
const { isBrowser  } = browserWrapper;
const Particles = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4753, 23)), {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "react-tsparticles"
        ]
    },
    ssr: false
});
function App({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        (0,external_react_ga_.initialize)(TRACKING_ID);
    }, []);
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            (0,external_react_ga_.pageview)(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    if (router.route.includes("track-redirect")) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "google-analytics",
                strategy: "afterInteractive",
                children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-8DMLZVERLT');
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://www.googletagmanager.com/gtag/js?id=G-8DMLZVERLT",
                async: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Particles, {
                options: {
                    preset: "stars",
                    background: {
                        color: "#252525"
                    },
                    particles: {
                        move: {
                            speed: 0.6
                        }
                    }
                },
                init: async (engine)=>{
                    await (0,external_tsparticles_preset_stars_namespaceObject.loadStarsPreset)(engine);
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Utils/* GlobalStyle */.ZL, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Utils/* Main */.or, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 3770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ playlistUrls)
/* harmony export */ });
const playlistUrls = [
    {
        url: "https://open.spotify.com/playlist/4EsQQTQY9mdl3GCAD229pq?si=f7ae4bba2eae40ea",
        name: "Dance Music"
    },
    {
        url: "https://open.spotify.com/playlist/4souPcsHSrra6X5XTp6K06?si=81f23b2ff08a4d16",
        name: "Deep House Chillout"
    },
    {
        url: "https://open.spotify.com/playlist/1DlEDr5jCU3LrOMZ5u6GyH?si=b72d14f423a040f0",
        name: "Electronic Office"
    },
    {
        url: "https://open.spotify.com/playlist/5XJ9cn3rR72QXYTF4ZqzdW?si=10d35acab67c4477",
        name: "Techno Workout"
    }
];


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 3082:
/***/ ((module) => {

module.exports = require("react-ga");

/***/ }),

/***/ 4753:
/***/ ((module) => {

module.exports = require("react-tsparticles");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,398,153], () => (__webpack_exec__(7203)));
module.exports = __webpack_exports__;

})();