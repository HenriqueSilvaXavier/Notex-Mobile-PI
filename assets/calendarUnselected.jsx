import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.8}
        d="M16.5 14.38h-8a1 1 0 100 2h8a1 1 0 000-2zm0-4h-6a1 1 0 100 2h6a1 1 0 000-2zm4-6h-3v-1a1 1 0 00-2 0v1h-2v-1a1 1 0 00-2 0v1h-2v-1a1 1 0 00-2 0v1h-3a1 1 0 00-1 1v14a3 3 0 003 3h12a3 3 0 003-3v-14a1 1 0 00-1-1zm-1 15a1 1 0 01-1 1h-12a1 1 0 01-1-1v-13h2v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1h2v13z"
        fill="#3C3C3C"
      />
    </Svg>
  )
}

export default SvgComponent
