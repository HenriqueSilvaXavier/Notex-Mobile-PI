import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Voltar(props) {
  return (
    <Svg
      width={34}
      height={35}
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.137 23.687L10.342 17.5m0 0l5.795-6.187M10.342 17.5h12.732m7.45-8.75v17.5c0 2.9-2.258 5.25-5.045 5.25H8.66c-2.787 0-5.046-2.35-5.046-5.25V8.75c0-2.9 2.26-5.25 5.046-5.25h16.819c2.787 0 5.046 2.35 5.046 5.25z"
        stroke="#8F98FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Voltar
