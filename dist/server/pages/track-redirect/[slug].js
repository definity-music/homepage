"use strict";
(() => {
var exports = {};
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 5082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TrackRedirect),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./playlistUrls.ts
var playlistUrls = __webpack_require__(3770);
;// CONCATENATED MODULE: ./utils/helpers/slugify.ts
const slugify = (text)=>text.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-");

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./utils/hooks/useAnalyticsEventTracker.ts

const useAnalyticsEventTracker = (category = "Blog category")=>{
    const eventTracker = (action = "test action", label = "test label")=>{
        external_react_ga_default().event({
            category,
            action,
            label
        });
    };
    return eventTracker;
};

;// CONCATENATED MODULE: ./pages/track-redirect/[slug].tsx





async function getStaticPaths() {
    return {
        paths: playlistUrls/* playlistUrls.map */.l.map((playlist)=>({
                params: {
                    slug: slugify(playlist.name)
                }
            })),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const url = playlistUrls/* playlistUrls.find */.l.find((playlist)=>params?.slug === slugify(playlist.name))?.url;
    return {
        // Passed to the page component as props
        props: {
            slug: params?.slug,
            url
        }
    };
}
function TrackRedirect({ slug , url  }) {
    const router = (0,router_.useRouter)();
    const ga = useAnalyticsEventTracker(slug);
    (0,external_react_.useEffect)(()=>{
        ga("redirect", "spotify");
        router.push(url);
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3082:
/***/ ((module) => {

module.exports = require("react-ga");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5082));
module.exports = __webpack_exports__;

})();