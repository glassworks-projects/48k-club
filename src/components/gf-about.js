import React from "react"
import {Wrapper, ImgCarousel} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"
import {Link} from "gatsby"
import "../styles/global.css"

const GF = styled.h1`
  color: white;
  position: absolute;
  text-align: right;
  font-weight: 300;
  font-size: 10vw;
  right: 4vw;
  top: -5vh;
  z-index: 2;

  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
  @media screen and (max-width: 600px) {
    top: -1vh;
  }
`

const Num = styled.h1`
  text-align: right;
  font-weight: 300;
  font-size: 18vw;
  position: absolute;
  bottom: -10vh;
  right: 5vw;
  @media screen and (max-width: 600px) {
    bottom: auto;
    top: 23vh;
  }
`

const BodyText = styled.div`
  ${'' /* top: 25vh; */}
  font-weight: 300;
  line-height: 1.1em;
  padding-left: 1vw;
  @media screen and (max-width: 600px) {
    order: 2;
    text-align: center;
    font-size: 1.2em;
    width: 85vw;
    padding-top: 2vh;
  }
  @media screen and (max-height: 500px) {
    align-self: bottom;
  }
`

const GFCon = styled.div`

`
const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 80vh;
  top: 10vh;
  width: 100vw;
  justify-content: space-around;
  @media screen and (max-width: 600px) {
    top: 12vh;
    flex-direction: column;
    justify-content: auto;
  }
  @media screen and (max-height: 500px) {
    top: 20vh;
    height: 80vh;
  }
`
// const Container = styled.div`
//   display: flex;
// `

export default function GFAbout (props) {
  return (
    <Wrapper title={props.title}>
      <body>
        <Container>
          <BodyText>
            {props.bodytext}
          </BodyText>
          <GFCon>
            <Link to="geofront">
              <GF>GEOFRONT</GF>
            </Link>
            <ImgCarousel>
              {props.images}
            </ImgCarousel>
            <Num>{props.number}</Num>
          </GFCon>

        </Container>
      </body>
    </Wrapper>
  )
}
