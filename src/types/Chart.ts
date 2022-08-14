export type Spacing = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type ChartProps = {
  data: any[];
  width?: number;
  height?: number;
  margin?: Spacing;
};
