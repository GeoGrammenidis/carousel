import Carousel from "@/components/Carousel";
import React from "react";

export default function Playground() {
  //  "single" | "single-imageIndicators" | "single-indicators" | "single-controls" |
  //  "single-controls-indicators" | "single-controls-imageIndicators" |
  //  "multiple" | "multiple-indicators" | "multiple-lessIndicators" | "multiple-controls" |
  //  "multiple-controls-indicators" | "multiple-controls-lessIndicators"
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <h1 className="h3 text-center">Single Items</h1>
            {/* jsx generic autocomplete doesn't show because of editors bug */}
            <Carousel<"single-imageIndicators">
              items={[
                { type: "image", id: 1, src: "asd.jpg", thumbnail: "asd.jpg" },
              ]}
              carouselIndicators
              carouselIndicatorsImages
            ></Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
