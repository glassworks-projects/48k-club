import React from "react"
import styled from "styled-components"
import {Wrapper, Navigation, Bluebar, Socials, InLink} from "../components/export"
import "../styles/global.css"

const Box = styled.div`
  position: absolute;
  height: 20vh;
  top: 40vh;
  width: 70vw;
  left: 15vw;
  text-align: center;
  display: flex;
  align-items: center;
`

const P = styled.p`
  margin: 0 auto;
  font-size: 2.5em;
`

export default class NotFound extends React.Component {
  render () {
    return (
      <Wrapper title="404 Not Found">
        <Navigation />
        <Box>
          <P>Here's our cute 404 error page. <br />Use the navigation bar or the logo to go back.</P>
        </Box>
      </Wrapper>
    )
  }
}
