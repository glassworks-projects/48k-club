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
  right: 5vw;
  top: 4vw;
  ${'' /* padding: 4vh 5vw 0 0; */}
  z-index: 2;
  ${'' /* display: inline-block; */}

  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`

const Num = styled.h1`
  text-align: right;
  font-weight: 300;
  font-size: 18vw;
  position: absolute;
  bottom: 5vh;
  right: 5vw;
`

const BodyText = styled.div`
  top: 25vh;
  font-weight: 300;
  line-height: 1.1em;
  padding-left: 1vw;
  position: absolute;
  width: 30vw;
`

export default function GFAbout (props) {
  return (
    <Wrapper title={props.title}>
      <body>
        <Link to="geofront">
          <GF>GEOFRONT</GF>
        </Link>
        <ImgCarousel>
          {props.images}
        </ImgCarousel>
        <Num>{props.number}</Num>
        <BodyText>
          {props.bodytext}
        </BodyText>
      </body>
    </Wrapper>
  )
}
