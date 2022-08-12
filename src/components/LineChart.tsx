import React from "react";
import { Dimensions } from "react-native";

import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import { curveBasis, extent, line, scaleLinear, scaleTime } from "d3";
import { ChartProps } from "../types/Chart";

export type DateTemperaturePoint = {
  date: string;
  temperature: number;
};

const dimensions = Dimensions.get("window");

export const LineChart = ({
  data,
  width = dimensions.width,
  height = 300,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
}: ChartProps) => {
  const xScale = scaleTime()
    .domain(extent(data.map((d) => new Date(d.date))))
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
    .domain(extent(data.map((d) => d.temperature)))
    .range([margin.top, height - margin.bottom]);

  const curvedLine = line<DateTemperaturePoint>()
    .x((d) => xScale(new Date(d.date)))
    .y((d) => yScale(d.temperature))
    .curve(curveBasis)(data);

  const skPath = Skia.Path.MakeFromSVGString(curvedLine);

  return (
    <Canvas style={{ height, width }}>
      <Path style="stroke" path={skPath} strokeWidth={4} color="#6231ff" />
    </Canvas>
  );
};
