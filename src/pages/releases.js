import React from "react"
import styled from "styled-components"
import {Wrapper, Navigation, Bluebar, ExtLink, Socials} from "../components/export"
import "../styles/global.css"
import {Link} from "gatsby"

const Titles = styled.div`
  margin: 0 auto;
  font-size: 4.5em;
  padding-top: 20vh;
  display: block;
`

const Entry = styled.p`
  position: relative;
  left: ${props => props.left};
  width: fit-content;
  cursor: inherit;
  &:hover {
    background-image: linear-gradient(0deg, rgba(0,0,255,1) 0%, rgba(0,0,255,1) 50%);
  }
`

export default class Releases extends React.Component {
  render () {
    return (
      <Wrapper title="Releases" blue={true}>
        <body>
          <Navigation />
          <Bluebar name="RELEASES" />
          <Socials color="black" />
          <Titles>
            <Entry left="20vw">FORMLESS</Entry>
            <Entry left="35vw">SCREAM TAPE</Entry>
            <Entry left="24vw">LAPSE (MIRACLES RMX)</Entry>
            <Entry left="33vw">CATHEDRAL</Entry>
          </Titles>
        </body>
      </Wrapper>
    )
  }
}
