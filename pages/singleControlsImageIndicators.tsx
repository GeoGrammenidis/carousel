import Carousel from "@/components/Carousel";
import Configuration from "@/components/Configuration";
import useConfiguration from "@/hooks/useConfiguration";

export default function SingleControlsImageIndicators() {
  const { configurationState, handleChange } = useConfiguration<true>({
    hasThumbnails: true,
  });
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <h1 className="h3 text-center">
              Single Items with Controls &amp; Image Indicators
            </h1>
            <Carousel<"single-controls-imageIndicators">
              items={configurationState.items}
              // properties that you must set
              carouselControls={true}
              carouselIndicators={true}
              carouselIndicatorsImages={true}
              // optional properties:
              transitionOpacity={configurationState.transitionOpacity} // default false
              bindKeyDownEvents={configurationState.bindKeyDownEvents} // default false
              hasModal={configurationState.hasModal} // default false
              controllersOnHover={configurationState.controllersOnHover} // default false

              // optional properties that you can't change in this mode:
              // itemsPerPage={1}
              // itemsMarginRem = {0}
              // lessCarouselIndicators = {false}
            ></Carousel>
            <Configuration
              configurationState={configurationState}
              handleChange={handleChange}
              hasControls={true}
              hasFade={true}
            ></Configuration>
          </div>
        </div>
      </div>
    </>
  );
}
