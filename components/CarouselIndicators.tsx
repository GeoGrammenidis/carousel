import { IndicatorMouseUpHandlerType, StateProp } from "@/hooks/useCarousel";
import React from "react";
import { CarouselItem, CarouselModeVariants, CarouselProps } from "./Carousel";

type Required<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined>;
};
type CarouselIndicatorsProps<T extends CarouselModeVariants> = Pick<
  Required<CarouselProps<T>>,
  "lessCarouselIndicators" | "itemsPerPage"
> & {
  items: CarouselItem<T extends `${string}-imageIndicators` ? true : false>[];
  currentActive: StateProp["active"];
  indicatorMouseUpHandler: IndicatorMouseUpHandlerType;
};

export default function CarouselIndicators<T extends CarouselModeVariants>({
  lessCarouselIndicators,
  currentActive, // state.active
  itemsPerPage,
  items, //children
  indicatorMouseUpHandler,
}: CarouselIndicatorsProps<T>) {
  return (
    <div className="text-center p-4 d-flex justify-content-center">
      {items.slice(itemsPerPage - 1).map((x, i, arr) => (
        <React.Fragment key={x.id}>
          {(!lessCarouselIndicators || i % itemsPerPage == 0) && (
            <a
              // TODO: NEEDS fix for normal carousels without image_indicators because now it has 2 parameters.
              onClick={(e) => indicatorMouseUpHandler(e, i)}
              className={`custom-carousel-indicator ${
                i == currentActive && "active"
              }`}
              role="button"
              aria-label={
                arr.length == i + 1 && itemsPerPage - 1 != 0
                  ? `Show carousel item ${i + 1} and ${
                      itemsPerPage - 1 != 1
                        ? `the rest ${itemsPerPage - 1} item`
                        : `item ${i + 2}`
                    }`
                  : `Show carousel item ${i + 1}`
              }
            ></a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
