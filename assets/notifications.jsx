import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NotificationsSVG(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.75 16.5v.688a2.75 2.75 0 11-5.5 0V16.5m10.127-1.4c-1.104-1.35-1.883-2.037-1.883-5.76 0-3.41-1.74-4.625-3.174-5.215a.765.765 0 01-.427-.453c-.252-.856-.956-1.61-1.893-1.61s-1.642.755-1.89 1.61a.758.758 0 01-.428.453c-1.435.59-3.174 1.801-3.174 5.214-.002 3.723-.781 4.411-1.885 5.761-.457.56-.057 1.4.743 1.4h13.272c.796 0 1.194-.843.739-1.4z"
        stroke="#7D7D7D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NotificationsSVG;
