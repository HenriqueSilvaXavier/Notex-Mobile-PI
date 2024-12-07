import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Timetable(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.667 2.167v3.25m8.666-3.25v3.25m6.5 18.416L22.75 22.75M3.792 9.848h18.416m-7.724 13.985H8.667c-3.792 0-5.417-2.166-5.417-5.416V9.208c0-3.25 1.625-5.416 5.417-5.416h8.666c3.792 0 5.417 2.166 5.417 5.416v4.875m-9.755.759h.01m-4.02 0h.01m-.01 3.25h.01m14.188 1.625a3.467 3.467 0 11-6.933 0 3.467 3.467 0 016.933 0z"
        stroke="#5162AC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Timetable
