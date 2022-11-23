import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function SvgMarkIcon() {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M10.646 1h-6.89C2.234 1 1 2.194 1 3.667v6.666C1 11.806 2.234 13 3.756 13h6.89c1.521 0 2.755-1.194 2.755-2.667V3.667C13.401 2.194 12.168 1 10.646 1Z"
        stroke="#646464"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m5.135 7 1.55 1.334 2.584-2.667"
        stroke="#646464"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
