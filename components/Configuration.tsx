import { useConfigurationHandleChange } from "@/hooks/useConfiguration";
import React from "react";

export default function Configuration({
  configurationState,
  handleChange,
  hasControls = false,
  hasFade = false,
}: {
  configurationState: {
    transitionOpacity: boolean;
    hasModal: boolean;
    bindKeyDownEvents: boolean;
    controllersOnHover: boolean;
    numberOfItems: number;
    items: any[];
  };
  handleChange: useConfigurationHandleChange;
  hasControls?: boolean;
  hasFade?: boolean;
}) {
  const {
    transitionOpacity,
    hasModal,
    bindKeyDownEvents,
    controllersOnHover,
    numberOfItems,
  } = configurationState;

  return (
    <>
      <form>
        <div className="form-floating my-3">
          <select
            className="form-select"
            id="items"
            onChange={(e) => {
              handleChange({
                key: "numberOfItems",
                numberOfItems: +e.target.value,
              });
            }}
            value={`${numberOfItems}`}
          >
            {Array(25)
              .fill(0)
              .map((item, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
          </select>
          <label htmlFor="items">Number of items</label>
        </div>
        {hasFade && (
          <div className="form-floating my-3">
            <select
              className="form-select"
              id="transition-opacity"
              onChange={() => handleChange({ key: "transitionOpacity" })}
              value={transitionOpacity ? "true" : "false"}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <label htmlFor="transition-opacity">Fade</label>
          </div>
        )}
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="has-modal"
            onChange={() => handleChange({ key: "hasModal" })}
            value={hasModal ? "true" : "false"}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label htmlFor="has-modal">Has a modal</label>
        </div>

        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="bind-keys"
            onChange={() => handleChange({ key: "bindKeyDownEvents" })}
            value={bindKeyDownEvents ? "true" : "false"}
          >
            <option value="true selected">True</option>
            <option value="false">False</option>
          </select>
          <label htmlFor="bind-keys">
            Binds keys: &apos;left-arrow&apos;, &apos;right-arrow&apos;
          </label>
        </div>
        {hasControls && (
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="controls-on-hover"
              onChange={() => handleChange({ key: "controllersOnHover" })}
              value={controllersOnHover ? "true" : "false"}
            >
              <option value="true selected">True</option>
              <option value="false">False</option>
            </select>
            <label htmlFor="controls-on-hover">Controls on Hover</label>
          </div>
        )}
      </form>
    </>
  );
}
