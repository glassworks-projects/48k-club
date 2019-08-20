/*
* righthand blue bar that tells you where you are
*/
import React from "react"
import styled from "styled-components"
import "../styles/global.css"


const Blue = styled.div`
  position: fixed;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 8px;
  background-color: blue;
`
const PageTitle = styled.div`
  position: absolute;
  text-align: right;
  right: -80px;
  top: 30%;
  width: 250px;
  z-index: 0;
  font-size: 2em;
  transform: rotate(-90deg);
  color: blue;
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-height: 500px) {
    display: none;
  }
`
export default function Bluebar(props) {
  return (
    <div>
      <Blue></Blue>
      <PageTitle>{props.name}</PageTitle>
    </div>
  )
}
