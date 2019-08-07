import React from "react"
import styled from "styled-components"
import typography from "../utils/typography"

const Container = styled.div`
  display: flex;
  border: 1px solid white;
  height: 350px;
  width: 75%;
  margin: auto;
`

const BigDate = styled.h1`
  text-align: left;
  font-family: 'Cormorant Garamond';
  font-weight: 600;
  font-style: italic;
  font-size: 5em;
  @media screen and (max-width: 600px) {
    font-size: 3em;
  }
`

const Thumb = styled.img`
  object-fit: cover;
  order: 1;
  float: left;
  flex-shrink: 2;
  min-width: 25%;
  height: 100%;
  ${'' /* padding: 10px; */}
  @media screen and (max-width: 600px) {
    min-width: 0%;
  }
`

const BodyText = styled.p`
  float: right;
  order: 3;
  font-size: 0.2em;
  text-align: justify;
  font-weight: 300;
  padding: 20px;
  overflow: scroll;
  @media screen and (max-width: 600px) {
    line-height: 1em;
    font-size: 0.3em;
    padding: 10px;
  }
`

const Line = styled.div`
  order: 2;
  border-left: 1px solid white;
`

export default function BlogPost(props) {
  return (
    <div>
      <Container>
        <Thumb src={props.img}/>
        <Line />
        <BodyText>
          <BigDate>{props.date}</BigDate>
          {props.children}
        </BodyText>
      </Container>
    </div>
  )
}
