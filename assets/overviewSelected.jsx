import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OverviewSelectedSVG(props) {
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
        d="M20.5 8.38l-6-5.26a3 3 0 00-4 0l-6 5.26a3 3 0 00-1 2.26v8.74a3 3 0 003 3h12a3 3 0 003-3v-8.75a3 3 0 00-1-2.25zm-6 12h-4v-5a1 1 0 011-1h2a1 1 0 011 1v5zm5-1a1 1 0 01-1 1h-2v-5a3 3 0 00-3-3h-2a3 3 0 00-3 3v5h-2a1 1 0 01-1-1v-8.75a1 1 0 01.34-.75l6-5.25a1 1 0 011.32 0l6 5.25a1 1 0 01.34.75v8.75z"
        fill="#8F98FF"
      />
    </Svg>
  )
}

export default OverviewSelectedSVG;
