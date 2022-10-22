import { ComponentType } from "react";
import { LineChartScreen, BarChartScreen, PieChartScreen } from "./ChartScreen";
import HomeScreen from "./HomeScreen";
import ButtonsScreen from "./ButtonsScreen";

export type RouteName =
  | "HOME"
  | "LINE_CHART"
  | "BAR_CHART"
  | "PIE_CHART"
  | "BUTTONS";

type Route = {
  title: string;
  name: RouteName;
  component: ComponentType;
};

const routes: Route[] = [
  { title: "Home 🏡", name: "HOME", component: HomeScreen },
  {
    title: "Line chart 📈",
    name: "LINE_CHART",
    component: LineChartScreen,
  },
  {
    title: "Bar chart 📊",
    name: "BAR_CHART",
    component: BarChartScreen,
  },
  {
    title: "Pie chart 🍰",
    name: "PIE_CHART",
    component: PieChartScreen,
  },
  {
    title: "Buttons 💡",
    name: "BUTTONS",
    component: ButtonsScreen,
  },
];

export default routes;
