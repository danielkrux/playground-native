import React from "react";
import { View } from "react-native";
import { Button } from "../components/Button";

export type ButtonsScreenProps = {};

const ButtonsScreen = ({}: ButtonsScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button />
    </View>
  );
};

export default ButtonsScreen;
