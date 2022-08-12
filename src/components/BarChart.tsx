import React from "react";
import { Dimensions } from "react-native";
import { Canvas, Group, RoundedRect } from "@shopify/react-native-skia";
import { max, scaleBand, scaleLinear } from "d3";
import { Margin } from "../types/Chart";

export type ChartProps = {
  data: any[];
  width?: number;
  height?: number;
  margin?: Margin;
};

const dimensions = Dimensions.get("window");

export const BarChart = ({
  data,
  width = dimensions.width,
  height = 300,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
}: ChartProps) => {
  const xScale = scaleBand()
    .domain(data.map((d) => d.year))
    .range([margin.left, width - margin.right])
    .padding(0.5);

  const yScale = scaleLinear()
    .domain([0, max(data.map((d) => d.value))])
    .range([margin.top, height - margin.bottom]);

  const barWidth = xScale.bandwidth();

  return (
    <Canvas style={{ height, width }}>
      <Group>
        {data.map((p, i) => (
          <RoundedRect
            key={i}
            x={xScale(p.year)}
            y={yScale(p.value)}
            width={barWidth}
            height={height - yScale(p.value)}
            color="#6231ff"
            r={5}
          />
        ))}
      </Group>
    </Canvas>
  );
};
