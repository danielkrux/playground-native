import React from "react";
import { View } from "react-native";

import { LineChart } from "../components/Charts/LineChart";
import { BarChart } from "../components/Charts/BarChart";
import data from "../../data/temperature.json";
import data2 from "../../data/bar-chart.json";

export interface ChartScreenProps {}

const ChartScreen = ({}: ChartScreenProps) => {
  return (
    <View style={{ alignItems: "center", paddingTop: 20 }}>
      <LineChart data={data} />
      <BarChart data={data2} />
    </View>
  );
};

export default ChartScreen;
