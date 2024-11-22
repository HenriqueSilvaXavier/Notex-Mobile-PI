import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function LibrarySVG(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_955_514)"
        stroke="#5162AC"
        strokeWidth={2}
        strokeLinejoin="round"
      >
        <Path d="M4.08 5.259H2.455a.813.813 0 00-.812.812v17.063c0 .448.363.812.812.812H4.08a.812.812 0 00.813-.813V6.072a.813.813 0 00-.813-.812z" />
        <Path d="M5.705 11.758h6.5m-6.5 8.938h6.5" strokeLinecap="round" />
        <Path d="M11.393 8.509H6.518a.813.813 0 00-.813.812v13.813c0 .448.364.812.813.812h4.875a.812.812 0 00.812-.813V9.322a.813.813 0 00-.812-.812zM17.08 2.821h-3.25a.812.812 0 00-.812.813v19.5c0 .448.363.812.812.812h3.25a.812.812 0 00.813-.813v-19.5a.813.813 0 00-.813-.812zM21.47 5.264l-2.051.216c-.565.06-.974.588-.91 1.173l1.773 16.33c.064.586.577 1.016 1.142.957l2.051-.215c.565-.06.974-.588.91-1.173l-1.77-16.329c-.066-.588-.58-1.018-1.144-.959z" />
      </G>
      <Defs>
        <ClipPath id="clip0_955_514">
          <Path
            fill="#fff"
            transform="translate(.018 .384)"
            d="M0 0H26V26H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LibrarySVG;
