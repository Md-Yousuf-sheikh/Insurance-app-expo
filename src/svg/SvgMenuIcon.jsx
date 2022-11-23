import Svg, { Path } from "react-native-svg";
import React from "react";

export default function SvgMenuIcon({ fill }) {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M0 0h20v2.5H0V0Zm0 6.25h20v2.5H0v-2.5Zm0 6.25h20V15H0v-2.5Z"
        fill={fill}
      />
    </Svg>
  );
}
