import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SortAmountDownSVG(props) {
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
        d="M8.586 16.58l-.58.6V2a2 2 0 10-3.999 0v15.18l-.58-.6a2.008 2.008 0 10-2.839 2.84l4 4a2 2 0 00.66.42 1.88 1.88 0 001.519 0c.245-.096.47-.238.66-.42l3.999-4a2.007 2.007 0 00-.652-3.276 2.01 2.01 0 00-2.188.436zM18.004 4H38a2 2 0 100-4H18.005a2 2 0 100 4zM38 10H18.005a2 2 0 000 4H38a2 2 0 000-4zm0 10H18.005a2 2 0 000 4H38a2 2 0 000-4z"
        fill="#BCC1CD"
      />
    </Svg>
  )
}

export default SortAmountDownSVG;
