import Carousel from "@/components/Carousel";
import Configuration from "@/components/Configuration";
import useConfiguration from "@/hooks/useConfiguration";

export default function MultipleControlsIndicators() {
  const { configurationState, handleChange } = useConfiguration<false>({
    hasThumbnails: false,
  });
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <h1 className="h3 text-center">
              Multiple Items with Controls &amp; Less Indicators
            </h1>
            <Carousel<"multiple-controls-lessIndicators">
              items={configurationState.items}
              // properties that you must set
              itemsPerPage={3}
              itemsMarginRem={1}
              carouselControls={true}
              carouselIndicators={true}
              lessCarouselIndicators={true}
              // optional properties:
              bindKeyDownEvents={configurationState.bindKeyDownEvents} // default false
              hasModal={configurationState.hasModal} // default false
              controllersOnHover={configurationState.controllersOnHover} // default false

              // optional properties that you can't change in this mode:
              // transitionOpacity={false}
              // carouselIndicatorsImages = {false}
            ></Carousel>
            <Configuration
              configurationState={configurationState}
              handleChange={handleChange}
              hasControls={true}
            ></Configuration>
          </div>
        </div>
      </div>
    </>
  );
}
