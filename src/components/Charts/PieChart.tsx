import { Canvas, Circle } from "@shopify/react-native-skia";
import { ChartProps } from "./types";

const PieChart = ({ width, height, data, margin }: ChartProps) => {
  const radius = Math.min(width, height) / 2;

  return (
    <Canvas style={{ width, height }}>
      {data.map((d, i) => (
        <Circle key={i} cx={0} cy={0} r={radius} color="#000" />
      ))}
    </Canvas>
  );
};

export default PieChart;
