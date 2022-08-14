import * as path from "svg-path-properties";

export function findY(p: string, x: number) {
  const properties = path.svgPathProperties(p);
  var pathLength = properties.getTotalLength();
  var start = 0;
  var end = pathLength;
  var target = (start + end) / 2;

  // Ensure that x is within the range of the path
  x = Math.max(x, properties.getPointAtLength(0).x);
  x = Math.min(x, properties.getPointAtLength(pathLength).x);

  // Walk along the path using binary search
  // to locate the point with the supplied x value
  while (target >= start && target <= pathLength) {
    var pos = properties.getPointAtLength(target);

    // use a threshold instead of strict equality
    // to handle javascript floating point precision
    if (Math.abs(pos.x - x) < 0.001) {
      return pos.y;
    } else if (pos.x > x) {
      end = target;
    } else {
      start = target;
    }
    target = (start + end) / 2;
  }
}
