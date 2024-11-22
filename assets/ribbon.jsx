import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

function RibbonSVG(props) {
  return (
    <Svg
      width={21}
      height={22}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_1_709)"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10.188 12.405c2.76 0 5-2.44 5-5.452 0-3.01-2.24-5.451-5-5.451-2.762 0-5 2.44-5 5.451 0 3.011 2.238 5.452 5 5.452z" />
        <Path d="M5.799 9.842l-3.737 7.333 3.393-.017c.11-.001.216.03.31.088a.653.653 0 01.23.244l1.692 3.093 3.45-8.277M14.505 9.68l3.807 7.495-3.393-.018a.585.585 0 00-.31.088.654.654 0 00-.23.245l-1.691 3.093-2.5-5.997M10.188 9.68c1.38 0 2.5-1.221 2.5-2.727 0-1.505-1.12-2.726-2.5-2.726-1.381 0-2.5 1.22-2.5 2.726s1.119 2.726 2.5 2.726z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_709">
          <Rect
            x={0.1875}
            y={0.13855}
            width={20}
            height={21.8072}
            rx={8}
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default RibbonSVG;