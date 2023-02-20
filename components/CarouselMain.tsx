import CarouselControls from "./CarouselControls";
import React from "react";
import CarouselItem from "./CarouselItem";
import { CarouselItem as CarouselItemType } from "./Carousel";
import Image from "next/image";
import { CarouselProps, CarouselModeVariants } from "./Carousel";
import {
  ControllerClickHandlerType,
  StateProp,
  UseCarouselReturnType,
} from "@/hooks/useCarousel";

type Required<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined>;
};
type CarouselMainProps<T extends CarouselModeVariants> = Pick<
  Required<CarouselProps<T>>,
  "itemsPerPage" | "itemsMarginRem" | "transitionOpacity" | "carouselControls"
> &
  Pick<
    UseCarouselReturnType,
    "innerCarousel" | "carouselInnerStyle" | "indicatorsCarousel"
  > & {
    items: CarouselItemType<
      T extends `${string}-imageIndicators` ? true : false
    >[];
    previousActive: StateProp["previousActive"];
    currentActive: StateProp["active"];
    controllerClickHandler: ControllerClickHandlerType;
  };

export default function CarouselMain<T extends CarouselModeVariants>({
  items,
  itemsPerPage,
  itemsMarginRem,
  transitionOpacity,
  carouselControls,
  previousActive, //:state.previousActive
  currentActive, //:state.active
  carouselInnerStyle,
  innerCarousel,
  controllerClickHandler,
  indicatorsCarousel,
}: CarouselMainProps<T>) {
  var carouselCounter = true;
  return (
    <>
      <div
        className={`custom-carousel${itemsPerPage == 1 ? " rounded-3" : ""}`}
        style={{ overflow: "hidden" }}
      >
        <div
          className="custom-carousel-inner"
          style={carouselInnerStyle}
          ref={innerCarousel}
        >
          {items.map((item, i) => {
            return (
              <CarouselItem
                key={item.id}
                itemIterator={i}
                previousActive={previousActive}
                currentActive={currentActive}
                itemsPerPage={itemsPerPage}
                itemsMarginRem={itemsMarginRem}
                transitionOpacity={transitionOpacity}
              >
                {item.type == "image" && (
                  <div className="wrapper">
                    <Image
                      src={item.src}
                      alt="TODO alt texts..."
                      className={`main-carousel-component-item${
                        itemsPerPage > 1 ? " rounded-3" : ""
                      }`}
                      width={1200}
                      height={800}
                      // priority
                    />
                  </div>
                )}
              </CarouselItem>
            );
          })}
        </div>
        {carouselCounter &&
          items.length - (items.length % itemsPerPage) > itemsPerPage &&
          itemsPerPage == 1 && (
            <div className="custom-carousel-counter">
              {/* TODO: add SVG icon of a photo */}
              <span>
                {currentActive + 1} / {items.length - itemsPerPage + 1}
              </span>
            </div>
          )}
        {carouselControls &&
          items.length - (items.length % itemsPerPage) > itemsPerPage && (
            <CarouselControls
              controllerClickHandler={controllerClickHandler}
              indicatorsCarousel={indicatorsCarousel}
            ></CarouselControls>
          )}
      </div>
    </>
  );
}
