import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MailSVG(props) {
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
        d="M16.268 5.313H4.486a2.031 2.031 0 00-2.03 2.032v12.187a2.031 2.031 0 002.03 2.031h16.998a2.031 2.031 0 002.032-2.03v-6.958"
        stroke="#5162AC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.705 8.563l7.313 5.688 4.418-3.335"
        stroke="#5162AC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.953 9.376a2.435 2.435 0 100-4.87 2.435 2.435 0 000 4.87z"
        fill="#5162AC"
      />
      <Path
        d="M21.956 10.188a3.247 3.247 0 110-6.494 3.247 3.247 0 010 6.494zm0-4.87a1.625 1.625 0 10-.006 3.25 1.625 1.625 0 00.006-3.25z"
        fill="#5162AC"
      />
    </Svg>
  )
}

export default MailSVG
