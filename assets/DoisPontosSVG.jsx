import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DoisPontosSVG(props) {
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
        d="M12.875 14a2 2 0 100 4 2 2 0 000-4zM13.986 9.663a2 2 0 11-2.222-3.326 2 2 0 012.222 3.326z"
        fill="#fff"
      />
    </Svg>
  )
}

export default DoisPontosSVG;
