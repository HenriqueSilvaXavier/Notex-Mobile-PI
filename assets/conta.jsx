import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ContaSVG(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.8}
        d="M14.21 11.09a6 6 0 10-7.42 0 10 10 0 00-6.22 8.18 1.006 1.006 0 102 .22 8 8 0 0115.9 0 1 1 0 001 .89h.11a1 1 0 00.88-1.1 9.999 9.999 0 00-6.25-8.19zm-3.71-.71a4 4 0 110-8 4 4 0 010 8z"
        fill="#3C3C3C"
      />
    </Svg>
  )
}

export default ContaSVG;
