import React from "react";
import { Group, Line, vec } from "@shopify/react-native-skia";
import { ScaleLinear, ScaleTime } from "d3";

import { Spacing } from "./types";

export type AxesProps = {
  xScale: ScaleTime<any, any, any> | ScaleLinear<any, any, any>;
  yScale: ScaleTime<any, any, any> | ScaleLinear<any, any, any>;
  height: number;
  width: number;
  margin: Spacing;
  tickSize: number;
  showTickLines?: boolean;
};

const Axes = ({
  xScale,
  yScale,
  height,
  width,
  margin,
  tickSize,
  showTickLines = false,
}: AxesProps) => {
  const fontSize = 12;

  // const font = useFont(
  //   require("../../assets/fonts/OpenSans-Regular.ttf"),
  //   fontSize
  // );

  // const fontDimensions = font?.getMetrics();

  const xTicks = xScale.ticks();
  const yTicks = yScale.ticks();

  // if (font === null) return null;

  return (
    <>
      {/* X Axis */}
      <Line
        p1={vec(tickSize, height - margin.bottom)}
        p2={vec(width - margin.right, height - margin.bottom)}
        color="#6231ff"
        strokeWidth={2}
      />
      {xTicks.map((tick, i) => (
        <Group key={i}>
          {showTickLines && (
            <Line
              p1={vec(xScale(tick), height - margin.bottom)}
              p2={vec(xScale(tick), height - tickSize)}
              color="#6231ff"
              strokeWidth={1}
            />
          )}
          {/* <Text
            x={xScale(tick)}
            y={fontSize}
            font={font}
            text={new Date(tick).toString()}
          /> */}
        </Group>
      ))}

      {/* Y Axis */}
      <Line
        p1={vec(tickSize, 0)}
        p2={vec(tickSize, height - margin.bottom)}
        color="#6231ff"
        strokeWidth={2}
      />
      {yTicks.map((tick, i) => (
        <Group key={i}>
          {showTickLines && (
            <Line
              p1={vec(tickSize, yScale(tick))}
              p2={vec(0, yScale(tick))}
              color="#6231ff"
              strokeWidth={1}
            />
          )}
          {/* <Text x={0} y={yScale(tick)} font={font} text={String(tick)} /> */}
        </Group>
      ))}
    </>
  );
};

export default Axes;
