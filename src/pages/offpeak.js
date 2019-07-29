import React from "react"
import {text} from "../text/offpeak-about.json"
import {ExtLink, Navigation, Bluebar, Wrapper, Socials} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import "../styles/global.css"

const Description = styled.div`
  padding: 20px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5em;
  text-align: center;
  font-family: Cormorant Garamond;
  font-weight: 400;
`

const Nav = styled.ul`
  position: absolute;
  left: 50%;
  top: 75%;
  font-size: 5em;
  transform: translate(-50%, -50%);
  text-align: center;
  list-style: none;
  width: 1000px;
`

export default function OffPeak () {

  return (
    <Wrapper title="Off Peak">
      <body>
        <Navigation />
        <Bluebar name="OFF PEAK"/>
        <Socials color="blue" />
        <Description>{text}</Description>
        <Nav>
          <li>
            <ExtLink href="https://weareinsert.com/textual/off-peak-tomas-fraser/">
              005: TOMAS FRASER
            </ExtLink>
          </li>
          <li>
            <ExtLink href="https://weareinsert.com/textual/off-peak-bbylu/">
              004: BBYLU
            </ExtLink>
          </li>
          <li>
            <ExtLink href="https://weareinsert.com/textual/off-peak-spurz/">
              003: SPURZ
            </ExtLink>
          </li>
          <li>
            <ExtLink href="https://weareinsert.com/textual/off-peak-jsport/">
              002: JSPORT
            </ExtLink>
          </li>
          <li>
            <ExtLink href="https://weareinsert.com/textual/off-peak-qrtr/">
              001: QRTR
            </ExtLink>
          </li>
        </Nav>
      </body>
    </Wrapper>
  )
}
