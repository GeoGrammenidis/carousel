import {
  IndicatorMouseUpHandlerType,
  IndicatorMouseDownHandlerType,
  StateProp,
  UseCarouselReturnType,
} from "@/hooks/useCarousel";
import Image from "next/image";
import React from "react";
import { CarouselItem, CarouselModeVariants, CarouselProps } from "./Carousel";

type Required<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined>;
};
type CarouselImageIndicatorsProps<T extends CarouselModeVariants> = Pick<
  Required<CarouselProps<T>>,
  "itemsPerPage"
> & {
  items: CarouselItem<T extends `${string}-imageIndicators` ? true : false>[];
  currentActive: StateProp["active"];
  indicatorsCarousel: UseCarouselReturnType["indicatorsCarousel"];
  indicatorMouseUpHandler: IndicatorMouseUpHandlerType;
  indicatorMouseDownHandler: IndicatorMouseDownHandlerType;
};

export default function CarouselImageIndicators<
  T extends CarouselModeVariants
>({
  indicatorsCarousel,
  items,
  currentActive, // : state.active
  indicatorMouseUpHandler,
  indicatorMouseDownHandler,
  itemsPerPage,
}: CarouselImageIndicatorsProps<T>) {
  return (
    <div style={{ whiteSpace: "nowrap", overflowX: "hidden" }}>
      <div
        className="custom-carousel-indicator-wrapper position-relative py-2"
        ref={indicatorsCarousel}
      >
        {items?.map((item, i, arr) => (
          <React.Fragment key={item.id}>
            {item.type == "image" && (
              <div
                className={`custom-carousel-indicator-image${
                  i != arr.length - 1 ? " me-2" : ""
                }${i == currentActive ? " active" : ""}`}
              >
                <div className="wrapper">
                  <Image
                    src={item.src}
                    alt="Villa Ocean"
                    className="main-carousel-component-item"
                    width={600}
                    height={400}
                    priority
                  />
                </div>
                <a
                  onClick={(e) =>
                    indicatorMouseUpHandler(e, i, indicatorsCarousel)
                  }
                  onMouseDown={(e) => indicatorMouseDownHandler(e)}
                  role="button"
                  className="custom-carousel-indicator-anchor"
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
              </div>
            )}
            {item.type == "jsx" && <div>TODO</div>}
            {item.type == "text" && <div>TODO</div>}
            {item.type == "raw-html" && <div>TODO</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
