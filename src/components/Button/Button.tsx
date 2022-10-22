import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, * as Reanimated from "react-native-reanimated";

export type ButtonProps = {};

const { width, height } = Dimensions.get("window");

const Button = ({}: ButtonProps) => {
  const pressed = Reanimated.useSharedValue(false);
  const offset = Reanimated.useSharedValue({ x: 0, y: 0, scale: 1 });
  const x = Reanimated.useSharedValue(0);
  const y = Reanimated.useSharedValue(0);
  const scale = Reanimated.useSharedValue(1);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onStart(() => {
      offset.value = { ...offset.value, x: x.value, y: y.value };
    })
    .onUpdate(({ translationX, translationY }) => {
      x.value = offset.value.x + translationX;
      y.value = offset.value.y + translationY;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const pinch = Gesture.Pinch()
    .onBegin(() => {
      pressed.value = true;
    })
    .onStart(() => {
      offset.value = { ...offset.value, scale: scale.value };
    })
    .onUpdate((e) => {
      scale.value = e.scale * 0.5 + offset.value.scale;
    });

  const uas = Reanimated.useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: x.value },
      { translateY: y.value },
    ],
  }));

  return (
    <GestureDetector gesture={Gesture.Simultaneous(pan, pinch)}>
      <Animated.View style={[styles.ball, uas]} />
    </GestureDetector>
  );
};

export default Button;

const styles = StyleSheet.create({
  ball: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#001972",
  },
});
