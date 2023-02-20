import { CarouselItem } from "@/components/Carousel";
import React from "react";

export type useConfigurationHandleChange = (
  params:
    | {
        key:
          | "transitionOpacity"
          | "bindKeyDownEvents"
          | "hasModal"
          | "controllersOnHover";
        numberOfItems?: never;
      }
    | {
        key: "numberOfItems";
        numberOfItems: number;
      }
) => void;

export default function useConfiguration<HasThumbnails = false>({
  transitionOpacity = false,
  bindKeyDownEvents = false,
  hasModal = false,
  controllersOnHover = false,
  numberOfItems = 9,
  hasThumbnails,
}: {
  transitionOpacity?: boolean;
  bindKeyDownEvents?: boolean;
  hasModal?: boolean;
  controllersOnHover?: boolean;
  numberOfItems?: number;
  hasThumbnails: HasThumbnails;
}) {
  var thumbnailItems: [CarouselItem<true>, ...CarouselItem<true>[]] = [
    {
      id: 1,
      type: "image" as const,
      src: `/imgs/img${1}.jpeg` as CarouselImage,
      thumbnail: `/imgs/img${1}_600x400.jpeg` as CarouselImage,
    },
    ...Array(24)
      .fill(0)
      .map(
        (_, i): CarouselItem<true> => ({
          id: i + 2,
          type: "image" as const,
          src: `/imgs/img${i + 2}.jpeg` as CarouselImage,
          thumbnail: `/imgs/img${i + 2}_600x400.jpeg` as CarouselImage,
        })
      ),
  ];
  var simpleItems: [CarouselItem<false>, ...CarouselItem<false>[]] = [
    {
      id: 1,
      type: "image" as const,
      src: `/imgs/img${1}.jpeg` as CarouselImage,
    },
    ...Array(25)
      .fill(0)
      .map((x, i) => ({
        id: i + 2,
        type: "image" as const,
        src: `/imgs/img${i + 2}.jpeg` as CarouselImage,
      })),
  ];
  const [configurationState, setState] = React.useState<{
    transitionOpacity: boolean;
    bindKeyDownEvents: boolean;
    hasModal: boolean;
    controllersOnHover: boolean;
    numberOfItems: number;
    hasThumbnails: HasThumbnails;
    items: [CarouselItem<HasThumbnails>, ...CarouselItem<HasThumbnails>[]];
  }>({
    transitionOpacity,
    bindKeyDownEvents,
    hasModal,
    controllersOnHover,
    numberOfItems,
    hasThumbnails,
    items: hasThumbnails
      ? [thumbnailItems[0], ...thumbnailItems.slice(1, numberOfItems)]
      : [simpleItems[0], ...simpleItems.slice(1, numberOfItems)],
  });

  var handleChange: useConfigurationHandleChange = ({ key, numberOfItems }) => {
    if (key == "numberOfItems") {
      setState((state) => {
        if (numberOfItems) {
          state.items = hasThumbnails
            ? [thumbnailItems[0], ...thumbnailItems.slice(1, numberOfItems)]
            : [simpleItems[0], ...simpleItems.slice(1, numberOfItems)];
          state.numberOfItems = numberOfItems;
        }
        return { ...state };
      });
    } else {
      setState((state) => {
        state[key] = !state[key];
        return { ...state };
      });
    }
  };
  return { configurationState, handleChange };
}
