import type { SkiaMutableValue } from "@shopify/react-native-skia";
import {
  clamp,
  useValue,
  useTouchHandler as useSkiaTouchHandler,
} from "@shopify/react-native-skia";
import { Spacing } from "../../types/Chart";

 const useTouchHandler = (
  x: SkiaMutableValue<number>,
  width: number,
  margin: Spacing,
) => {
  const offsetX = useValue(0);
  const onTouch = useSkiaTouchHandler({
    onStart: (pos) => {
      offsetX.current = x.current - pos.x;
    },
    onActive: (pos) => {
      x.current = clamp(
        offsetX.current + pos.x,
        margin.left,
        width - margin.right
      );
    },
  });
  return onTouch;
};

export default useTouchHandler
