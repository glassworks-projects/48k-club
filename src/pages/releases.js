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
  width: 80%;
  ${'' /* background-color: red; */}
  @media screen and (max-width: 600px) {
    font-size: 2.3em;
    line-height: 1.2em;
  }
`

const Entry = styled.p`
  position: relative;
  width: fit-content;
  left: ${props => props.left};
  cursor: inherit;
  &:hover {
    background-image: linear-gradient(0deg, rgba(0,0,255,1) 0%, rgba(0,0,255,1) 50%);
  }
  @media screen and (max-width: 600px) {
    max-width: 87%;
  }
`

const L = styled(Link)`
  text-decoration: inherit;
  color:inherit;
`

export default class Releases extends React.Component {
  render () {
    return (
      <Wrapper title="Releases" blue={true}>
        <body>
          <Navigation />
          <Bluebar name="RELEASES" />

          <Titles>
            <L to="formless"><Entry left="2vw"><span>FORMLESS</span></Entry></L>
            <L to="screamtape"><Entry left="4vw">SCREAM TAPE</Entry></L>
            <L to="lapse"><Entry left="10vw">LAPSE (MIRACLES RMX)</Entry></L>
            <L to="cathedral"><Entry left="8vw">CATHEDRAL</Entry></L>
          </Titles>
          <Socials color="black" />
        </body>
      </Wrapper>
    )
  }
}
