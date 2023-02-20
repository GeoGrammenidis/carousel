import Carousel from "@/components/Carousel";
import Configuration from "@/components/Configuration";
import useConfiguration from "@/hooks/useConfiguration";

export default function Multiple() {
  const { configurationState, handleChange } = useConfiguration<false>({
    hasThumbnails: false,
  });
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <h1 className="h3 text-center">Multiple Items</h1>
            <Carousel<"multiple">
              items={configurationState.items}
              // properties that you must set
              itemsPerPage={2}
              itemsMarginRem={1}
              // optional properties:
              bindKeyDownEvents={configurationState.bindKeyDownEvents} // default false
              hasModal={configurationState.hasModal} // default false

              // optional properties that you can't change in this mode:
              // transitionOpacity={false}
              // carouselControls={false}
              // controllersOnHover={false}
              // carouselIndicators = {false}
              // carouselIndicatorsImages = {false}
              // lessCarouselIndicators = {false}
            ></Carousel>
            <Configuration
              configurationState={configurationState}
              handleChange={handleChange}
            ></Configuration>
          </div>
        </div>
      </div>
    </>
  );
}
