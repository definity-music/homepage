"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 7153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UH": () => (/* binding */ Whitespace),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "ZL": () => (/* binding */ GlobalStyle),
/* harmony export */   "or": () => (/* binding */ Main),
/* harmony export */   "rU": () => (/* binding */ Link),
/* harmony export */   "rj": () => (/* binding */ Grid),
/* harmony export */   "s0": () => (/* binding */ Headline),
/* harmony export */   "t3": () => (/* binding */ ResponsiveImage),
/* harmony export */   "xW": () => (/* binding */ BoldText),
/* harmony export */   "xv": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-aaf8f5fd-0"
})`
  padding: 0 2rem;
  max-width: 800px;
  margin: 0 auto;
`;
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle`
 body {
    background: #252525;
    margin:0;
    padding: 0;
    font-family: "Rubik", sans-serif;
    color:#fff;
    min-height: 80vh;
 }
`;
const Main = styled_components__WEBPACK_IMPORTED_MODULE_3___default().main.withConfig({
    componentId: "sc-aaf8f5fd-1"
})`
  padding: 100px 0;

  z-index: 1;
  position: relative;
`;
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-aaf8f5fd-2"
})`
  display: grid;
  grid-template-columns: ${({ columns , maxItemSize  })=>columns ? Array(columns).fill("1fr").join(" ") : "repeat(auto-fill, minmax(" + maxItemSize + ", 1fr));"};
  gap: ${({ gap  })=>gap + "px"};
`;
const ResponsiveImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-aaf8f5fd-3"
})`
  width: 100%;
  > div {
    position: unset !important;
  }
`;
const ResponsiveImageComponent = styled_components__WEBPACK_IMPORTED_MODULE_3___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-aaf8f5fd-4"
})`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  border-radius: 5px;
`;
const ResponsiveImage = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResponsiveImageWrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResponsiveImageComponent, {
            ...props
        })
    });
};
const Text = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
    componentId: "sc-aaf8f5fd-5"
})`
  font-size: 18px;
  line-height: 1.3;
`;
const BoldText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
    componentId: "sc-aaf8f5fd-6"
})`
  font-weight: 700;
`;
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(Text).withConfig({
    componentId: "sc-aaf8f5fd-7"
})`
  ${({ level  })=>{
    switch(level){
        case 2:
            return styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
          font-size: 22px;
        `;
        default:
            return styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
          font-size: 30px;
        `;
    }
}}

  font-weight: 700;
`;
const Whitespace = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-aaf8f5fd-8"
})`
  width: 100%;
  height: 100px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_3___default()((next_link__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
    componentId: "sc-aaf8f5fd-9"
})`
  color: #fff;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;


/***/ })

};
;