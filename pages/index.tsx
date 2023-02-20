import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-8 m-auto">
            <h1 className="h3 text-center">Custom Carouels Project</h1>
            <h2 className="h4">Structure:</h2>
            <Carousel<"single">
              items={[{ type: "image", id: 1, src: "/imgs/structure.jpg" }]}
            ></Carousel>
            <h2 className="h4">Animations &amp; transitions</h2>
            <h3 className="h5">Transition transform</h3>
            <Carousel<"single">
              items={[
                {
                  type: "image",
                  id: 1,
                  src: "/imgs/transitioning_transform.jpg",
                },
              ]}
            ></Carousel>
            <h3 className="h5">Fade animation</h3>
            <Carousel<"single">
              items={[
                { type: "image", id: 1, src: "/imgs/fade_animation.jpg" },
              ]}
            ></Carousel>
            <h2 className="h4">Points of interest in code:</h2>
            <ul>
              <li>Components:</li>
              <ul>
                <li>Carousel Modes</li>
                <li>
                  Properties being passed down as arguments to children
                  components (which are required properties for them){" "}
                  <span className="text-muted small">
                    NOTE: don&apos;t forget to mention alternative way for type
                    narrowing.
                  </span>
                </li>
                <li>type Required</li>
                <li>A useEffect in CarouselModal component</li>
              </ul>
              <li>Custom Hooks:</li>
              <ul>
                <li>Reducer function in useCarousel hook</li>
                <li>
                  how events are added &amp; how are cleaned up with the help of
                  useEventListener
                </li>
                <li>the use of tuple in useConfiguration hook</li>
              </ul>
              <li>
                Dealing with edge cases such as 1 item in carousel or with Mode
                multiple-lessIndicators not perfect number of items.
              </li>
              <li>we can always play on playground</li>
              <li>all SCSS files</li>
            </ul>
            <h2 className="h4">Possible imrpovements:</h2>
            <ul>
              <li>
                Add to demo configuration a select to control the number of
                items per page for modes with multiple items per page.
              </li>
              <li>ClassNames, variable &amp; file names could improve</li>
              <li>Add session storage/Local storage/cache</li>
              <li>Replace bootstrap modal with custom one.</li>
              <li>Remove any bootstrap class</li>
              <li>CSS cleanup &amp; add theming for the carousel.</li>
              <li>More commits with descriptive messages.</li>
              <li>Loading/error/warning states.</li>
              <li>
                Check accessiblity in depth and fix any possible issues (like
                letting adding alternative texts for the images)
              </li>
              <li>
                Finish the CarouselItem component with other option for type of
                items to be different than images.
              </li>
              <li>Impliment action ACTION.reset for the reducer</li>
              <li>Clean up code</li>
              <li>Make it a PWA</li>
              <li>Use different images based on the screen width/devices.</li>
              <li>Unit testing</li>
              <li>E2E testing</li>
              <li>Add README.md file with decent documentation.</li>
              <li>Add comments wherever is needed.</li>
              <li>
                Maybe the project could be recreated with a simple Class
                Carousel &amp; extensions that add more features.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
