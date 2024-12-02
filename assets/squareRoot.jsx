import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

function SquareRootOfX(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_943_114)">
        <Path
          d="M22.931 5.033H11.288l-4.57 16.09a1.07 1.07 0 01-.982.74H5.7a1.07 1.07 0 01-.992-.67L2.84 16.52h-1.77a1.068 1.068 0 110-2.137h2.493c.437 0 .83.266.993.672l1.035 2.588 3.9-14.006a1.069 1.069 0 011.018-.742h12.423a1.069 1.069 0 110 2.137zm.576 14.36l-4.212-4.732 4.014-4.456a.268.268 0 00-.198-.446h-2.54a.269.269 0 00-.202.093l-2.695 3.124-2.673-3.123a.266.266 0 00-.203-.094h-2.656a.266.266 0 00-.199.445l3.97 4.457-4.18 4.733a.268.268 0 00-.043.287c.043.096.139.157.243.157h2.632c.08 0 .155-.035.205-.096l2.79-3.347 2.855 3.35c.051.059.125.093.204.093h2.69a.266.266 0 00.198-.445z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_943_114">
          <Rect y={0.379883} width={24} height={24} rx={8} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SquareRootOfX
