import Carousel from "@/components/Carousel";
import Configuration from "@/components/Configuration";
import useConfiguration from "@/hooks/useConfiguration";
import React from "react";

export default function Single() {
  const { configurationState, handleChange } = useConfiguration<true>({
    hasThumbnails: true,
  });
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <h1 className="h3 text-center">Single Items</h1>
            <Carousel<"single">
              items={configurationState.items}
              // optional properties:
              transitionOpacity={configurationState.transitionOpacity} // default false
              bindKeyDownEvents={configurationState.bindKeyDownEvents} // default false
              hasModal={configurationState.hasModal} // default false

              // optional properties that you can't change in this mode:
              // itemsPerPage={1}
              // itemsMarginRem = {0}
              // carouselControls = {false}
              // controllersOnHover= {false}
              // carouselIndicators = {false}
              // carouselIndicatorsImages = {false}
              // lessCarouselIndicators = {false}
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
