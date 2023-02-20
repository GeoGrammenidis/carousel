import { CarouselModeVariants, CarouselProps } from "@/components/Carousel";
import React from "react";
import { StateProp } from "./useCarousel";

type Required<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined>;
};
export type useCustomCarouselItemProps<T extends CarouselModeVariants> = Pick<
  Required<CarouselProps<T>>,
  "itemsPerPage" | "itemsMarginRem" | "transitionOpacity"
> & {
  itemIterator: number;
  previousActive: StateProp["previousActive"];
  currentActive: StateProp["active"];
};

export default function useCustomCarouselItem<T extends CarouselModeVariants>({
  itemsPerPage,
  itemsMarginRem,
  transitionOpacity,
  itemIterator,
  previousActive,
  currentActive,
}: useCustomCarouselItemProps<T>) {
  var itemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (itemRef.current) {
      itemRef.current.style[
        "width"
      ] = `calc((100%/${itemsPerPage}) - ((${itemsPerPage} - 1) * ${itemsMarginRem}rem/${itemsPerPage}))`;
      itemRef.current.style["marginRight"] = `${itemsMarginRem}rem`;
      itemRef.current.style["position"] = "relative";
      itemRef.current.style["animationName"] = "";
      itemRef.current.style["animationDuration"] = "0.5s";
      itemRef.current.style["zIndex"] = "0";
    }
  }, [transitionOpacity]);

  React.useEffect(() => {
    if (transitionOpacity && itemIterator == previousActive) {
      if (document != null) {
        let rootElement = document.querySelector<HTMLElement>(":root");
        rootElement?.style.setProperty(
          "--carousel-temp-transform",
          `translateX(calc((${currentActive} - ${previousActive})*100% + ${
            currentActive - previousActive
          } * ${itemsMarginRem}rem))`
        );
      }
      if (itemRef.current) {
        itemRef.current.style[
          "width"
        ] = `calc((100%/${itemsPerPage}) - ((${itemsPerPage} - 1) * ${itemsMarginRem}rem/${itemsPerPage}))`;
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
  }, [previousActive, itemRef]);

  return { itemRef };
}
