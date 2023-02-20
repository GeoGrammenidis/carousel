import React from "react";
// TODO: types here can improve.
type useEventListenerProps = {
  event: string;
  listener: any;
  arrayOfElementRef?: React.MutableRefObject<any>[];
  trigger?: boolean;
  deps?: any[];
  eventExists?: boolean;
  windowElement?: boolean;
};

export default function useEventListener({
  event, // string
  listener, // function.
  arrayOfElementRef = [],
  trigger = false,
  deps = [],
  eventExists = true,
  windowElement = false,
}: useEventListenerProps) {
  React.useEffect(() => {
    if (eventExists) {
      let arrayOfElements: (Document | Element | Window)[] = [document];
      if (arrayOfElementRef.length) {
        arrayOfElements = arrayOfElementRef.map((x) => x.current);
      }
      if (windowElement) {
        arrayOfElements = [window];
      }
      arrayOfElements.forEach((element: Document | Element | Window) => {
        if (element != null) {
          element.addEventListener(event, listener);
          trigger && element.dispatchEvent(new Event(event));
        }
      });

      return () => {
        arrayOfElements.forEach((element: Document | Element | Window) => {
          if (element != null) {
            element.removeEventListener(event, listener);
          }
        });
      };
    }
  }, [...deps, eventExists]);
}
