import React from "react";
import Svg, { Path } from "react-native-svg";

export default function SvgLeftArrowIcon({ fill }) {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M17.003 7.355H3.559l4.115-5.343c.192-.25.285-.573.257-.898a1.26 1.26 0 0 0-.405-.83 1.079 1.079 0 0 0-.83-.279c-.299.03-.575.187-.768.438L.261 7.796c-.038.059-.073.12-.102.184 0 .061 0 .098-.08.16-.051.14-.078.29-.079.44.001.152.028.301.08.442 0 .061 0 .098.079.16.03.063.064.125.102.183l5.667 7.354c.107.138.24.25.391.326.15.076.315.115.482.115.265 0 .521-.1.725-.282.115-.103.21-.23.28-.372a1.3 1.3 0 0 0 .08-.935 1.259 1.259 0 0 0-.212-.421L3.559 9.806h13.444c.3 0 .588-.129.801-.359.213-.23.332-.541.332-.866 0-.325-.12-.637-.332-.867-.213-.23-.5-.359-.801-.359Z"
        fill={fill}
      />
    </Svg>
  );
}
