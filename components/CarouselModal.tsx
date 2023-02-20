import {
  ControllerClickHandlerType,
  IndicatorMouseDownHandlerType,
  IndicatorMouseUpHandlerType,
  StateProp,
  UseCarouselReturnType,
} from "@/hooks/useCarousel";
import useEventListener from "@/hooks/useEventListener";
import React from "react";
import ExpandSvg from "../public/svg/expand.svg";
import { CarouselItem, CarouselModeVariants, CarouselProps } from "./Carousel";
import CarouselImageIndicators from "./CarouselImageIndicators";
import CarouselIndicators from "./CarouselIndicators";
import CarouselMain from "./CarouselMain";
type Required<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined>;
};
type CustomCarouselModalProps<T extends CarouselModeVariants> = Pick<
  Required<CarouselProps<T>>,
  | "itemsPerPage"
  | "itemsMarginRem"
  | "transitionOpacity"
  | "carouselControls"
  | "carouselIndicators"
  | "carouselIndicatorsImages"
  | "lessCarouselIndicators"
> &
  Pick<
    UseCarouselReturnType,
    "innerCarousel" | "carouselInnerStyle" | "indicatorsCarousel" | "modalId"
  > & {
    items: CarouselItem<T extends `${string}-imageIndicators` ? true : false>[];
    previousActive: StateProp["previousActive"];
    currentActive: StateProp["active"];
    indicatorMouseUpHandler: IndicatorMouseUpHandlerType;
    controllerClickHandler: ControllerClickHandlerType;
    indicatorMouseDownHandler: IndicatorMouseDownHandlerType;
  };

export default function CustomCarouselModal<T extends CarouselModeVariants>({
  carouselInnerStyle,
  innerCarousel,
  items, // children
  previousActive, //:state.previousActive
  currentActive, //:state.active
  itemsPerPage,
  itemsMarginRem,
  transitionOpacity,
  carouselControls,
  controllerClickHandler,
  carouselIndicators,
  carouselIndicatorsImages,
  lessCarouselIndicators,
  indicatorsCarousel,
  indicatorMouseUpHandler,
  indicatorMouseDownHandler,
  modalId,
}: CustomCarouselModalProps<T>) {
  var modalRef = React.useRef<HTMLDivElement>(null);
  useEventListener({
    event: "show.bs.modal",
    listener: () => {
      if (modalRef.current != null) {
        Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            ".custom-carousel-item"
          )
        ).forEach((item) => {
          if (item.style.animationName != "") {
            item.style.animationName = "";
          }
        });
      }
    },
    arrayOfElementRef: [modalRef],
  });
  return (
    <>
      <button
        type="button"
        className="btn btn-expand-svg"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        aria-label="Show right carousel item"
      >
        <ExpandSvg className="expand-carousel-svg"></ExpandSvg>
      </button>

      <div
        className="custom-carousel-modal modal fade"
        id={modalId}
        tabIndex={-1}
        aria-hidden="true"
        ref={modalRef}
      >
        {/* TODO removed aria-labelledby="exampleModalLabel". Needs to be checked. */}

        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <CarouselMain
                carouselInnerStyle={carouselInnerStyle}
                innerCarousel={innerCarousel}
                items={items}
                previousActive={previousActive}
                currentActive={currentActive}
                itemsPerPage={itemsPerPage}
                itemsMarginRem={itemsMarginRem}
                transitionOpacity={transitionOpacity}
                carouselControls={carouselControls}
                controllerClickHandler={controllerClickHandler}
                indicatorsCarousel={indicatorsCarousel}
              ></CarouselMain>
              {carouselIndicators &&
                items.length - (items.length % itemsPerPage) > itemsPerPage && (
                  <>
                    {carouselIndicatorsImages ? (
                      <CarouselIndicators<T>
                        lessCarouselIndicators={
                          lessCarouselIndicators as Exclude<
                            CarouselProps<T>["lessCarouselIndicators"],
                            undefined
                          >
                        }
                        currentActive={currentActive}
                        itemsPerPage={
                          itemsPerPage as Exclude<
                            CarouselProps<T>["itemsPerPage"],
                            undefined
                          >
                        }
                        items={items}
                        indicatorMouseUpHandler={indicatorMouseUpHandler}
                      ></CarouselIndicators>
                    ) : (
                      <CarouselImageIndicators<T>
                        items={items}
                        indicatorsCarousel={indicatorsCarousel}
                        currentActive={currentActive}
                        indicatorMouseUpHandler={indicatorMouseUpHandler}
                        indicatorMouseDownHandler={indicatorMouseDownHandler}
                        itemsPerPage={
                          itemsPerPage as Exclude<
                            CarouselProps<T>["itemsPerPage"],
                            undefined
                          >
                        }
                      ></CarouselImageIndicators>
                    )}
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
