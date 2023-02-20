import Carousel from "@/components/Carousel";
import Configuration from "@/components/Configuration";
import useConfiguration from "@/hooks/useConfiguration";

export default function SingleIndicators() {
  const { configurationState, handleChange } = useConfiguration<false>({
    hasThumbnails: false,
  });
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <h1 className="h3 text-center">Single Items with Indicators</h1>
            <Carousel<"single-indicators">
              items={configurationState.items}
              // properties that you must set
              carouselIndicators={true}
              // optional properties:
              transitionOpacity={configurationState.transitionOpacity} // default false
              bindKeyDownEvents={configurationState.bindKeyDownEvents} // default false
              hasModal={configurationState.hasModal} // default false
              // optional properties that you can't change in this mode:
              // itemsPerPage={1}
              // itemsMarginRem={0}
              // carouselControls={false}
              // carouselIndicatorsImages={true}
              // controllersOnHover={false}
              // lessCarouselIndicators={false}
            ></Carousel>
            <Configuration
              configurationState={configurationState}
              handleChange={handleChange}
              hasFade={true}
            ></Configuration>
          </div>
        </div>
      </div>
    </>
  );
}
