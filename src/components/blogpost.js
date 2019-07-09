import React from "react"
import styled from "styled-components"
import typography from "../utils/typography"

const BodyText = styled.div`
  font-size: 0.2em;
  text-align: center;
  font-family: Cormorant Garamond;
  font-weight: 400;
  outline: 1px solid white;
  height: 350px;
  width: 75%;
  background-color: black;
  margin: auto;
`

const Box = styled.svg`
  fill: blue;
  stroke: 1px white;
`

export default function BlogPost(props) {
  return (
      <BodyText>hi there</BodyText>
  )
}
