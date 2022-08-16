import React from "react";
import { View } from "react-native";

import { LineChart } from "../components/Charts/LineChart";
import { BarChart } from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import data from "../../data/temperature.json";
import data2 from "../../data/bar-chart.json";
import data3 from "../../data/pie-chart.json";

export interface ChartScreenProps {}

const LineChartScreen = ({}: ChartScreenProps) => {
  return (
    <View style={{ alignItems: "center", paddingTop: 20 }}>
      <LineChart data={data} />
    </View>
  );
};

const BarChartScreen = ({}: ChartScreenProps) => {
  return (
    <View style={{ alignItems: "center", paddingTop: 20 }}>
      <BarChart data={data2} />
    </View>
  );
};

const PieChartScreen = ({}: ChartScreenProps) => {
  return (
    <View style={{ alignItems: "center", paddingTop: 20 }}>
      <PieChart data={data3} />
    </View>
  );
};

export { LineChartScreen, BarChartScreen, PieChartScreen };
