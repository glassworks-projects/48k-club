import React from "react"
import {Wrapper, ExtLink, Navigation, Bluebar, Socials} from "../components/export"
import {Link} from "gatsby"
import styled from "styled-components"
import "../styles/global.css"

const Cover = styled.img`
  object-fit: contain;
  height: inherit;
  align-self: flex-start;
  margin-left: 8vw;
  @media screen and (max-width: 600px) {
    align-self: center;
    max-width: 80vw;
    margin: auto;
    margin-bottom: 5vh;
  }
`

const Container = styled.div`
  position: absolute;
  top: 55%;
  display: flex;
  height: 70vh;
  margin-top: -35vh;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Textbox = styled.div`
  height: inherit;
  padding-top: 1vh;
  width: 40vw;
  @media screen and (max-width: 600px) {
    width: 80vw;
    text-align: center;
  }
`
const textPadding = "2vw";

const H1 = styled.h1`
  padding-left: ${textPadding};
  font-size: 2.5em;
`
const H2 = styled.h2`
  padding-left: ${textPadding};
  font-weight: 300;
  line-height: 0.4em;
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

// const RelNav = styled.div`
//   height: inherit;
//   padding-top: 1vh;
//   width: 30vw;
// `

const UL = styled.ul`
  text-align: right;
  list-style: none;
`

export default function Release (props) {
  return(
    <Wrapper title={props.title}>
      <body>
        <Navigation />
        <Container>
          <Cover src={props.img} />
          <Textbox>
            <H2>{props.artistName}</H2>
            <H1>{props.releaseName}</H1>
            <SVG>
              <line x1="0" y1="0" x2="200" y2="0"
                style={{stroke: `1px solid white`}}
              />
            </SVG>
            <P>{props.text}</P>
            <div>{props.anythingElse}</div>
            <Btn href={props.href} target="_blank">Stream / Buy</Btn> <br/>
          </Textbox>
          {/* <RelNav>
            <H2>Other releases:</H2>
            <UL>
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </UL>
          </RelNav> */}
          <Socials color="blue"/>
        </Container>

      </body>
    </Wrapper>
  )
}
