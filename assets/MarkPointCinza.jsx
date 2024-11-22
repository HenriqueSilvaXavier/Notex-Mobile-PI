import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MarkPointCinza(props) {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.875 2.987a5.657 5.657 0 10-8 8l3.513 3.52a.666.666 0 00.947 0l3.54-3.554a5.633 5.633 0 000-7.966zM11.92 10l-3.046 3.06L5.828 10a4.307 4.307 0 116.093 0zM6.875 4.94a2.88 2.88 0 001.463 4.853 2.873 2.873 0 003.443-2.786 2.826 2.826 0 00-.84-2.034 2.866 2.866 0 00-4.066-.033zM10 8.06a1.553 1.553 0 11.447-1.087c-.01.412-.182.803-.48 1.087h.033z"
        fill="#88889D"
      />
    </Svg>
  )
}

export default MarkPointCinza
