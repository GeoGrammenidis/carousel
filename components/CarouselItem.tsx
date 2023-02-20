import { StateProp } from "@/hooks/useCarousel";
import React from "react";
import useCarouselItem from "../hooks/useCarouselItem";
import { CarouselModeVariants, CarouselProps } from "./Carousel";

type Required<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined>;
};
type CarouselItemProps<T extends CarouselModeVariants> = Pick<
  Required<CarouselProps<T>>,
  "itemsPerPage" | "itemsMarginRem" | "transitionOpacity"
> & {
  itemIterator: number;
  previousActive: StateProp["previousActive"];
  currentActive: StateProp["active"];
  children: React.ReactNode;
};

export default function CarouselItem<T extends CarouselModeVariants>({
  children,
  itemsPerPage,
  itemsMarginRem,
  itemIterator,
  previousActive = 0,
  currentActive = 0,
  transitionOpacity,
}: CarouselItemProps<T>) {
  const { itemRef } = useCarouselItem({
    itemsPerPage,
    itemsMarginRem,
    transitionOpacity,
    itemIterator,
    previousActive,
    currentActive,
  });
  return (
    <div
      className={`custom-carousel-item${
        currentActive == itemIterator ? " active" : ""
      }`}
      ref={itemRef}
    >
      {children}
    </div>
  );
}
