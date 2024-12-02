import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChapeuDeBecaSVG(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.158 10.188l11.375-6.5 11.375 6.5-11.375 6.5-11.375-6.5zM6.22 12.626v6.5l7.313 4.062m0 0l7.313-4.062v-6.5m-7.313 10.562v-6.5m11.375 2.438v-8.938"
        stroke="#5162AC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ChapeuDeBecaSVG;
