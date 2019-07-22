import React from "react"
import styled from "styled-components"

const Drawbox = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  fill: none;
  stroke: white;
  stroke-width: 1;
  z-index: -1;
`

export default function SVG (props) {
  return (
    <div>
      <Drawbox>
        {props.children}
      </Drawbox>
    </div>
  )
}
