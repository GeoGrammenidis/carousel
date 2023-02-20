import { ControllerClickHandlerType } from "@/hooks/useCarousel";

export default function CarouselControls({
  controllerClickHandler,
  indicatorsCarousel,
}: {
  controllerClickHandler: ControllerClickHandlerType;
  indicatorsCarousel: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <a
        onClick={() => controllerClickHandler("left", indicatorsCarousel)}
        className="custom-carousel-control-left"
        role="button"
        aria-label="Show left carousel item"
      ></a>
      <a
        onClick={() => controllerClickHandler("right", indicatorsCarousel)}
        className="custom-carousel-control-right"
        role="button"
        aria-label="Show right carousel item"
      ></a>
    </>
  );
}
