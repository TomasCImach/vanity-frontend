import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <g transform="translate(0.000000,93.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M335 727 l-160 -92 -3 -190 -2 -190 169 -98 170 -97 163 94 163 93 3
195 2 195 -160 92 c-88 50 -166 91 -172 91 -7 0 -85 -42 -173 -93z m129 -269
c23 -59 43 -108 46 -108 3 0 24 48 47 108 32 84 46 108 62 110 12 2 21 0 20
-5 0 -4 -24 -64 -53 -133 -45 -109 -55 -125 -75 -125 -20 0 -30 17 -77 130
-30 72 -54 131 -54 133 0 2 10 2 22 0 17 -2 29 -24 62 -110z"/>
</g>
  );
};

export default Icon;
