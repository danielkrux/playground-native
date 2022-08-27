import { Canvas, Group, Path, Skia } from "@shopify/react-native-skia";
import { Dimensions } from "react-native";
import { ChartProps } from "./types";
import { arc, pie as pieShape } from "@visx/shape";

const dimensions = Dimensions.get("window");

const colors = ["red", "green", "yellow", "orange", "blue"];

const PieChart = ({
  width = 300,
  height = dimensions.height - 140,
  data,
}: ChartProps) => {
  const radius = Math.min(width, height) / 2;
  const centerY = height / 2;
  const centerX = width / 2;

  const path = arc({
    innerRadius: 50,
    outerRadius: radius,
    cornerRadius: 0,
    padRadius: 10,
    padAngle: 0.25,
  });

  const pie = pieShape<any>({
    value: (d) => d.value,
  });

  const arcs = pie(data);

  return (
    <Canvas style={{ width, height }}>
      <Group transform={[{ translateX: centerX }, { translateY: centerY }]}>
        {arcs.map((arc, i) => (
          <Path
            key={i}
            path={Skia.Path.MakeFromSVGString(path(arc))}
            color={colors[i]}
          />
        ))}
      </Group>
    </Canvas>
  );
};

export default PieChart;
