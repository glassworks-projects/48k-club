import React from "react"
import {Wrapper, ExtLink, Navigation, Bluebar, Socials, ImgCarousel} from "../components/export"
import {Link} from "gatsby"
import styled from "styled-components"
import "../styles/global.css"
import {Carousel} from 'react-responsive-carousel'

const Cover = styled.img`
  object-fit: contain;
  height: inherit;
  align-self: flex-start;
  margin-left: 2vw;
  @media screen and (max-width: 600px) {
    align-self: center;
    max-width: 80vw;
    margin: auto;
    margin-bottom: 5vh;
  }
`

const Container = styled.div`
  position: absolute;
  top: 20vh;
  display: flex;
  height: 70vh;
  ${'' /* margin-top: -35vh; */}
  width: 100%;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    top: 12vh;
  }
`

const Textbox = styled.div`
  height: inherit;
  padding-top: 1vh;
  width: 45vw;
  @media screen and (max-width: 600px) {
    width: 80vw;
    text-align: center;
  }
`
const textPadding = "2vw";

const H1 = styled.h1`
  padding-left: ${textPadding};
  font-size: 2.5em;
  font-weight: 300;
  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
  @media screen and (max-height: 500px) {
    font-size: 2em;
  }
`
const H2 = styled.h2`
  padding-left: ${textPadding};
  font-weight: 300;
  line-height: 0.4em;
  @media screen and (max-width: 600px) {
        padding-top: 2vh;
  }
`

const P = styled.p`
  padding-left: ${textPadding};
  font-weight: 300;
`


const SVG = styled.svg`
  position: relative;
  height: 5vh;
  stroke: white;
  stroke-width: 1;
  @media screen and (max-width: 600px) {
    display: none;
  }
`
const Btn = styled.a`
  padding-left: ${textPadding};
  font-size: 1.8em;
  color: white;
  text-decoration: none;
  line-height: 2em;

  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`
const L = styled(Link)`
  padding-left: ${textPadding};
  font-size: 1.8em;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`
const Arrow = styled.img`
  width: 100px;
  padding-left: 2vw;
  height: auto;
  object-fit: contain;
  margin-bottom: 0px;
`

const UL = styled.ul`
  text-align: right;
  list-style: none;
`
const L2 = styled(Link)`
  align-self: flex-end;
  margin-bottom: 0px;
  cursor: inherit;
  @media screen and (max-width: 600px) {
    display: none;
  }
`
const Crs = styled(Carousel)`
  margin-left: 2vw;
  align-self: flex-start;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
`
function Wide() {
  return (typeof window !== `undefined`) ? (window.innerWidth > 600) : true;
}

export default function ImgAbout (props) {
  return(
    <Wrapper title={props.title}>
      <body>
        <Navigation />
        <Container>
          <L2 to={props.gf ? 'geofront' : 'releases'}>
            <Arrow src={require("../media/arrow.png")} alt="back arrow"/>
          </L2>
          {props.gf ?
            <Crs
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              showIndicators={false}
              width={Wide() ? "52vw" : "90vw"}
              useKeyboardArrows={true}
            >
              {props.images}
            </Crs> :
            <Cover src={props.img} alt="album artwork"/>
          }
          <Textbox>
            <H2>{props.heading}</H2>
            <H1>{props.subheading}</H1>
            <SVG>
              <line x1="0" y1="0" x2="200" y2="0"
                style={{stroke: `1px solid white`}}
              />
            </SVG>
            <P>{props.text}</P>
            <div>{props.anythingElse}</div>
            {!(props.gf) && <Btn href={props.href} target="_blank">Stream / Buy</Btn>}
            {!props.gf && <br/>}
          </Textbox>
          <Socials color="blue"/>
        </Container>

      </body>
    </Wrapper>
  )
}
