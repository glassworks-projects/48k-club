/*
* a wrapper for creating a full black background for all pages,
* with logo in the corner
*/
import {Link} from "gatsby"
import logo from "../media/logo.png"
import {SVG} from "../components/export"
import React from "react"
import styled from "styled-components"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'

const Wrap = styled.section`
  cursor: crosshair;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow: scroll;
  z-index:-1;
  ${props => props.blue ? ({
    background: 'rgb(0,0,255)',
    background: 'linear-gradient(0deg, rgba(0,0,255,1) 0%, rgba(0,0,0,1) 59%)'
    }) : ({background:'black'})};
`

const Logo = styled.img`
  position: absolute;
  width: 135px;
  padding: 20px;
  z-index: 2;
  @media screen and (max-width: 600px) {
    width: 100px;
  }
`
function Title(props) {
  return (
    <title>{props.title}</title>
  )
}

export default function Wrapper (props) {
  return (
    <Wrap blue={props.blue}>
      <head>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <Title title={props.title}/>
      </head>
      <Link to="" style={{cursor: `inherit`}}>
        <Logo src={logo} />
      </Link>
      {props.children}
    </Wrap>
  )
}
