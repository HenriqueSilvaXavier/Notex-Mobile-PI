import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MarkPoint(props) {
  return (
    <Svg
      width={12}
      height={14}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.875 1.987a5.657 5.657 0 10-8 8l3.513 3.52a.666.666 0 00.947 0l3.54-3.554a5.633 5.633 0 000-7.966zM8.92 9l-3.046 3.06L2.828 9a4.307 4.307 0 116.093 0zM3.875 3.94a2.88 2.88 0 001.463 4.853 2.873 2.873 0 003.443-2.786 2.826 2.826 0 00-.84-2.034 2.867 2.867 0 00-4.066-.033zM7 7.06a1.553 1.553 0 11.447-1.087c-.01.412-.182.803-.48 1.087h.033z"
        fill="#fff"
      />
    </Svg>
  )
}

export default MarkPoint
