import React from "react";
import { Dimensions } from "react-native";
import {
  Canvas,
  Circle,
  Path,
  Skia,
  Text,
  useComputedValue,
  useFont,
  useValue,
} from "@shopify/react-native-skia";
import { curveBasis, extent, line, scaleLinear, scaleTime } from "d3";

import { ChartProps } from "./types";

import Axes from "./Axes";
import { findY } from "./utils";
import useTouchHandler from "./useTouchHandler";

const openSans = require("../../../assets/fonts/OpenSans-Regular.ttf");

export type DateTemperaturePoint = {
  date: string;
  temperature: number;
};

const dimensions = Dimensions.get("window");

export const LineChart = ({
  data,
  width = dimensions.width - 50,
  height = 300,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
}: ChartProps) => {
  const TICK_SIZE = 10;

  const font = useFont(openSans, 16, (e) =>
    console.error("Could not load font", e)
  );

  const xScale = scaleTime()
    .domain(extent(data.map((d) => new Date(d.date))))
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
    .domain(extent(data.map((d) => d.temperature)))
    .range([height - margin.bottom, margin.top]);

  const curvedLine = line<DateTemperaturePoint>()
    .x((d) => xScale(new Date(d.date)))
    .y((d) => yScale(d.temperature))
    .curve(curveBasis)(data);

  const skPath = Skia.Path.MakeFromSVGString(curvedLine);

  const x = useValue(margin.left);
  const y = useComputedValue(() => findY(curvedLine, x.current), [x, skPath]);
  const label = useComputedValue(() => String(yScale.invert(y.current)), [y]);

  const touchHandler = useTouchHandler(x, width, margin);

  if (!font) return null;

  return (
    <>
      <Canvas style={{ height, width }} onTouch={touchHandler}>
        <Path style="stroke" path={skPath} strokeWidth={2} color="#6231ff" />
        <Axes
          xScale={xScale}
          height={height}
          width={width}
          margin={margin}
          yScale={yScale}
          tickSize={TICK_SIZE}
        />
        <Circle cx={x} cy={y} r={10} color="red" />
        <Text y={height} font={font} text={label} />
      </Canvas>
    </>
  );
};
