import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 1281 199" {...props}>
      <g transform="translate(0.000000,210.000000) scale(0.250000,-0.2500000)" fill="#000000" stroke="none">
        <path d="M335 727 l-160 -92 -3 -190 -2 -190 169 -98 170 -97 163 94 163 93 3
195 2 195 -160 92 c-88 50 -166 91 -172 91 -7 0 -85 -42 -173 -93z m129 -269
c23 -59 43 -108 46 -108 3 0 24 48 47 108 32 84 46 108 62 110 12 2 21 0 20
-5 0 -4 -24 -64 -53 -133 -45 -109 -55 -125 -75 -125 -20 0 -30 17 -77 130
-30 72 -54 131 -54 133 0 2 10 2 22 0 17 -2 29 -24 62 -110z" fill="#981c1c" />
      </g>
      <text x="250" y="150" font-family="Arial Black" font-size="150">VanitySwap</text>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
