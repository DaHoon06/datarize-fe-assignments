import { CSSProperties, ReactElement } from "react";
import { BarLoader } from "react-spinners";

const override: CSSProperties = {
  display: "inline-block",
};

const color = "#646464";

export const Spinner = (): ReactElement => {
  return (
      <BarLoader
        color={color}
        loading={true}
        cssOverride={override}
        speedMultiplier={0.8}
        aria-label="Loading Spinner"
      />
  );
};
