import React from "react";
import useCarousel, { UseCarouselProps } from "../hooks/useCarousel";
import CarouselImageIndicators from "./CarouselImageIndicators";
import CarouselIndicators from "./CarouselIndicators";
import CarouselMain from "./CarouselMain";
import CarouselModal from "./CarouselModal";

type Spacing = 0.5 | 1 | 1.5 | 2 | 2.5 | 3;

type HasCarouselControls<T> = T extends true
  ? {
      carouselControls: true;
      controllersOnHover?: boolean;
    }
  : {
      carouselControls?: false;
      controllersOnHover?: false;
    };

type HasCarouselIndicators<T> = T extends true
  ? {
      carouselIndicators: true;
      carouselIndicatorsImages?: false;
    }
  : {
      carouselIndicators?: false;
      carouselIndicatorsImages?: false;
    };

type HasCarouselImageIndicators = {
  carouselIndicators: true;
  carouselIndicatorsImages: true;
};

type HasMutlipleItems<T> = T extends true
  ? {
      itemsPerPage: 2 | 3 | 4;
      itemsMarginRem?: Spacing;
      lessCarouselIndicators?: boolean;
      transitionOpacity?: false;
    }
  : {
      itemsPerPage?: 1;
      itemsMarginRem?: 0;
      lessCarouselIndicators?: false;
      transitionOpacity?: boolean;
    };

type HasLessIndicators<T> = T extends true
  ? {
      lessCarouselIndicators: true;
    }
  : {
      lessCarouselIndicators?: false;
    };

export type CarouselItem<T> = { id: number } & (
  | {
      type: "image";
      src: CarouselImage;
    }
  | {
      type: "text";
      content: string;
    }
  | {
      type: "jsx";
      jsx: React.ReactNode;
    }
  | {
      type: "raw-html";
      html: string;
    }
) &
  (T extends true ? { thumbnail: CarouselImage } : {});

export type CarouselModeVariants = Exclude<
  `${"single" | "multiple"}${"" | "-controls"}${
    | ""
    | "-indicators"
    | "-lessIndicators"
    | "-imageIndicators"}`,
  | `single${string}-lessIndicators${string}`
  | `multiple${string}-imageIndicators${string}`
>;

export type CarouselProps<Mode extends CarouselModeVariants> = {
  items: [
    CarouselItem<Mode extends `${string}-imageIndicators` ? true : false>,
    ...CarouselItem<Mode extends `${string}-imageIndicators` ? true : false>[]
  ];
  hasModal?: boolean;
  bindKeyDownEvents?: boolean;
} & (Mode extends "single"
  ? HasMutlipleItems<false> &
      HasCarouselControls<false> &
      HasCarouselIndicators<false>
  : Mode extends "single-indicators"
  ? HasMutlipleItems<false> &
      HasCarouselControls<false> &
      HasCarouselIndicators<true> &
      HasLessIndicators<false>
  : Mode extends "single-imageIndicators"
  ? HasMutlipleItems<false> &
      HasCarouselControls<false> &
      HasCarouselImageIndicators &
      HasLessIndicators<false>
  : Mode extends "single-controls"
  ? HasMutlipleItems<false> &
      HasCarouselControls<true> &
      HasCarouselIndicators<false> &
      HasLessIndicators<false>
  : Mode extends "single-controls-indicators"
  ? HasMutlipleItems<false> &
      HasCarouselControls<true> &
      HasCarouselIndicators<true> &
      HasLessIndicators<false>
  : Mode extends "single-controls-imageIndicators"
  ? HasMutlipleItems<false> &
      HasCarouselControls<true> &
      HasCarouselImageIndicators &
      HasLessIndicators<false>
  : Mode extends "multiple"
  ? HasMutlipleItems<true> &
      HasCarouselControls<false> &
      HasCarouselIndicators<false> &
      HasLessIndicators<false>
  : Mode extends "multiple-indicators"
  ? HasMutlipleItems<true> &
      HasCarouselControls<false> &
      HasCarouselIndicators<true> &
      HasLessIndicators<false>
  : Mode extends "multiple-lessIndicators"
  ? HasMutlipleItems<true> &
      HasCarouselControls<false> &
      HasCarouselIndicators<true> &
      HasLessIndicators<true>
  : Mode extends "multiple-controls"
  ? HasMutlipleItems<true> &
      HasCarouselControls<true> &
      HasCarouselIndicators<false> &
      HasLessIndicators<false>
  : Mode extends "multiple-controls-indicators"
  ? HasMutlipleItems<true> &
      HasCarouselControls<true> &
      HasCarouselIndicators<true> &
      HasLessIndicators<false>
  : Mode extends "multiple-controls-lessIndicators"
  ? HasMutlipleItems<true> &
      HasCarouselControls<true> &
      HasCarouselIndicators<true> &
      HasLessIndicators<true>
  : never);

export default function Carousel<T extends CarouselModeVariants>({
  items,
  itemsPerPage = 1, // OK
  itemsMarginRem = 0, // OK
  carouselControls = false, // OK
  carouselIndicators = false, // OK
  carouselIndicatorsImages = false,
  lessCarouselIndicators = false,

  transitionOpacity = false,
  hasModal = false,
  bindKeyDownEvents = false,
  controllersOnHover = false,
}: CarouselProps<T>) {
  const {
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
  } = useCarousel<T>({
    itemsPerPage,
    itemsMarginRem,
    transitionOpacity,
    items,
    carouselIndicatorsImages,
    bindKeyDownEvents,
    hasModal,
    lessCarouselIndicators,
  } as UseCarouselProps<T>);

  return (
    <>
      <div
        className={`position-relative${
          controllersOnHover ? " custom-carousel-controls-on-hover" : ""
        }`}
        ref={carousel}
      >
        <CarouselMain<T>
          carouselInnerStyle={carouselInnerStyle}
          innerCarousel={innerCarousel}
          items={items}
          previousActive={state.previousActive}
          currentActive={state.active}
          itemsPerPage={
            itemsPerPage as Exclude<CarouselProps<T>["itemsPerPage"], undefined>
          }
          itemsMarginRem={
            itemsMarginRem as Exclude<
              CarouselProps<T>["itemsMarginRem"],
              undefined
            >
          }
          transitionOpacity={
            transitionOpacity as Exclude<
              CarouselProps<T>["transitionOpacity"],
              undefined
            >
          }
          carouselControls={
            carouselControls as Exclude<
              CarouselProps<T>["carouselControls"],
              undefined
            >
          }
          controllerClickHandler={controllerClickHandler}
          indicatorsCarousel={indicatorsCarousel}
        ></CarouselMain>
        {carouselIndicators &&
          items.length - (items.length % itemsPerPage) > itemsPerPage && (
            <>
              {!carouselIndicatorsImages ? (
                <CarouselIndicators<T>
                  items={items}
                  lessCarouselIndicators={
                    lessCarouselIndicators as Exclude<
                      CarouselProps<T>["lessCarouselIndicators"],
                      undefined
                    >
                  }
                  currentActive={state.active}
                  itemsPerPage={
                    itemsPerPage as Exclude<
                      CarouselProps<T>["itemsPerPage"],
                      undefined
                    >
                  }
                  indicatorMouseUpHandler={indicatorMouseUpHandler}
                ></CarouselIndicators>
              ) : (
                <CarouselImageIndicators<T>
                  items={items}
                  indicatorsCarousel={indicatorsCarousel}
                  currentActive={state.active}
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
        {hasModal && (
          <CarouselModal<T>
            itemsPerPage={
              itemsPerPage as Exclude<
                CarouselProps<T>["itemsPerPage"],
                undefined
              >
            }
            itemsMarginRem={
              itemsMarginRem as Exclude<
                CarouselProps<T>["itemsMarginRem"],
                undefined
              >
            }
            transitionOpacity={
              transitionOpacity as Exclude<
                CarouselProps<T>["transitionOpacity"],
                undefined
              >
            }
            carouselControls={
              carouselControls as Exclude<
                CarouselProps<T>["carouselControls"],
                undefined
              >
            }
            carouselIndicators={
              carouselIndicators as Exclude<
                CarouselProps<T>["carouselIndicators"],
                undefined
              >
            }
            carouselIndicatorsImages={
              carouselIndicatorsImages as Exclude<
                CarouselProps<T>["carouselIndicatorsImages"],
                undefined
              >
            }
            lessCarouselIndicators={
              lessCarouselIndicators as Exclude<
                CarouselProps<T>["lessCarouselIndicators"],
                undefined
              >
            }
            carouselInnerStyle={carouselInnerStyle}
            innerCarousel={modalInnerCarousel}
            indicatorsCarousel={modalIndicatorsCarousel}
            modalId={modalId}
            items={items}
            previousActive={state.previousActive}
            currentActive={state.active}
            controllerClickHandler={controllerClickHandler}
            indicatorMouseUpHandler={indicatorMouseUpHandler}
            indicatorMouseDownHandler={indicatorMouseDownHandler}
          ></CarouselModal>
        )}
      </div>
    </>
  );
}
