import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarSelectedSVG(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.5 14h-8a1 1 0 000 2h8a1 1 0 000-2zm0-4h-6a1 1 0 000 2h6a1 1 0 000-2zm4-6h-3V3a1 1 0 00-2 0v1h-2V3a1 1 0 00-2 0v1h-2V3a1 1 0 00-2 0v1h-3a1 1 0 00-1 1v14a3 3 0 003 3h12a3 3 0 003-3V5a1 1 0 00-1-1zm-1 15a1 1 0 01-1 1h-12a1 1 0 01-1-1V6h2v1a1 1 0 002 0V6h2v1a1 1 0 002 0V6h2v1a1 1 0 002 0V6h2v13z"
        fill="#8F98FF"
      />
    </Svg>
  )
}

export default CalendarSelectedSVG;