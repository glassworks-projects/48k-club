import React from "react"
import {Wrapper, InLink, ExtLink, SVG, BlogCarousel} from "../components/export"
import typography from "../utils/typography"
import { TypographyStyle, GoogleFont } from 'react-typography'
import styled from "styled-components"

const HomeNav = styled.ul`
  padding-top: 5%;
  font-size: 7em;
  text-align: center;
  list-style: none;
`

const BlueLi = styled.li`

  color: white;
  text-decoration: none;
  cursor: inherit;

  &:hover {
    font-family: 'Cormorant Garamond';
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: blue;
  }
`
export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBlog : false
    }
  }

  postLoad() {
    this.setState({showBlog : !this.state.showBlog});
  }

  render() {
    return (
      <Wrapper title="Home">
        <body>
          <HomeNav>
            <BlueLi onClick={this.postLoad.bind(this)}>BLOG</BlueLi>
            {this.state.showBlog && <BlogCarousel />}
            <li><InLink to="releases">RELEASES</InLink></li>
            <li><ExtLink serif={true} href="https://48ksps.bigcartel.com">STORE</ExtLink></li>
            <li><InLink to="geofront">GEOFRONT</InLink></li>
            <li><InLink to="offpeak">OFF PEAK</InLink></li>
            <li><InLink to="about">ABOUT</InLink></li>
          </HomeNav>
          <SVG>
            <polygon points="0,2 1260,2 2,700" />
          </SVG>
        </body>
      </Wrapper>
    )
  }
}
