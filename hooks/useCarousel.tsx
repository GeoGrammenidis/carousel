import { CarouselModeVariants, CarouselProps } from "@/components/Carousel";
import React from "react";
import useEventListener from "./useEventListener";

function updateAnimation(
  active: number,
  wrapper?: React.RefObject<HTMLDivElement>
) {
  if (wrapper && wrapper.current != null) {
    let rootElement = document.querySelector<HTMLElement>(":root");
    rootElement?.style.setProperty(
      "--carousel-temp-indicators-starting",
      wrapper.current.style.left ? wrapper.current.style.left : "0"
    );
    let pixelsToLeft = Math.max(
      wrapper.current.offsetWidth - wrapper.current.scrollWidth,
      Math.min(0, -active * 110 + 40)
    );
    rootElement?.style.setProperty(
      "--carousel-temp-indicators-ending",
      `${pixelsToLeft}px`
    );
    wrapper.current.style.animationName = "indicatorsAnimationCarousel";
    wrapper.current.style.left = `${pixelsToLeft}px`;
  }
}

enum ACTION {
  updateActive = "updateActive",
  increaseActive = "increaseActive",
  decreaseActive = "decreaseActive",
  trackMovement = "trackMovement",
  stopTracking = "stopTracking",
}

type ActionProp =
  | {
      type: ACTION.updateActive;
      payload: { active: number; wrapper?: React.RefObject<HTMLDivElement> };
    }
  | {
      type: ACTION.increaseActive;
      payload: { wrapper: React.RefObject<HTMLDivElement> };
    }
  | {
      type: ACTION.decreaseActive;
      payload: {
        wrapper: React.RefObject<HTMLDivElement>;
      };
    }
  | {
      type: ACTION.trackMovement;
      payload: number;
    }
  | {
      type: ACTION.stopTracking;
      payload?: {
        direction: "moveLeft" | "moveRight";
        wrapper: React.RefObject<HTMLDivElement>;
      };
    };
export type StateProp = {
  startingPoint: number;
  dragging: boolean;
  active: number;
  previousActive: number;
  leftIndicators: number;
  varyBy: number;
};

function reducer(state: StateProp, action: ActionProp) {
  switch (action.type) {
    case "updateActive":
      updateAnimation(action.payload.active, action.payload.wrapper);
      return {
        ...state,
        previousActive: state.active,
        active: action.payload.active,
      };
    case "increaseActive":
      updateAnimation(state.active + state.varyBy, action.payload.wrapper);
      return {
        ...state,
        previousActive: state.active,
        active: state.active + state.varyBy,
      };
    case "decreaseActive":
      updateAnimation(state.active - state.varyBy, action.payload.wrapper);
      return {
        ...state,
        previousActive: state.active,
        active: state.active - state.varyBy,
      };
    case "trackMovement":
      return { ...state, startingPoint: action.payload, dragging: true };
    case "stopTracking":
      if (action.payload?.direction == "moveRight" && state.dragging) {
        updateAnimation(state.active + state.varyBy, action.payload.wrapper);
        return {
          ...state,
          startingPoint: 0,
          dragging: false,
          previousActive: state.active,
          active: state.active + state.varyBy,
        };
      } else if (action.payload?.direction == "moveLeft" && state.dragging) {
        updateAnimation(state.active - state.varyBy, action.payload.wrapper);
        return {
          ...state,
          startingPoint: 0,
          dragging: false,
          previousActive: state.active,
          active: state.active - state.varyBy,
        };
      }
      return { ...state, startingPoint: 0, dragging: false };
    default:
      throw new Error(`${action.type} is not supported to dipatch.`);
  }
}

type Required<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined>;
};
export type UseCarouselProps<T extends CarouselModeVariants> = Pick<
  Required<CarouselProps<T>>,
  | "itemsPerPage"
  | "itemsMarginRem"
  | "transitionOpacity"
  | "items"
  | "carouselIndicatorsImages"
  | "bindKeyDownEvents"
  | "hasModal"
  | "lessCarouselIndicators"
>;

export type ControllerClickHandlerType = (
  direction: "left" | "right",
  wrapper: React.RefObject<HTMLDivElement>
) => void;

export type IndicatorMouseUpHandlerType = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  i: number,
  wrapper?: React.RefObject<HTMLDivElement>
) => void;

export type IndicatorMouseDownHandlerType = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => void;

export type UseCarouselReturnType = {
  state: StateProp;
  carousel: React.RefObject<HTMLDivElement>;
  innerCarousel: React.RefObject<HTMLDivElement>;
  indicatorsCarousel: React.RefObject<HTMLDivElement>;
  modalInnerCarousel: React.RefObject<HTMLDivElement>;
  modalIndicatorsCarousel: React.RefObject<HTMLDivElement>;
  modalId: string;
  carouselInnerStyle: React.CSSProperties;
  controllerClickHandler: ControllerClickHandlerType;
  indicatorMouseUpHandler: IndicatorMouseUpHandlerType;
  indicatorMouseDownHandler: IndicatorMouseDownHandlerType;
};

export default function useCarousel<T extends CarouselModeVariants>({
  itemsPerPage,
  itemsMarginRem,
  transitionOpacity,
  items,
  carouselIndicatorsImages,
  bindKeyDownEvents,
  hasModal,
  lessCarouselIndicators,
}: UseCarouselProps<T>) {
  const initialState = {
    startingPoint: 0,
    dragging: false,
    active: 0,
    previousActive: -1,
    leftIndicators: 0,
    varyBy: lessCarouselIndicators ? itemsPerPage : 1,
  };
  const [state, dispatch] = React.useReducer<
    (state: StateProp, action: ActionProp) => StateProp
  >(reducer, initialState);
  const carousel = React.useRef<HTMLDivElement>(null);
  const innerCarousel = React.useRef<HTMLDivElement>(null);
  const indicatorsCarousel = React.useRef<HTMLDivElement>(null);
  const modalInnerCarousel = React.useRef<HTMLDivElement>(null);

  const modalIndicatorsCarousel = React.useRef<HTMLDivElement>(null);
  const modalId: string = React.useId().slice(1, -1);
  var startedClick = 0;
  var draggingIndicators = false;
  var previousCursorPosition = 0;
  var indicatorPosition = 0;

  var carouselInnerStyle: React.CSSProperties = {
    transform: `translateX(calc(${-(100 / itemsPerPage) * state.active}% - ${
      (itemsMarginRem / itemsPerPage) * state.active
    }rem))`,
  };
  if (!transitionOpacity) {
    carouselInnerStyle.transition = "transform 0.75s";
  }

  React.useEffect(() => {
    // TODO: I should add ACTION.reset
    dispatch({ type: ACTION.updateActive, payload: { active: 0 } });
  }, [items]);

  var controllerClickHandler: ControllerClickHandlerType = (
    direction,
    wrapper
  ) => {
    if (carouselIndicatorsImages && wrapper.current) {
      wrapper.current.style.animationName = "";
    }
    if (direction == "left") {
      if (state.active > 0) {
        dispatch({ type: ACTION.decreaseActive, payload: { wrapper } });
      }
    } else {
      if (
        state.active + state.varyBy <
        items.length - (items.length % itemsPerPage)
      ) {
        dispatch({ type: ACTION.increaseActive, payload: { wrapper } });
      }
    }
  };

  var indicatorMouseUpHandler: IndicatorMouseUpHandlerType = (
    e,
    i,
    wrapper
  ) => {
    if (state.active != i) {
      if (
        !carouselIndicatorsImages ||
        (startedClick - e.clientX < 8 && startedClick - e.clientX > -8)
      ) {
        dispatch({
          type: ACTION.updateActive,
          payload: { active: i, wrapper },
        });
      }
    }
  };
  var indicatorMouseDownHandler: IndicatorMouseDownHandlerType = (e) => {
    startedClick = e.clientX;
  };

  useEventListener({
    event: "mousedown",
    listener: (e: MouseEvent) => {
      e.preventDefault();
      if (carouselIndicatorsImages && indicatorsCarousel.current) {
        indicatorsCarousel.current.style.animationName = "";
      }
      dispatch({ type: ACTION.trackMovement, payload: e.clientX });
    },
    arrayOfElementRef: [innerCarousel],
    deps: [items],
  });

  useEventListener({
    event: "mousedown",
    listener: (e: MouseEvent) => {
      e.preventDefault();
      // console.log("Mousedown event on Modal - inner Carousel.");
      if (carouselIndicatorsImages && modalIndicatorsCarousel.current) {
        modalIndicatorsCarousel.current.style.animationName = "";
      }
      dispatch({ type: ACTION.trackMovement, payload: e.clientX });
    },
    arrayOfElementRef: [modalInnerCarousel],
    deps: [hasModal, items],
  });

  useEventListener({
    event: "mouseup",
    listener: (e: MouseEvent) => {
      e.preventDefault();
      // console.log("Mouseup event on Modal or Main - inner Carousel.");
      dispatch({ type: ACTION.stopTracking });
    },
    arrayOfElementRef: [innerCarousel, modalInnerCarousel],
    eventExists: state.dragging,
    deps: [hasModal],
  });

  useEventListener({
    event: "mousemove",
    listener: (e: MouseEvent) => {
      e.preventDefault();
      // console.log("Mousemove event on Main - inner Carousel.");
      if (e.clientX - state.startingPoint < -12 && state.dragging) {
        if (
          // state.active < items.length - itemsPerPage
          state.active + state.varyBy <
          items.length - (items.length % itemsPerPage)
          // TODO CHANGE check..
        ) {
          dispatch({
            type: ACTION.stopTracking,
            payload: { direction: "moveRight", wrapper: indicatorsCarousel },
          });
        }
      } else if (e.clientX - state.startingPoint > 12 && state.dragging) {
        if (state.active > 0) {
          dispatch({
            type: ACTION.stopTracking,
            payload: { direction: "moveLeft", wrapper: indicatorsCarousel },
          });
        }
      }
    },
    arrayOfElementRef: [innerCarousel],
    eventExists: state.dragging,
    deps: [items],
  });

  useEventListener({
    event: "mousemove",
    listener: (e: MouseEvent) => {
      e.preventDefault();
      // console.log("Mousemove event on Modal - inner Carousel.");
      if (e.clientX - state.startingPoint < -12 && state.dragging) {
        if (
          // state.active < items.length - itemsPerPage
          state.active + state.varyBy <
          items.length - (items.length % itemsPerPage)
          // TODO CHANGE check..
        ) {
          dispatch({
            type: ACTION.stopTracking,
            payload: {
              direction: "moveRight",
              wrapper: modalIndicatorsCarousel,
            },
          });
        }
      } else if (e.clientX - state.startingPoint > 12 && state.dragging) {
        if (state.active > 0) {
          dispatch({
            type: ACTION.stopTracking,
            payload: {
              direction: "moveLeft",
              wrapper: modalIndicatorsCarousel,
            },
          });
        }
      }
    },
    arrayOfElementRef: [modalInnerCarousel],
    eventExists: state.dragging,
    deps: [hasModal, items],
  });

  if (carouselIndicatorsImages) {
    useEventListener({
      event: "mousedown",
      listener: (e: MouseEvent) => {
        e.preventDefault();
        // console.log("Mousedown event on Modal - indicators Carousel.");
        if (modalIndicatorsCarousel.current) {
          modalIndicatorsCarousel.current.style.animationName = "";
        }
        previousCursorPosition = e.clientX;
        draggingIndicators = true;
      },
      arrayOfElementRef: [modalIndicatorsCarousel],
      deps: [items],
    });

    useEventListener({
      event: "mousedown",
      listener: (e: MouseEvent) => {
        e.preventDefault();
        // console.log("Mousedown event on Main - indicators Carousel.");
        if (indicatorsCarousel.current) {
          indicatorsCarousel.current.style.animationName = "";
        }
        previousCursorPosition = e.clientX;
        draggingIndicators = true;
      },
      arrayOfElementRef: [indicatorsCarousel],
      deps: [items],
    });

    useEventListener({
      event: "mouseup",
      listener: () => {
        // console.log(
        //   "Mouseup event on Document for Main/Modal - indicators Carousel."
        // );
        draggingIndicators = false;
        if (indicatorsCarousel.current) {
          indicatorsCarousel.current.style.left = `${Math.max(
            indicatorsCarousel.current.offsetWidth -
              indicatorsCarousel.current.scrollWidth,
            Math.min(
              0,
              parseInt(
                indicatorsCarousel.current.style.left
                  ? indicatorsCarousel.current.style.left
                  : "0"
              )
            )
          )}px`;
        }

        if (hasModal && modalIndicatorsCarousel.current) {
          modalIndicatorsCarousel.current.style.left = `${Math.max(
            modalIndicatorsCarousel.current.offsetWidth -
              modalIndicatorsCarousel.current.scrollWidth,
            Math.min(
              0,
              parseInt(
                modalIndicatorsCarousel.current.style.left
                  ? modalIndicatorsCarousel.current.style.left
                  : "0"
              )
            )
          )}px`;
        }
      },
      deps: [hasModal, items],
    });

    useEventListener({
      event: "mousemove",
      listener: (e: MouseEvent) => {
        e.preventDefault();
        // console.log("Mousemove event on Main - indicators Carousel.");
        if (draggingIndicators) {
          indicatorPosition = previousCursorPosition - e.clientX;
          previousCursorPosition = e.clientX;
          if (indicatorsCarousel.current) {
            indicatorsCarousel.current.style.left =
              Math.max(
                indicatorsCarousel.current.offsetWidth -
                  indicatorsCarousel.current.scrollWidth -
                  70,
                Math.min(
                  70,
                  parseInt(
                    indicatorsCarousel.current.style.left
                      ? indicatorsCarousel.current.style.left
                      : "0"
                  ) - indicatorPosition
                )
              ) + "px";
          }
        }
      },
      arrayOfElementRef: [indicatorsCarousel],
      deps: [items],
    });

    useEventListener({
      event: "mousemove",
      listener: (e: MouseEvent) => {
        e.preventDefault();
        // console.log("Mousemove event on Modal - indicators Carousel.");
        if (draggingIndicators) {
          indicatorPosition = previousCursorPosition - e.clientX;
          previousCursorPosition = e.clientX;
          if (modalIndicatorsCarousel.current) {
            modalIndicatorsCarousel.current.style.left =
              Math.max(
                modalIndicatorsCarousel.current.offsetWidth -
                  modalIndicatorsCarousel.current.scrollWidth -
                  70,
                Math.min(
                  70,
                  parseInt(
                    modalIndicatorsCarousel.current.style.left
                      ? modalIndicatorsCarousel.current.style.left
                      : "0"
                  ) - indicatorPosition
                )
              ) + "px";
          }
        }
      },
      arrayOfElementRef: [modalIndicatorsCarousel],
      deps: [hasModal, items],
    });

    useEventListener({
      event: "resize",
      // TODO optimization.
      listener: () => {
        if (indicatorsCarousel.current) {
          indicatorsCarousel.current.style.left =
            Math.max(
              indicatorsCarousel.current.offsetWidth -
                indicatorsCarousel.current.scrollWidth,
              Math.min(
                0,
                parseInt(
                  indicatorsCarousel.current.style.left
                    ? indicatorsCarousel.current.style.left
                    : "0"
                )
              )
            ) + "px";
        }
        if (hasModal && modalIndicatorsCarousel.current) {
          modalIndicatorsCarousel.current.style.left =
            Math.max(
              modalIndicatorsCarousel.current.offsetWidth -
                modalIndicatorsCarousel.current.scrollWidth,
              Math.min(
                0,
                parseInt(
                  modalIndicatorsCarousel.current.style.left
                    ? modalIndicatorsCarousel.current.style.left
                    : "0"
                )
              )
            ) + "px";
        }
      },
      windowElement: true,
      deps: [hasModal, items],
    });
  }

  {
    useEventListener({
      event: "keydown",
      listener: (e: KeyboardEvent) => {
        if (
          (e.target == document.body ||
            e.target == document.getElementById(modalId)) &&
          bindKeyDownEvents
        ) {
          if (e.code == "ArrowLeft") {
            controllerClickHandler(
              "left",
              e.target == document.getElementById(modalId)
                ? modalIndicatorsCarousel
                : indicatorsCarousel
            );
          } else if (e.code == "ArrowRight") {
            controllerClickHandler(
              "right",
              e.target == document.getElementById(modalId)
                ? modalIndicatorsCarousel
                : indicatorsCarousel
            );
          }
        }
      },
      deps: [controllerClickHandler, hasModal, bindKeyDownEvents, items],
    });
  }
  let returnObject: UseCarouselReturnType = {
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
    indicatorMouseDownHandler,
  };
  return returnObject;
}
