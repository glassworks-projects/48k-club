import React from "react"
import typography from "../utils/typography"
import ExtLink from "../components/extlink"
import {Link} from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"

const Nav = styled.ul`
  position: absolute;
  height: 70px;
  right: 0%;
  font-size: 1.1em;
  padding-top: 20px;
  padding-right: 20px;
  list-style: none;
  text-align: right;
  z-index: 1;
  ${'' /* border-bottom: 1px solid blue; */}
  ${'' /* background-color: black; */}
  width: 100%;
`
const Li = styled.li`
  display: inline-block;
  padding: 10px 15px;
  @media screen and (max-width: 600px) {
    display: auto;
    list-style: none;
    padding: auto;
  }
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: inherit;

  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`
const ExtNavLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '30px',
    height: '20px',
    right: '20px',
    top: '20px'
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'black',
    fontSize: '2em',
    lineHeight: `1.2em`,
    textAlign: 'center'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default function Navigation () {
  return (
  (window.innerWidth < 600 || window.innerHeight < 500) ?
    <Menu right styles={styles} width={"100%"}>
      <ul>
        <Li><NavLink to="">BLOG</NavLink></Li>
        <Li><NavLink to="releases">RELEASES</NavLink></Li>
        <Li><ExtNavLink href="https://48ksps.bigcartel.com" target="_blank">STORE</ExtNavLink></Li>
        <Li><NavLink to="geofront">GEOFRONT</NavLink></Li>
        <Li><NavLink to="offpeak">OFF PEAK</NavLink></Li>
        <Li><NavLink to="about">ABOUT</NavLink></Li>
      </ul>
    </Menu>
    :
    <Nav>
      <Li><NavLink to="">BLOG</NavLink></Li>
      <Li><NavLink to="releases">RELEASES</NavLink></Li>
      <Li><ExtNavLink href="https://48ksps.bigcartel.com" target="_blank">STORE</ExtNavLink></Li>
      <Li><NavLink to="geofront">GEOFRONT</NavLink></Li>
      <Li><NavLink to="offpeak">OFF PEAK</NavLink></Li>
      <Li><NavLink to="about">ABOUT</NavLink></Li>
    </Nav>
  )
}
