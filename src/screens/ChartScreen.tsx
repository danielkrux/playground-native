import React from "react";
import { LineChart } from "../components/LineChart";
import { BarChart } from "../components/BarChart";
import data from "../../data/temperature.json";
import data2 from "../../data/bar-chart.json";

export interface ChartScreenProps {}

const ChartScreen = ({}: ChartScreenProps) => {
  return (
    <>
      <LineChart data={data} />
      <BarChart data={data2} />
    </>
  );
};

export default ChartScreen;
