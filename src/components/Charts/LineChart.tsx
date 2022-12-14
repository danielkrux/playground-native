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
import { curveBasis, extent } from "d3";
import { line as lineFactory } from "@visx/shape";
import { scaleLinear, scaleTime } from "@visx/scale";

import { ChartProps } from "./types";
import { getYForX } from "./math";
import useTouchHandler from "./useTouchHandler";

import Axes from "./Axes";

const dimensions = Dimensions.get("window");

export const LineChart = ({
  data,
  width = dimensions.width - 50,
  height = 300,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
}: ChartProps) => {
  const TICK_SIZE = 10;

  const font = useFont(
    require("../../assets/fonts/OpenSans-Regular.ttf"),
    16,
    (e) => console.error("Could not load font", e)
  );

  const xScale = scaleTime({
    domain: extent(data.map((d) => new Date(d.date))),
    range: [margin.left, width - margin.right],
  });

  const yScale = scaleLinear({
    domain: extent(data.map((d) => d.temperature)),
    range: [height - margin.bottom, margin.top],
  });

  const line = lineFactory<any>({
    x: (d) => xScale(new Date(d.date)),
    y: (d) => yScale(d.temperature),
    curve: curveBasis,
  });
  const linePath = line(data);

  const skPath = Skia.Path.MakeFromSVGString(linePath);

  const x = useValue(margin.left);
  const y = useComputedValue(() => getYForX(skPath.toCmds(), x.current), [x, skPath]);
  const label = useComputedValue(() => String(yScale.invert(y.current)), [y]);

  const touchHandler = useTouchHandler(x, width, margin);

  if (!font) return null;

  return (
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
  );
};
