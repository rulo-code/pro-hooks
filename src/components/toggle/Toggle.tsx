import React from "react"
import useTheme from "../../utils/hooks/useTheme"

import "./toggle.scss"

export const Toggle: React.FC = () => {
  const { setDark, dark } = useTheme()

  return (
    <div className="toggleContainer">
      <span className="toggle">
        <input
          onChange={() => setDark(!dark)}
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={dark}
        />
        <label htmlFor="checkbox"></label>
      </span>
    </div>
  )
}

export default Toggle