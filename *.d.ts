type Prettify<T> = { [K in keyof T]: T[K] } & {};
type CarouselImages = `${string}.${"jpeg" | "jpg" | "png"}`[];
type CarouselImage = `${string}.${"jpeg" | "jpg" | "png"}`;
