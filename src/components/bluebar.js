/*
* righthand blue bar that tells you where you are
*/

import React from "react"
import styled from "styled-components"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'

const Blue = styled.div`
  position: fixed;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 8px;
  background-color: blue;
`
const PageTitle = styled.div`
  position: fixed;
  left: 87%;
  top: 15%;
  width: 250px;
  z-index: 0;
  font-size: 2em;
  transform: rotate(-90deg);
  color: blue;
`
export default function Bluebar(props) {
  return (
    <div>
      <Blue></Blue>
      <PageTitle>{props.name}</PageTitle>
    </div>
  )
}
