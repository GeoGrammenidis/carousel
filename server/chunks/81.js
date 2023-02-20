"use strict";
exports.id = 81;
exports.ids = [81];
exports.modules = {

/***/ 3214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Configuration)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Configuration({ configurationState , handleChange , hasControls =false , hasFade =false  }) {
    const { transitionOpacity , hasModal , bindKeyDownEvents , controllersOnHover , numberOfItems  } = configurationState;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-floating my-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                            className: "form-select",
                            id: "items",
                            onChange: (e)=>{
                                handleChange({
                                    key: "numberOfItems",
                                    numberOfItems: +e.target.value
                                });
                            },
                            value: `${numberOfItems}`,
                            children: Array(25).fill(0).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: i + 1,
                                    children: i + 1
                                }, i + 1))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "items",
                            children: "Number of items"
                        })
                    ]
                }),
                hasFade && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-floating my-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select",
                            id: "transition-opacity",
                            onChange: ()=>handleChange({
                                    key: "transitionOpacity"
                                }),
                            value: transitionOpacity ? "true" : "false",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "true",
                                    children: "True"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "false",
                                    children: "False"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "transition-opacity",
                            children: "Fade"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-floating mb-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select",
                            id: "has-modal",
                            onChange: ()=>handleChange({
                                    key: "hasModal"
                                }),
                            value: hasModal ? "true" : "false",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "true",
                                    children: "True"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "false",
                                    children: "False"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "has-modal",
                            children: "Has a modal"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-floating mb-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select",
                            id: "bind-keys",
                            onChange: ()=>handleChange({
                                    key: "bindKeyDownEvents"
                                }),
                            value: bindKeyDownEvents ? "true" : "false",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "true selected",
                                    children: "True"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "false",
                                    children: "False"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "bind-keys",
                            children: "Binds keys: 'left-arrow', 'right-arrow'"
                        })
                    ]
                }),
                hasControls && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-floating mb-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            className: "form-select",
                            id: "controls-on-hover",
                            onChange: ()=>handleChange({
                                    key: "controllersOnHover"
                                }),
                            value: controllersOnHover ? "true" : "false",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "true selected",
                                    children: "True"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "false",
                                    children: "False"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "controls-on-hover",
                            children: "Controls on Hover"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 7129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useConfiguration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useConfiguration({ transitionOpacity =false , bindKeyDownEvents =false , hasModal =false , controllersOnHover =false , numberOfItems =9 , hasThumbnails  }) {
    var thumbnailItems = [
        {
            id: 1,
            type: "image",
            src: `/imgs/img${1}.jpeg`,
            thumbnail: `/imgs/img${1}_600x400.jpeg`
        },
        ...Array(24).fill(0).map((_, i)=>({
                id: i + 2,
                type: "image",
                src: `/imgs/img${i + 2}.jpeg`,
                thumbnail: `/imgs/img${i + 2}_600x400.jpeg`
            }))
    ];
    var simpleItems = [
        {
            id: 1,
            type: "image",
            src: `/imgs/img${1}.jpeg`
        },
        ...Array(25).fill(0).map((x, i)=>({
                id: i + 2,
                type: "image",
                src: `/imgs/img${i + 2}.jpeg`
            }))
    ];
    const [configurationState, setState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
        transitionOpacity,
        bindKeyDownEvents,
        hasModal,
        controllersOnHover,
        numberOfItems,
        hasThumbnails,
        items: hasThumbnails ? [
            thumbnailItems[0],
            ...thumbnailItems.slice(1, numberOfItems)
        ] : [
            simpleItems[0],
            ...simpleItems.slice(1, numberOfItems)
        ]
    });
    var handleChange = ({ key , numberOfItems  })=>{
        if (key == "numberOfItems") {
            setState((state)=>{
                if (numberOfItems) {
                    state.items = hasThumbnails ? [
                        thumbnailItems[0],
                        ...thumbnailItems.slice(1, numberOfItems)
                    ] : [
                        simpleItems[0],
                        ...simpleItems.slice(1, numberOfItems)
                    ];
                    state.numberOfItems = numberOfItems;
                }
                return {
                    ...state
                };
            });
        } else {
            setState((state)=>{
                state[key] = !state[key];
                return {
                    ...state
                };
            });
        }
    };
    return {
        configurationState,
        handleChange
    };
}


/***/ })

};
;