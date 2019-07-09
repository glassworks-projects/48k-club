import React from "react"
import typography from "../utils/typography"
import ExtLink from "../components/extlink"
import {Link} from "gatsby"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"

const Nav = styled.ul`
  position: fixed;
  height: 70px;
  right: 0%;
  padding-top: 20px;
  padding-right: 10px;
  list-style: none;
  text-align: right;
  z-index: 1;
  border-bottom: 0.1pt solid white;
  background-color: black;
  width: 100%;
`
const Li = styled.li`
  display: inline-block;
  padding: 10px;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: inherit;

  &:hover {
    font-style: italic;
    text-decoration: underline;
    text-decoration-color: blue;
  }
`
const ExtNavLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    font-style: italic;
    text-decoration: underline;
    text-decoration-color: blue;
  }
`
export default function Navigation () {
  return (
    <Nav>
      <Li><NavLink to="blog">BLOG</NavLink></Li>
      <Li><NavLink to="releases">RELEASES</NavLink></Li>
      <Li><ExtNavLink href="https://48ksps.bigcartel.com" target="_blank">STORE</ExtNavLink></Li>
      <Li><NavLink to="geofront">GEOFRONT</NavLink></Li>
      <Li><NavLink to="offpeak">OFF PEAK</NavLink></Li>
      <Li><NavLink to="about">ABOUT</NavLink></Li>
    </Nav>
  )
}
