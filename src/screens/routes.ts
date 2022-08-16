import { ComponentType } from "react";
import { LineChartScreen, BarChartScreen, PieChartScreen } from "./ChartScreen";
import HomeScreen from "./HomeScreen";

export type RouteName = "HOME" | "LINE_CHART" | "BAR_CHART" | "PIE_CHART";

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
];

export default routes;
