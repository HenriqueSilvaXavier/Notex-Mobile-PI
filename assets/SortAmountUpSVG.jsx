import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SortAmountUpSVG(props) {
  return (
    <Svg
      width={22}  // Tamanho reduzido
      height={22} // Manter proporção igual
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.586 7.42l-.58-.6V22a2 2 0 11-3.999 0V6.82l-.58.6A2.008 2.008 0 11.589 4.58l4-4a2 2 0 01.66-.42 1.88 1.88 0 011.519 0c.245.096.47.238.66.42l3.999 4a2.007 2.007 0 01-1.42 3.428 2.01 2.01 0 01-1.42-.588zM18.004 20H38a2 2 0 110 4H18.005a2 2 0 110-4zM38 14H18.005a2 2 0 010-4H38a2 2 0 010 4zm0-10H18.005a2 2 0 010-4H38a2 2 0 010 4z"
        fill="#BCC1CD"
      />
    </Svg>
  )
}

export default SortAmountUpSVG;
