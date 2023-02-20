"use strict";
exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 1735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Carousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./hooks/useEventListener.tsx

function useEventListener({ event , listener , arrayOfElementRef =[] , trigger =false , deps =[] , eventExists =true , windowElement =false  }) {
    external_react_default().useEffect(()=>{
        if (eventExists) {
            let arrayOfElements = [
                document
            ];
            if (arrayOfElementRef.length) {
                arrayOfElements = arrayOfElementRef.map((x)=>x.current);
            }
            if (windowElement) {
                arrayOfElements = [
                    window
                ];
            }
            arrayOfElements.forEach((element)=>{
                if (element != null) {
                    element.addEventListener(event, listener);
                    trigger && element.dispatchEvent(new Event(event));
                }
            });
            return ()=>{
                arrayOfElements.forEach((element)=>{
                    if (element != null) {
                        element.removeEventListener(event, listener);
                    }
                });
            };
        }
    }, [
        ...deps,
        eventExists
    ]);
}

;// CONCATENATED MODULE: ./hooks/useCarousel.tsx


function updateAnimation(active, wrapper) {
    if (wrapper && wrapper.current != null) {
        let rootElement = document.querySelector(":root");
        rootElement?.style.setProperty("--carousel-temp-indicators-starting", wrapper.current.style.left ? wrapper.current.style.left : "0");
        let pixelsToLeft = Math.max(wrapper.current.offsetWidth - wrapper.current.scrollWidth, Math.min(0, -active * 110 + 40));
        rootElement?.style.setProperty("--carousel-temp-indicators-ending", `${pixelsToLeft}px`);
        wrapper.current.style.animationName = "indicatorsAnimationCarousel";
        wrapper.current.style.left = `${pixelsToLeft}px`;
    }
}
var ACTION;
(function(ACTION) {
    ACTION["updateActive"] = "updateActive";
    ACTION["increaseActive"] = "increaseActive";
    ACTION["decreaseActive"] = "decreaseActive";
    ACTION["trackMovement"] = "trackMovement";
    ACTION["stopTracking"] = "stopTracking";
})(ACTION || (ACTION = {}));
function reducer(state, action) {
    switch(action.type){
        case "updateActive":
            updateAnimation(action.payload.active, action.payload.wrapper);
            return {
                ...state,
                previousActive: state.active,
                active: action.payload.active
            };
        case "increaseActive":
            updateAnimation(state.active + state.varyBy, action.payload.wrapper);
            return {
                ...state,
                previousActive: state.active,
                active: state.active + state.varyBy
            };
        case "decreaseActive":
            updateAnimation(state.active - state.varyBy, action.payload.wrapper);
            return {
                ...state,
                previousActive: state.active,
                active: state.active - state.varyBy
            };
        case "trackMovement":
            return {
                ...state,
                startingPoint: action.payload,
                dragging: true
            };
        case "stopTracking":
            if (action.payload?.direction == "moveRight" && state.dragging) {
                updateAnimation(state.active + state.varyBy, action.payload.wrapper);
                return {
                    ...state,
                    startingPoint: 0,
                    dragging: false,
                    previousActive: state.active,
                    active: state.active + state.varyBy
                };
            } else if (action.payload?.direction == "moveLeft" && state.dragging) {
                updateAnimation(state.active - state.varyBy, action.payload.wrapper);
                return {
                    ...state,
                    startingPoint: 0,
                    dragging: false,
                    previousActive: state.active,
                    active: state.active - state.varyBy
                };
            }
            return {
                ...state,
                startingPoint: 0,
                dragging: false
            };
        default:
            throw new Error(`${action.type} is not supported to dipatch.`);
    }
}
function useCarousel({ itemsPerPage , itemsMarginRem , transitionOpacity , items , carouselIndicatorsImages , bindKeyDownEvents , hasModal , lessCarouselIndicators  }) {
    const initialState = {
        startingPoint: 0,
        dragging: false,
        active: 0,
        previousActive: -1,
        leftIndicators: 0,
        varyBy: lessCarouselIndicators ? itemsPerPage : 1
    };
    const [state, dispatch] = external_react_default().useReducer(reducer, initialState);
    const carousel = external_react_default().useRef(null);
    const innerCarousel = external_react_default().useRef(null);
    const indicatorsCarousel = external_react_default().useRef(null);
    const modalInnerCarousel = external_react_default().useRef(null);
    const modalIndicatorsCarousel = external_react_default().useRef(null);
    const modalId = external_react_default().useId().slice(1, -1);
    var startedClick = 0;
    var draggingIndicators = false;
    var previousCursorPosition = 0;
    var indicatorPosition = 0;
    var carouselInnerStyle = {
        transform: `translateX(calc(${-(100 / itemsPerPage) * state.active}% - ${itemsMarginRem / itemsPerPage * state.active}rem))`
    };
    if (!transitionOpacity) {
        carouselInnerStyle.transition = "transform 0.75s";
    }
    external_react_default().useEffect(()=>{
        // TODO: I should add ACTION.reset
        dispatch({
            type: ACTION.updateActive,
            payload: {
                active: 0
            }
        });
    }, [
        items
    ]);
    var controllerClickHandler = (direction, wrapper)=>{
        if (carouselIndicatorsImages && wrapper.current) {
            wrapper.current.style.animationName = "";
        }
        if (direction == "left") {
            if (state.active > 0) {
                dispatch({
                    type: ACTION.decreaseActive,
                    payload: {
                        wrapper
                    }
                });
            }
        } else {
            if (state.active + state.varyBy < items.length - items.length % itemsPerPage) {
                dispatch({
                    type: ACTION.increaseActive,
                    payload: {
                        wrapper
                    }
                });
            }
        }
    };
    var indicatorMouseUpHandler = (e, i, wrapper)=>{
        if (state.active != i) {
            if (!carouselIndicatorsImages || startedClick - e.clientX < 8 && startedClick - e.clientX > -8) {
                dispatch({
                    type: ACTION.updateActive,
                    payload: {
                        active: i,
                        wrapper
                    }
                });
            }
        }
    };
    var indicatorMouseDownHandler = (e)=>{
        startedClick = e.clientX;
    };
    useEventListener({
        event: "mousedown",
        listener: (e)=>{
            e.preventDefault();
            if (carouselIndicatorsImages && indicatorsCarousel.current) {
                indicatorsCarousel.current.style.animationName = "";
            }
            dispatch({
                type: ACTION.trackMovement,
                payload: e.clientX
            });
        },
        arrayOfElementRef: [
            innerCarousel
        ],
        deps: [
            items
        ]
    });
    useEventListener({
        event: "mousedown",
        listener: (e)=>{
            e.preventDefault();
            // console.log("Mousedown event on Modal - inner Carousel.");
            if (carouselIndicatorsImages && modalIndicatorsCarousel.current) {
                modalIndicatorsCarousel.current.style.animationName = "";
            }
            dispatch({
                type: ACTION.trackMovement,
                payload: e.clientX
            });
        },
        arrayOfElementRef: [
            modalInnerCarousel
        ],
        deps: [
            hasModal,
            items
        ]
    });
    useEventListener({
        event: "mouseup",
        listener: (e)=>{
            e.preventDefault();
            // console.log("Mouseup event on Modal or Main - inner Carousel.");
            dispatch({
                type: ACTION.stopTracking
            });
        },
        arrayOfElementRef: [
            innerCarousel,
            modalInnerCarousel
        ],
        eventExists: state.dragging,
        deps: [
            hasModal
        ]
    });
    useEventListener({
        event: "mousemove",
        listener: (e)=>{
            e.preventDefault();
            // console.log("Mousemove event on Main - inner Carousel.");
            if (e.clientX - state.startingPoint < -12 && state.dragging) {
                if (// state.active < items.length - itemsPerPage
                state.active + state.varyBy < items.length - items.length % itemsPerPage) {
                    dispatch({
                        type: ACTION.stopTracking,
                        payload: {
                            direction: "moveRight",
                            wrapper: indicatorsCarousel
                        }
                    });
                }
            } else if (e.clientX - state.startingPoint > 12 && state.dragging) {
                if (state.active > 0) {
                    dispatch({
                        type: ACTION.stopTracking,
                        payload: {
                            direction: "moveLeft",
                            wrapper: indicatorsCarousel
                        }
                    });
                }
            }
        },
        arrayOfElementRef: [
            innerCarousel
        ],
        eventExists: state.dragging,
        deps: [
            items
        ]
    });
    useEventListener({
        event: "mousemove",
        listener: (e)=>{
            e.preventDefault();
            // console.log("Mousemove event on Modal - inner Carousel.");
            if (e.clientX - state.startingPoint < -12 && state.dragging) {
                if (// state.active < items.length - itemsPerPage
                state.active + state.varyBy < items.length - items.length % itemsPerPage) {
                    dispatch({
                        type: ACTION.stopTracking,
                        payload: {
                            direction: "moveRight",
                            wrapper: modalIndicatorsCarousel
                        }
                    });
                }
            } else if (e.clientX - state.startingPoint > 12 && state.dragging) {
                if (state.active > 0) {
                    dispatch({
                        type: ACTION.stopTracking,
                        payload: {
                            direction: "moveLeft",
                            wrapper: modalIndicatorsCarousel
                        }
                    });
                }
            }
        },
        arrayOfElementRef: [
            modalInnerCarousel
        ],
        eventExists: state.dragging,
        deps: [
            hasModal,
            items
        ]
    });
    if (carouselIndicatorsImages) {
        useEventListener({
            event: "mousedown",
            listener: (e)=>{
                e.preventDefault();
                // console.log("Mousedown event on Modal - indicators Carousel.");
                if (modalIndicatorsCarousel.current) {
                    modalIndicatorsCarousel.current.style.animationName = "";
                }
                previousCursorPosition = e.clientX;
                draggingIndicators = true;
            },
            arrayOfElementRef: [
                modalIndicatorsCarousel
            ],
            deps: [
                items
            ]
        });
        useEventListener({
            event: "mousedown",
            listener: (e)=>{
                e.preventDefault();
                // console.log("Mousedown event on Main - indicators Carousel.");
                if (indicatorsCarousel.current) {
                    indicatorsCarousel.current.style.animationName = "";
                }
                previousCursorPosition = e.clientX;
                draggingIndicators = true;
            },
            arrayOfElementRef: [
                indicatorsCarousel
            ],
            deps: [
                items
            ]
        });
        useEventListener({
            event: "mouseup",
            listener: ()=>{
                // console.log(
                //   "Mouseup event on Document for Main/Modal - indicators Carousel."
                // );
                draggingIndicators = false;
                if (indicatorsCarousel.current) {
                    indicatorsCarousel.current.style.left = `${Math.max(indicatorsCarousel.current.offsetWidth - indicatorsCarousel.current.scrollWidth, Math.min(0, parseInt(indicatorsCarousel.current.style.left ? indicatorsCarousel.current.style.left : "0")))}px`;
                }
                if (hasModal && modalIndicatorsCarousel.current) {
                    modalIndicatorsCarousel.current.style.left = `${Math.max(modalIndicatorsCarousel.current.offsetWidth - modalIndicatorsCarousel.current.scrollWidth, Math.min(0, parseInt(modalIndicatorsCarousel.current.style.left ? modalIndicatorsCarousel.current.style.left : "0")))}px`;
                }
            },
            deps: [
                hasModal,
                items
            ]
        });
        useEventListener({
            event: "mousemove",
            listener: (e)=>{
                e.preventDefault();
                // console.log("Mousemove event on Main - indicators Carousel.");
                if (draggingIndicators) {
                    indicatorPosition = previousCursorPosition - e.clientX;
                    previousCursorPosition = e.clientX;
                    if (indicatorsCarousel.current) {
                        indicatorsCarousel.current.style.left = Math.max(indicatorsCarousel.current.offsetWidth - indicatorsCarousel.current.scrollWidth - 70, Math.min(70, parseInt(indicatorsCarousel.current.style.left ? indicatorsCarousel.current.style.left : "0") - indicatorPosition)) + "px";
                    }
                }
            },
            arrayOfElementRef: [
                indicatorsCarousel
            ],
            deps: [
                items
            ]
        });
        useEventListener({
            event: "mousemove",
            listener: (e)=>{
                e.preventDefault();
                // console.log("Mousemove event on Modal - indicators Carousel.");
                if (draggingIndicators) {
                    indicatorPosition = previousCursorPosition - e.clientX;
                    previousCursorPosition = e.clientX;
                    if (modalIndicatorsCarousel.current) {
                        modalIndicatorsCarousel.current.style.left = Math.max(modalIndicatorsCarousel.current.offsetWidth - modalIndicatorsCarousel.current.scrollWidth - 70, Math.min(70, parseInt(modalIndicatorsCarousel.current.style.left ? modalIndicatorsCarousel.current.style.left : "0") - indicatorPosition)) + "px";
                    }
                }
            },
            arrayOfElementRef: [
                modalIndicatorsCarousel
            ],
            deps: [
                hasModal,
                items
            ]
        });
        useEventListener({
            event: "resize",
            // TODO optimization.
            listener: ()=>{
                if (indicatorsCarousel.current) {
                    indicatorsCarousel.current.style.left = Math.max(indicatorsCarousel.current.offsetWidth - indicatorsCarousel.current.scrollWidth, Math.min(0, parseInt(indicatorsCarousel.current.style.left ? indicatorsCarousel.current.style.left : "0"))) + "px";
                }
                if (hasModal && modalIndicatorsCarousel.current) {
                    modalIndicatorsCarousel.current.style.left = Math.max(modalIndicatorsCarousel.current.offsetWidth - modalIndicatorsCarousel.current.scrollWidth, Math.min(0, parseInt(modalIndicatorsCarousel.current.style.left ? modalIndicatorsCarousel.current.style.left : "0"))) + "px";
                }
            },
            windowElement: true,
            deps: [
                hasModal,
                items
            ]
        });
    }
    {
        useEventListener({
            event: "keydown",
            listener: (e)=>{
                if ((e.target == document.body || e.target == document.getElementById(modalId)) && bindKeyDownEvents) {
                    if (e.code == "ArrowLeft") {
                        controllerClickHandler("left", e.target == document.getElementById(modalId) ? modalIndicatorsCarousel : indicatorsCarousel);
                    } else if (e.code == "ArrowRight") {
                        controllerClickHandler("right", e.target == document.getElementById(modalId) ? modalIndicatorsCarousel : indicatorsCarousel);
                    }
                }
            },
            deps: [
                controllerClickHandler,
                hasModal,
                bindKeyDownEvents,
                items
            ]
        });
    }
    let returnObject = {
        state,
        carousel,
        innerCarousel,
        indicatorsCarousel,
        modalInnerCarousel,
        modalIndicatorsCarousel,
        modalId,
        carouselInnerStyle,
        controllerClickHandler,
        indicatorMouseUpHandler,
        indicatorMouseDownHandler
    };
    return returnObject;
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/CarouselImageIndicators.tsx



function CarouselImageIndicators({ indicatorsCarousel , items , currentActive , indicatorMouseUpHandler , indicatorMouseDownHandler , itemsPerPage  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            whiteSpace: "nowrap",
            overflowX: "hidden"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "custom-carousel-indicator-wrapper position-relative py-2",
            ref: indicatorsCarousel,
            children: items?.map((item, i, arr)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        item.type == "image" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `custom-carousel-indicator-image${i != arr.length - 1 ? " me-2" : ""}${i == currentActive ? " active" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "wrapper",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: item.src,
                                        alt: "Villa Ocean",
                                        className: "main-carousel-component-item",
                                        width: 600,
                                        height: 400,
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: (e)=>indicatorMouseUpHandler(e, i, indicatorsCarousel),
                                    onMouseDown: (e)=>indicatorMouseDownHandler(e),
                                    role: "button",
                                    className: "custom-carousel-indicator-anchor",
                                    "aria-label": arr.length == i + 1 && itemsPerPage - 1 != 0 ? `Show carousel item ${i + 1} and ${itemsPerPage - 1 != 1 ? `the rest ${itemsPerPage - 1} item` : `item ${i + 2}`}` : `Show carousel item ${i + 1}`
                                })
                            ]
                        }),
                        item.type == "jsx" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "TODO"
                        }),
                        item.type == "text" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "TODO"
                        }),
                        item.type == "raw-html" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "TODO"
                        })
                    ]
                }, item.id))
        })
    });
}

;// CONCATENATED MODULE: ./components/CarouselIndicators.tsx


function CarouselIndicators({ lessCarouselIndicators , currentActive , itemsPerPage , items , indicatorMouseUpHandler  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-center p-4 d-flex justify-content-center",
        children: items.slice(itemsPerPage - 1).map((x, i, arr)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                children: (!lessCarouselIndicators || i % itemsPerPage == 0) && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    // TODO: NEEDS fix for normal carousels without image_indicators because now it has 2 parameters.
                    onClick: (e)=>indicatorMouseUpHandler(e, i),
                    className: `custom-carousel-indicator ${i == currentActive && "active"}`,
                    role: "button",
                    "aria-label": arr.length == i + 1 && itemsPerPage - 1 != 0 ? `Show carousel item ${i + 1} and ${itemsPerPage - 1 != 1 ? `the rest ${itemsPerPage - 1} item` : `item ${i + 2}`}` : `Show carousel item ${i + 1}`
                })
            }, x.id))
    });
}

;// CONCATENATED MODULE: ./components/CarouselControls.tsx

function CarouselControls({ controllerClickHandler , indicatorsCarousel  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                onClick: ()=>controllerClickHandler("left", indicatorsCarousel),
                className: "custom-carousel-control-left",
                role: "button",
                "aria-label": "Show left carousel item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                onClick: ()=>controllerClickHandler("right", indicatorsCarousel),
                className: "custom-carousel-control-right",
                role: "button",
                "aria-label": "Show right carousel item"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./hooks/useCarouselItem.tsx

function useCustomCarouselItem({ itemsPerPage , itemsMarginRem , transitionOpacity , itemIterator , previousActive , currentActive  }) {
    var itemRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        if (itemRef.current) {
            itemRef.current.style["width"] = `calc((100%/${itemsPerPage}) - ((${itemsPerPage} - 1) * ${itemsMarginRem}rem/${itemsPerPage}))`;
            itemRef.current.style["marginRight"] = `${itemsMarginRem}rem`;
            itemRef.current.style["position"] = "relative";
            itemRef.current.style["animationName"] = "";
            itemRef.current.style["animationDuration"] = "0.5s";
            itemRef.current.style["zIndex"] = "0";
        }
    }, [
        transitionOpacity
    ]);
    external_react_default().useEffect(()=>{
        if (transitionOpacity && itemIterator == previousActive) {
            if (document != null) {
                let rootElement = document.querySelector(":root");
                rootElement?.style.setProperty("--carousel-temp-transform", `translateX(calc((${currentActive} - ${previousActive})*100% + ${currentActive - previousActive} * ${itemsMarginRem}rem))`);
            }
            if (itemRef.current) {
                itemRef.current.style["width"] = `calc((100%/${itemsPerPage}) - ((${itemsPerPage} - 1) * ${itemsMarginRem}rem/${itemsPerPage}))`;
                itemRef.current.style["marginRight"] = `${itemsMarginRem}rem`;
                itemRef.current.style["position"] = "relative";
                itemRef.current.style["animationName"] = "opacityAnimationCarousel";
                itemRef.current.style["animationDuration"] = "0.5s";
                itemRef.current.style["zIndex"] = "1";
            }
        } else {
            if (itemRef.current) {
                itemRef.current.style["animationName"] = "";
                itemRef.current.style["zIndex"] = "0";
            }
        }
    }, [
        previousActive,
        itemRef
    ]);
    return {
        itemRef
    };
}

;// CONCATENATED MODULE: ./components/CarouselItem.tsx



function CarouselItem({ children , itemsPerPage , itemsMarginRem , itemIterator , previousActive =0 , currentActive =0 , transitionOpacity  }) {
    const { itemRef  } = useCustomCarouselItem({
        itemsPerPage,
        itemsMarginRem,
        transitionOpacity,
        itemIterator,
        previousActive,
        currentActive
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `custom-carousel-item${currentActive == itemIterator ? " active" : ""}`,
        ref: itemRef,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/CarouselMain.tsx





function CarouselMain({ items , itemsPerPage , itemsMarginRem , transitionOpacity , carouselControls , previousActive , currentActive , carouselInnerStyle , innerCarousel , controllerClickHandler , indicatorsCarousel  }) {
    var carouselCounter = true;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `custom-carousel${itemsPerPage == 1 ? " rounded-3" : ""}`,
            style: {
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "custom-carousel-inner",
                    style: carouselInnerStyle,
                    ref: innerCarousel,
                    children: items.map((item, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(CarouselItem, {
                            itemIterator: i,
                            previousActive: previousActive,
                            currentActive: currentActive,
                            itemsPerPage: itemsPerPage,
                            itemsMarginRem: itemsMarginRem,
                            transitionOpacity: transitionOpacity,
                            children: item.type == "image" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "wrapper",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.src,
                                    alt: "TODO alt texts...",
                                    className: `main-carousel-component-item${itemsPerPage > 1 ? " rounded-3" : ""}`,
                                    width: 1200,
                                    height: 800
                                })
                            })
                        }, item.id);
                    })
                }),
                carouselCounter && items.length - items.length % itemsPerPage > itemsPerPage && itemsPerPage == 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "custom-carousel-counter",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            currentActive + 1,
                            " / ",
                            items.length - itemsPerPage + 1
                        ]
                    })
                }),
                carouselControls && items.length - items.length % itemsPerPage > itemsPerPage && /*#__PURE__*/ jsx_runtime_.jsx(CarouselControls, {
                    controllerClickHandler: controllerClickHandler,
                    indicatorsCarousel: indicatorsCarousel
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./public/svg/expand.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgExpand = function SvgExpand(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M11.202 4.271V3.205H3.205v7.997h1.066V5.025l7.588 7.588.754-.754-7.588-7.588zM20.798 3.205v1.066h6.177l-7.588 7.588.754.754 7.588-7.588v6.177h1.066V3.205zM11.859 19.387l-7.588 7.588v-6.177H3.205v7.997h7.997v-1.066H5.025l7.588-7.588zM27.729 26.975l-7.588-7.588-.754.754 7.588 7.588h-6.177v1.066h7.997v-7.997h-1.066z"
  })));
};
/* harmony default export */ const expand = (SvgExpand);
;// CONCATENATED MODULE: ./components/CarouselModal.tsx







function CustomCarouselModal({ carouselInnerStyle , innerCarousel , items , previousActive , currentActive , itemsPerPage , itemsMarginRem , transitionOpacity , carouselControls , controllerClickHandler , carouselIndicators , carouselIndicatorsImages , lessCarouselIndicators , indicatorsCarousel , indicatorMouseUpHandler , indicatorMouseDownHandler , modalId  }) {
    var modalRef = external_react_default().useRef(null);
    useEventListener({
        event: "show.bs.modal",
        listener: ()=>{
            if (modalRef.current != null) {
                Array.from(modalRef.current.querySelectorAll(".custom-carousel-item")).forEach((item)=>{
                    if (item.style.animationName != "") {
                        item.style.animationName = "";
                    }
                });
            }
        },
        arrayOfElementRef: [
            modalRef
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "btn btn-expand-svg",
                "data-bs-toggle": "modal",
                "data-bs-target": `#${modalId}`,
                "aria-label": "Show right carousel item",
                children: /*#__PURE__*/ jsx_runtime_.jsx(expand, {
                    className: "expand-carousel-svg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "custom-carousel-modal modal fade",
                id: modalId,
                tabIndex: -1,
                "aria-hidden": "true",
                ref: modalRef,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal-dialog modal-xl",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "modal-content",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "modal-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    className: "btn-close",
                                    "data-bs-dismiss": "modal",
                                    "aria-label": "Close"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CarouselMain, {
                                    carouselInnerStyle: carouselInnerStyle,
                                    innerCarousel: innerCarousel,
                                    items: items,
                                    previousActive: previousActive,
                                    currentActive: currentActive,
                                    itemsPerPage: itemsPerPage,
                                    itemsMarginRem: itemsMarginRem,
                                    transitionOpacity: transitionOpacity,
                                    carouselControls: carouselControls,
                                    controllerClickHandler: controllerClickHandler,
                                    indicatorsCarousel: indicatorsCarousel
                                }),
                                carouselIndicators && items.length - items.length % itemsPerPage > itemsPerPage && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: carouselIndicatorsImages ? /*#__PURE__*/ jsx_runtime_.jsx(CarouselIndicators, {
                                        lessCarouselIndicators: lessCarouselIndicators,
                                        currentActive: currentActive,
                                        itemsPerPage: itemsPerPage,
                                        items: items,
                                        indicatorMouseUpHandler: indicatorMouseUpHandler
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(CarouselImageIndicators, {
                                        items: items,
                                        indicatorsCarousel: indicatorsCarousel,
                                        currentActive: currentActive,
                                        indicatorMouseUpHandler: indicatorMouseUpHandler,
                                        indicatorMouseDownHandler: indicatorMouseDownHandler,
                                        itemsPerPage: itemsPerPage
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Carousel.tsx







function Carousel({ items , itemsPerPage =1 , itemsMarginRem =0 , carouselControls =false , carouselIndicators =false , carouselIndicatorsImages =false , lessCarouselIndicators =false , transitionOpacity =false , hasModal =false , bindKeyDownEvents =false , controllersOnHover =false  }) {
    const { state , carousel , innerCarousel , indicatorsCarousel , modalInnerCarousel , modalIndicatorsCarousel , modalId , carouselInnerStyle , controllerClickHandler , indicatorMouseUpHandler , indicatorMouseDownHandler  } = useCarousel({
        itemsPerPage,
        itemsMarginRem,
        transitionOpacity,
        items,
        carouselIndicatorsImages,
        bindKeyDownEvents,
        hasModal,
        lessCarouselIndicators
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `position-relative${controllersOnHover ? " custom-carousel-controls-on-hover" : ""}`,
            ref: carousel,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CarouselMain, {
                    carouselInnerStyle: carouselInnerStyle,
                    innerCarousel: innerCarousel,
                    items: items,
                    previousActive: state.previousActive,
                    currentActive: state.active,
                    itemsPerPage: itemsPerPage,
                    itemsMarginRem: itemsMarginRem,
                    transitionOpacity: transitionOpacity,
                    carouselControls: carouselControls,
                    controllerClickHandler: controllerClickHandler,
                    indicatorsCarousel: indicatorsCarousel
                }),
                carouselIndicators && items.length - items.length % itemsPerPage > itemsPerPage && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: !carouselIndicatorsImages ? /*#__PURE__*/ jsx_runtime_.jsx(CarouselIndicators, {
                        items: items,
                        lessCarouselIndicators: lessCarouselIndicators,
                        currentActive: state.active,
                        itemsPerPage: itemsPerPage,
                        indicatorMouseUpHandler: indicatorMouseUpHandler
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(CarouselImageIndicators, {
                        items: items,
                        indicatorsCarousel: indicatorsCarousel,
                        currentActive: state.active,
                        indicatorMouseUpHandler: indicatorMouseUpHandler,
                        indicatorMouseDownHandler: indicatorMouseDownHandler,
                        itemsPerPage: itemsPerPage
                    })
                }),
                hasModal && /*#__PURE__*/ jsx_runtime_.jsx(CustomCarouselModal, {
                    itemsPerPage: itemsPerPage,
                    itemsMarginRem: itemsMarginRem,
                    transitionOpacity: transitionOpacity,
                    carouselControls: carouselControls,
                    carouselIndicators: carouselIndicators,
                    carouselIndicatorsImages: carouselIndicatorsImages,
                    lessCarouselIndicators: lessCarouselIndicators,
                    carouselInnerStyle: carouselInnerStyle,
                    innerCarousel: modalInnerCarousel,
                    indicatorsCarousel: modalIndicatorsCarousel,
                    modalId: modalId,
                    items: items,
                    previousActive: state.previousActive,
                    currentActive: state.active,
                    controllerClickHandler: controllerClickHandler,
                    indicatorMouseUpHandler: indicatorMouseUpHandler,
                    indicatorMouseDownHandler: indicatorMouseDownHandler
                })
            ]
        })
    });
}


/***/ })

};
;