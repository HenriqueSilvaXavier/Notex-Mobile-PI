import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CommentSVG(props) {
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
        d="M10.5.38a10 10 0 00-10 10 9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09 1 1 0 00.95.58h9a10 10 0 000-20zm0 18H3.91l.93-.93a1 1 0 000-1.41 8 8 0 115.66 2.34z"
        fill="#3C3C3C"
      />
    </Svg>
  )
}

export default CommentSVG;
