import React from "react";
import { ScrollView } from "react-native";
import { HomeScreenButton } from "../components/Home/HomeScreenButton";

const HomeScreen = () => {
  return (
    <ScrollView>
      <HomeScreenButton title="Charts" description="Chart examples" route="chart" />
    </ScrollView>
  );
};

export default HomeScreen;
