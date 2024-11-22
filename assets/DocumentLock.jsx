import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DocumentLockSVG(props) {
  return (
    <Svg
      width={26}
      height={25}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.563 14.844v-.88c0-.811-.697-1.464-1.563-1.464s-1.563.653-1.563 1.465v.879"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.344 20.313h-4.688a1.562 1.562 0 01-1.562-1.563v-2.344a1.562 1.562 0 011.562-1.562h4.688a1.562 1.562 0 011.562 1.562v2.344a1.563 1.563 0 01-1.562 1.563z"
        fill="#fff"
      />
      <Path
        d="M20.813 10.803v9.51a2.344 2.344 0 01-2.344 2.343H7.53a2.344 2.344 0 01-2.343-2.343V4.688A2.344 2.344 0 017.53 2.344h4.822c.414 0 .812.164 1.104.457L20.355 9.7c.293.293.457.69.457 1.104z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M13 2.484v6.11a1.563 1.563 0 001.563 1.562h6.109"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DocumentLockSVG;
