import React from "react";
import { ScrollView } from "react-native";
import { HomeScreenButton } from "../components/Home/HomeScreenButton";

const HomeScreen = () => {
  return (
    <ScrollView>
      <HomeScreenButton title="Line chart" route="LINE_CHART" />
      <HomeScreenButton title="Bar chart" route="BAR_CHART" />
      <HomeScreenButton title="Pie chart" route="PIE_CHART" />
      <HomeScreenButton title="Buttons" route="BUTTONS" />
    </ScrollView>
  );
};

export default HomeScreen;
